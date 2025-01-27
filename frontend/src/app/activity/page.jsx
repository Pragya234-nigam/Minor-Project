'use client';
import { useEffect, useState } from "react";    
import axios from 'axios'
const Activity = () => {
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

    const [events, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/geteventModel')
            .then(events => setUsers(events.data))
            .catch(err => console.log(err))
            }, [])

            return (
                <div className="container py-5 d-flex flex-column align-items-center cursor-pointer" onClick={voiceResponse}>
                    <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl title-font mb-2 text-gray-900 font-bold">
                            Activities Information of Clubs and Committees
                        </h1>
                        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Branch</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">First Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Last Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Roll No</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Club Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Date</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Activity</th>
                                </tr>
                            </thead>
                            <tbody>
{
    events.map(event => {
        return (
            <tr>
                <td className="px-4 py-3">{event.branch}</td>
                <td className="px-4 py-3">{event.firstname}</td>
                <td className="px-4 py-3">{event.lastname}</td>
                <td className="px-4 py-3">{event.roll_no}</td>
                <td className="px-4 py-3">{event.clubName}</td>
                <td className="px-4 py-3">{event.date}</td>
                <td className="px-4 py-3">{event.activity}</td>
            </tr>
         )
        })
    }
</tbody>
</table>
</div>
</div>
</div>
            </section>
</div>
        
    )
}
export default Activity;