'use client';
import { IconVolume } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const speech2 = new SpeechSynthesisUtterance();

const SpeechInput = (value) => {

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    return;
  }

  console.log(value);

  speech2.text = value;
  window.speechSynthesis.speak(speech2);
}
const voiceResponse = (e) => {
  // const speech = new SpeechSynthesisUtterance();
  // if (window.speechSynthesis.speaking) {
  //   window.speechSynthesis.cancel();
  //   return;
  // }
  console.log(e.target.innerText);
  SpeechInput(e.target.innerText);
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
const Events = () => {

  // initialize form
  const registerForm = useFormik({
    initialValues: {
      branch:'',
      firstname: '',
      lastname: '',
      roll_no: '',
      clubName: '',
      date: '',
      activity: ''
    },

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios.post('http://localhost:5000/event/add', values)
        .then((result) => {
          toast.success('Activity Update successfully');
          resetForm();
        }).catch((err) => {
          toast.error('Failed to Update');
        });
    }

  })

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 cursor-pointer">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 onClick={voiceResponse} className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        Events
      </h2>
      <p onClick={voiceResponse} className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        This is a section where you can add your events and activities.
      </p>
    </div>
    {/* text - end */}
    {/* form - start */}
    <form onSubmit={registerForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
    <div>
            <label
            onClick={voiceResponse}
              htmlFor="Branch"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Branch*
            </label>
            <div className='flex gap-3'>
            <input
            onClick={voiceResponse}
              name="branch"
              onChange={registerForm.handleChange}
              value={registerForm.values.branch}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            /><button type='button' onClick={e => { SpeechInput(registerForm.values.branch); }}><IconVolume /></button>
            </div>
          </div><br></br>
      <div>
        <label
        onClick={voiceResponse}
          htmlFor="first-name"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          First name*
        </label>
        <div className='flex gap-3'>
        <input
          name="firstname" onChange={registerForm.handleChange}
          value={registerForm.values.firstname}
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        /><button type='button' onClick={e => { SpeechInput(registerForm.values.firstname); }}><IconVolume /></button>
        </div>
      </div>
      <div>
        <label
        onClick={voiceResponse}
          htmlFor="last-name"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
          Last name*
        </label>
        <div className='flex gap-3'>
        <input
          name="lastname"
          onChange={registerForm.handleChange}
          value={registerForm.values.lastname}
          className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
        /><button type='button' onClick={e => { SpeechInput(registerForm.values.lastname); }}><IconVolume /></button>
        </div>
      </div>
      <div>
            <label
            onClick={voiceResponse}
              htmlFor="Roll-Number"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Roll Number*
            </label>
            <div className='flex gap-3'>
            <input
              name="roll_no"
              onChange={registerForm.handleChange}
              value={registerForm.values.roll_no}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            /><button type='button' onClick={e => { SpeechInput(registerForm.values.roll_no); }}><IconVolume /></button>
          </div>
          </div>
      <div className="sm:col-span-2">
        <label
        onClick={voiceResponse}
          htmlFor=" Select your Clubs and Committees which you want to choose*"
          className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
        >
           Select your Clubs and Committees which you want to choose*
        </label><div className='flex gap-3'>
        <select
              name="clubName"
              onChange={registerForm.handleChange}
              value={registerForm.values.clubName}
              className="rounded border bg-gray-50 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option value="">Select Your Club</option>
              {
                clubList.map((club) => (
                  <option key={club} value={club}>{club}</option>
                ))
              }
            </select>
            <button type='button' onClick={e => { SpeechInput(registerForm.values.clubName); }}><IconVolume /></button>
      </div>
      </div>
      <div className="sm:col-span-2">
      <label
      onClick={voiceResponse}
              htmlFor="Activities"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Write Your Activity*
            </label><div className='flex gap-3'>
        <textarea
        name="activity"
        onChange={registerForm.handleChange}
        value={registerForm.values.activity}
          className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
          <button type='button' onClick={e => { SpeechInput(registerForm.values.activity); }}><IconVolume /></button>
      </div></div>
      <div>
            <label
            onClick={voiceResponse}
              htmlFor="date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Date*
            </label>
            <div className='flex gap-3'>
            <input
              type="date"
              name="date"
              onChange={registerForm.handleChange}
              value={registerForm.values.date}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
              <button type='button' onClick={e => { SpeechInput(registerForm.values.date); }}><IconVolume /></button>
           </div>
          </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <button onClick={voiceResponse} className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
          Save your Event
        </button>
      </div>
    </form>
    {/* form - end */}
  </div>
</div>
  )
}

export default Events;