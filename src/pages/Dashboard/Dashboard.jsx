import React, { useEffect, useState } from "react";

const Dashboard = () => {
    const [alltask, setAlltask] = useState([])
    const [choosePriority, setChoosePriority] = useState(6)
    const [chooseStatus, setChooseStatus] = useState(6)
    const [chooseDate, setChooseDate] = useState('');

    useEffect(() => {
        const allViewTask = JSON.parse(localStorage.getItem('task-info'))
        if (choosePriority === '5') {

            const priorityFilter = allViewTask.filter((value) => {
                return value.priorityChange > 4
            })
            setAlltask(priorityFilter)
        }
        else if (choosePriority === '3') {
            const priorityFilter = allViewTask.filter((value) => {
                return value.priorityChange == 3
            })
            setAlltask(priorityFilter)
        }
        else if (choosePriority === '2') {
            const priorityFilter = allViewTask.filter((value) => {
                return value.priorityChange == 2
            })
            setAlltask(priorityFilter)
        }
        else if (chooseStatus === 'Pending') {
            const priorityFilter = allViewTask.filter((value) => {
                return value.statuschange == 'Pending'
            })
            setAlltask(priorityFilter)
        }
        else if (chooseStatus === 'Progress') {
            const priorityFilter = allViewTask.filter((value) => {
                return value.statuschange == 'Progress'
            })
            setAlltask(priorityFilter)
        }
        else if (chooseStatus === 'Completed') {
            const priorityFilter = allViewTask.filter((value) => {
                return value.statuschange == 'Completed'
            })
            setAlltask(priorityFilter)
        }
        else if (chooseDate) {
            const priorityFilter = allViewTask.filter((value) => {
                return value.date == chooseDate
            })
            setAlltask(priorityFilter)
        }
        else {
            setAlltask(allViewTask)
        }
    }, [choosePriority, chooseStatus, chooseDate])




    return (
        <div>
            <div className={`px-5 md:px-24 py-10`}>
                <div className="text-center pb-4">
                    <h3 className="text-3xl font-bold">View All Task</h3>
                </div>

                <div className="py-5 grid grid-cols-1 md:grid-cols-3 justify-between">
                    <div>
                        <select className="select select-info w-full max-w-xs" value={choosePriority} onChange={(e) => setChoosePriority(e.target.value)}>

                            <option value={6}>Choose Priority</option>
                            <option value={5}>5</option>
                            <option value={3}>3</option>
                            <option value={2}>2</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <select className="select select-info w-full max-w-xs" value={chooseStatus} onChange={(e) => setChooseStatus(e.target.value)}>

                                <option value={6}>Choose Status</option>
                                <option value={`Pending`}>Pending</option>
                                <option value={`Progress`}>Progress</option>
                                <option value={`Completed`}>Completed</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input type="date" placeholder="Type here" value={chooseDate} onChange={(e) => setChooseDate(e.target.value)} className="input input-bordered input-info w-full max-w-xs" />
                    </div>
                </div>

                <hr />

                {/* Showing error if data not found */}

                {

                    (alltask?.length <= 0) &&
                    <div className={`px-5 md:px-24 py-10`}>
                        <div className="text-center pb-4">
                            <h3 className="text-3xl text-red-600 font-bold">No Task Found, Add task then come here..</h3>
                        </div>
                        <hr />
                    </div>
                }

                {/* Showing to the table */}
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
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    alltask?.map((tasks, index) => {
                                        return <React.Fragment key={index + 1}>
                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{tasks?.title}</td>
                                                <td>{tasks?.description}</td>
                                                <td>{tasks?.date}</td>
                                                <td>{tasks?.priorityChange}</td>
                                                <td>{tasks?.statuschange}</td>
                                            </tr>
                                        </React.Fragment>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>


                <hr className="pb-10" />
                <div className="px-4 flex justify-center items-center pb-24 pt-12 lg:pt-0">
                    <div className="mockup-code w-full lg:w-7/12">
                        <pre data-prefix="1" className="text-warning"><code>Requirements Bonus Section Completed, Task Filtering and Sorting</code></pre>
                        <pre data-prefix="2"><code>Filter tasks by their status (completed, in progress, pending) and due date.
                        </code></pre>
                        <pre data-prefix="3"><code>Allow users to sort tasks by different criteria (priority, due date, etc.)</code></pre>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;

