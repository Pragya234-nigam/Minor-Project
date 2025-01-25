'use client';
import { useEffect, useState } from "react";    
import axios from 'axios'
const Activity = () => {
    const [events, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/geteventModel')
            .then(events => setUsers(events.data))
            .catch(err => console.log(err))
            }, [])

            return (
                <div className="table-auto p-3 px-20 d-flex align-items-center">
                    <h1 className="text-center mb-4">Members Information of Clubs and Committees</h1>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th>Club Name</th>
                                    <th>Date</th>
                                    <th>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    events.map(event => {
                                        return (
                                            <tr key={event._id}>
                                                <td>{event.clubName}</td>
                                                <td>{event.date}</td>
                                                <td>{event.Activity}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
  )
}
export default Activity;