'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useRef } from 'react'
import toast from 'react-hot-toast';
const Message = () => {

  const speech = new SpeechSynthesisUtterance();
  const emailRef = useRef();
  const messageRef = useRef();

  const voiceResponse = (e) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      return;
    }
    console.log(e.target.innerText);

    speech.text = e.target.innerText;
    window.speechSynthesis.speak(speech);
  }

  const emailForm = useFormik({
    initialValues: {
      email: '',
      message: ''
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios.post('http://localhost:5000/util/sendmail', { ...values, subject: 'DSMNRU Clubs : Message from the Teacher' })
        .then((result) => {
          console.log(result);
          toast.success('Mail Sent successfully');
          resetForm();
        }).catch((err) => {
          toast.error('Failed to Send Mail');
        });
    }
  })

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 cursor-pointer" onClick={voiceResponse}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
          <div className="mb-4 sm:mb-8 lg:mb-0">
            <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-left lg:text-3xl">
              Email to the Students
            </h2>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <form className="mb-3 w-full max-w-md gap-2" onSubmit={emailForm.handleSubmit}>
              <input
                id='email'
                onChange={emailForm.handleChange}
                value={emailForm.values.email}
                type="email"
                placeholder="Email"
                className="bg-gray-white mb-4 w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            <textarea
              id='message'
              onChange={emailForm.handleChange}
              value={emailForm.values.message}
              placeholder="Message for Students"
              className="w-full mb-4 max-w-md rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
              <button type='submit' className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Message;