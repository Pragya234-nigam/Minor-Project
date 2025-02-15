const multer = require('multer');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const generatedOTP = {};

const EMAIL_ID = 'dsmnruclubs234@gmail.com';
const EMAIL_PASSWORD = 'bgatejczeafozggu';

// initialize multer
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './static/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploader = multer({storage : fileStorage});


// initialize nodemailer
const mailConfig = {
    service : 'gmail',
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASSWORD,
    }
};
const transporter = nodemailer.createTransport(mailConfig);

const generateOTP = () => {
    const otp = Math.floor(Math.random() * 1000000);
    console.log(otp);
    return otp;
}

router.post('/uploadfile', uploader.single('myfile'), (req, res) => {
    res.json({status : 'success'});
})

router.post('/sendotp', (req, res) => {
    const otp = generateOTP();
    generatedOTP[req.body.email] = otp;
    console.log(generatedOTP);
    transporter.sendMail({
        from : process.env.EMAIL_ID,
        to : req.body.email,
        subject : 'OTP for Password Reset',
        html: `<p> OTP for password reset is <b>${otp}</b> </p>`
    })
    .then((info) => {
        return res.status(201).json(
            {
                msg: "OTP Sent",
                info: info.messageId,
                preview: nodemailer.getTestMessageUrl(info)
            }
        )
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({ msg: err });
    });
})

router.post('/sendmail', (req, res) => {
    const {email, subject, message} = req.body;
    
    transporter.sendMail({
        from : EMAIL_ID,
        to : email,
        subject : subject,
        html: message
    })
    .then((info) => {
        return res.status(201).json(
            {
                info: info.messageId,
                preview: nodemailer.getTestMessageUrl(info)
            }
        )
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({ msg: err });
    });
})


router.get('/verifyotp/:email/:otp', (req, res) => {
    const oldOTP = generatedOTP[req.params.email];
    if(oldOTP == req.params.otp){
        return res.status(200).json({msg : 'OTP Verified'});
    }else{
        return res.status(401).json({msg : 'OTP Not Verified'});
    }
})

module.exports = router;