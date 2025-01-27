'use client';
import { useEffect, useState } from "react";
import axios from 'axios'

const Members = () => {
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

    const [students, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/getUserModel')
            .then(students => setUsers(students.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container py-5 d-flex flex-column align-items-center cursor-pointer" onClick={voiceResponse}>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl title-font mb-2 text-gray-900 font-bold">
                            Members Information of Clubs and Committees
                        </h1>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                        First Name
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Last Name
                                    </th>
                                  
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Email
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Roll No.
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Branch
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Contact Number
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        Club Name
                                    </th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map(user => {
                                        return (
                                            <tr>
                                                <td className="px-4 py-3">{user.firstname}</td>
                                                <td className="px-4 py-3">{user.lastname}</td>
                                                <td className="px-4 py-3">{user.email}</td>
                                                <td className="px-4 py-3">{user.roll_no}</td>
                                                <td className="px-4 py-3">{user.branch}</td>
                                                <td className="px-4 py-3">{user.contact}</td>
                                                <td className="px-4 py-3">{user.clubName}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Members;