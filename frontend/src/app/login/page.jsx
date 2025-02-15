'use client';
import { IconVolume } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { UserContext } from '../context/UserContext';

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

const Login = () => {

    const router = useRouter();
    const { setUser } = useContext(UserContext);

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: (values, { resetForm }) => {
            console.log(values);
            axios.post('http://localhost:5000/user/authenticate', values)
                .then((result) => {
                    console.log(result);
                    localStorage.setItem('user', JSON.stringify(result.data));
                    setUser(result.data); // Update context
                    console.log('User Login successfully');                    
                    toast.success('User Login successfully');
                    resetForm();
                    router.push('/dsmnru')
                }).catch((err) => {
                    toast.error('Failed to Login user');
                });
        }
    })

    return (
        <div className="bg-Slate-300 py-6 sm:py-8 lg:py-12 cursor-pointer">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <h2 onClick={voiceResponse} className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
                    Login
                </h2>
                <form onSubmit={loginForm.handleSubmit} className="mx-auto max-w-lg rounded-lg border">
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label
                            onClick={voiceResponse}
                                htmlFor="email"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Email Address
                            </label>
                            <div className='flex gap-3'>
                            <input
                                name="email"
                                onChange={loginForm.handleChange}
                                value={loginForm.values.email}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            /><button type='button' onClick={e => { SpeechInput(loginForm.values.email); }}><IconVolume /></button>
                            </div>
                        </div>
                        <div>
                            <label
                            onClick={voiceResponse}
                                htmlFor="password"
                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                            >
                                Password
                            </label><div className='flex gap-3'>
                            <input
                                name="password"
                                type="password"
                                onChange={loginForm.handleChange}
                                value={loginForm.values.password}
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            /><button type='button' onClick={e => { SpeechInput(loginForm.values.password); }}><IconVolume /></button>
                        </div>
                        </div>
                        <button onClick={voiceResponse} type='submit' className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                            Log in
                        </button>
                    </div>
                    <div className="flex items-center justify-center bg-gray-100 p-4">
                        <p onClick={voiceResponse} className="text-center text-sm text-gray-500">
                            Don't have an account?{" "}
                            <a onClick={voiceResponse}
                                href="/register"
                                className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                            >
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login;