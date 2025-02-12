'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const speech = new SpeechSynthesisUtterance();

  const voiceResponse = (e) => {
    if(window.speechSynthesis.speaking){
      window.speechSynthesis.cancel();
      return;
    }
    console.log(e.target.innerText);
    
    speech.text = e.target.innerText;
    window.speechSynthesis.speak(speech);
  }


const clubList = [
  'BOOK CLUBS',
  'CULTURAL COMMITTEE',
  'DEBATE CLUB / QUIZ CLUB',
  'TECH CLUB',
  'SCIENCE & TECHNOLOGY CLUB',
  'SPORTS CELL',
  'ENTREPRENEURSHIP DEVELOPMENT CELL',
  'ALUMINI CELL',
  'PLACEMENT CELL'
]

const Register = () => {

  // initialize form
  const registerForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      roll_no: '',
      branch:'',
      contact: '',
      clubName: ''
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios.post('http://localhost:5000/user/add', values)
        .then((result) => {
          toast.success('User registered successfully');
          resetForm();
        }).catch((err) => {
          toast.error('Failed to register user');
        });
    }

  })

  return (
    <div className="bg-Slate-300 py-6 sm:py-8 lg:py-12 cursor-pointer" onClick={voiceResponse}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Registration Form
          </h2>
        </div>
        {/* text - end */}
        {/* form - start */}
        <form onSubmit={registerForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              First name*
            </label>
            
            <input
              name="firstname"
              onChange={registerForm.handleChange}
              value={registerForm.values.firstname}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Last name*
            </label>
            <input
              name="lastname"
              onChange={registerForm.handleChange}
              value={registerForm.values.lastname}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>



          <div>
            <label
              htmlFor="password"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Password*
            </label>
            <input
              name="password"
              onChange={registerForm.handleChange}
              value={registerForm.values.password}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              name="email"
              onChange={registerForm.handleChange}
              value={registerForm.values.email}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="Roll-Number"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Roll Number*
            </label>
            <input
              name="roll_no"
              onChange={registerForm.handleChange}
              value={registerForm.values.roll_no}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>



          <div>
            <label
              htmlFor="Branch"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Branch*
            </label>
            <input
              name="branch"
              onChange={registerForm.handleChange}
              value={registerForm.values.branch}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>





          <div>
            <label
              htmlFor="Contach Number"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Contact Number*
            </label>
            <input
              name="contact"
              onChange={registerForm.handleChange}
              value={registerForm.values.contact}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          

          <div className="sm:col-span-2">
            <label
              htmlFor="Write your Clubs and Committees which you want to choose"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Select your Clubs and Committees which you want to choose*
            </label>
            <select
              name="clubName"
              onChange={registerForm.handleChange}
              value={registerForm.values.clubName}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option value="">Select Your Club</option>
              {
                clubList.map((club) => (
                  <option key={club} value={club}>{club}</option>
                ))
              }
            </select>
          </div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Submit
            </button>
            <span className="text-sm text-gray-500">*Required</span>
          </div>
        </form>
        {/* form - end */}
      </div>
    </div>

  )
}

export default Register;