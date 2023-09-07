import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamTask = () => {
    const [alltask, setAlltask] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        const allViewTask = JSON.parse(localStorage.getItem('task-info'))
        const teamname = (localStorage.getItem('teamname'))
        const filteredTask = allViewTask.filter((value) => {
            return value.teamname == teamname
        })
        setAlltask(filteredTask)
    }, [])

    const handleLeaveTeam = () => {
        localStorage.removeItem('teamname')
        navigate('/home/join-team')
    }

    return (
        <div>
            <div className={`px-5 md:px-24 py-10`}>
                <div className="text-center pb-4">
                    <h3 className="text-3xl font-bold pb-4">Team Wise Task <button className="btn btn-warning" onClick={handleLeaveTeam}>Leave Team</button></h3>
                    <hr />
                    {/* Showing error if data not found */}
                    {
                        (alltask.length <= 0) &&
                        <div className={`px-5 md:px-24 py-10`}>
                            <div className="text-center pb-4">
                                <h3 className="text-3xl text-red-600 font-bold">No Task Found, Add task then come here..</h3>
                            </div>
                            <hr />
                        </div>
                    }
                    <div>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Due Date</th>
                                        <th>Priority</th>
                                        <th>Status</th>
                                        <th>Team Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}

                                    {
                                        alltask.map((tasks, index) => {
                                            return <React.Fragment key={index + 1}>
                                                <tr>
                                                    <th>{index + 1}</th>
                                                    <td>{tasks?.title}</td>
                                                    <td>{tasks?.description}</td>
                                                    <td>{tasks?.date}</td>
                                                    <td>{tasks?.priorityChange}</td>
                                                    <td>{tasks?.statuschange}</td>
                                                    <td>{tasks?.teamname}</td>
                                                </tr>
                                            </React.Fragment>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamTask;
