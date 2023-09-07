import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CreateTask = () => {
    const [priorityChange, setPriorityChange] = useState()
    const [statuschange, setStatusChange] = useState()
    const [taskdata, setTaskdata] = useState([])


    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const teamname = form.teamname.value;
        // console.log(title, description, date, priorityChange, statuschange, teamname)
        const definedTask = {
            title, description, date, priorityChange, statuschange, teamname
        }
        const taskInfo = [...taskdata, definedTask]
        setTaskdata(taskInfo)
        toast('Task hasbeen added to the localstorage Successfully')
    }

    useEffect(() => {
        // for setting in the localStorage;
        
        const taskInfoLocalstorage = JSON.stringify(taskdata)
        localStorage.setItem('task-info', taskInfoLocalstorage)
        
    }, [handleFormSubmit])

    return (
        <div>
            <div className="hero pt-5 pb-24 lg:pt-0">
                <div className="hero-content">
                    <div className="card shadow-2xl bg-base-200">
                        <div>
                            <h3 className="text-center p-5 text-3xl font-semibold">Create your account</h3>
                            <hr />
                            <form onSubmit={handleFormSubmit}>
                                <div className="card-body grid grid-cols-1 lg:grid-cols-2 gap-2">
                                    {/* Left box */}
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Title</span>
                                            </label>
                                            <input type="text" placeholder="Title of task" name="title" className="input input-bordered w-full md:w-96" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Description</span>
                                            </label>
                                            <input type="text" placeholder="Description" name="description" className="input input-bordered md:w-96" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Due Date</span>
                                            </label>
                                            <input type="date" name="date" className="input input-bordered" />
                                        </div>
                                    </div>

                                    {/* Right Box */}
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Priority Level</span>
                                            </label>
                                            <select className="select select-accent w-full " value={priorityChange} onChange={(e) => setPriorityChange(e.target.value)}>
                                                <option disabled selected>Choose Priority</option>
                                                <option value={5}>5</option>
                                                <option value={3}>3</option>
                                                <option value={2}>2</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Status</span>
                                            </label>
                                            <select className="select select-accent w-full " value={statuschange} onChange={(e) => setStatusChange(e.target.value)}>
                                                <option disabled selected>Select Status</option>
                                                <option value={`Pending`}>Pending</option>
                                                <option value={`Progress`}>Progress</option>
                                                <option value={`Completed`}>Completed</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Set Team</span>
                                            </label>
                                            <input type="text" placeholder="Set the team name" name="teamname" className="input input-bordered md:w-96" />
                                        </div>
                                    </div>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default CreateTask;
