'use client';
import React from 'react'

const Home = () => {

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

  return (
    <div className="bg-Slate-300 pb-6 sm:pb-8 lg:pb-12 cursor-pointer">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          {/* image - start */}
          <img
            src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* image - end */}
          {/* overlay - start */}
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
          {/* overlay - end */}
          {/* text start */}
          <div className="relative flex flex-col items-center p-4 sm:max-w-xl" onClick={voiceResponse}>
            <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8" >
              CLUBS AND COMMITTEES
            </p>
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              Welcome to Clubs and Committees
            </h1>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="/login"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Login
              </a>
              <a
                href="/register"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Register
              </a>
            </div>
          </div>
          {/* text end */}
        </section>
      </div>
    </div>
  )
}

export default Home