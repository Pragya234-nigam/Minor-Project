'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
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
      clubName: '',
      date: '',
      Activity: ''
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
    <div className="bg-Slate-300 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Events
          </h2>
        </div>
        {/* text - end */}
        {/* form - start */}
        <form onSubmit={registerForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">

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
              className="rounded border bg-gray-50 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option value="">Select Your Club</option>
              {
                clubList.map((club) => (
                  <option key={club} value={club}>{club}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label
              htmlFor="date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Date*
            </label>
            <input
              type="date"
              name="date"
              onChange={registerForm.handleChange}
              value={registerForm.values.date}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div><br></br>
          <div>
            <label
              htmlFor="Activity"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Write Your Activity*
            </label>
            <textarea className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              name="Activity"
              onChange={registerForm.handleChange}
              value={registerForm.values.Activity}
            />
          </div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Save Your Activity
            </button>
            <span className="text-sm text-gray-500">*Required</span>
          </div>
        </form>
        {/* form - end */}
      </div>
    </div>

  )
}

export default Events;