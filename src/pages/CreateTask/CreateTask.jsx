import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CreateTask = () => {
    const [priorityChange, setPriorityChange] = useState()
    const [statuschange, setStatusChange] = useState()
    const [taskdata, setTaskdata] = useState([])


    useEffect(() => {
        // Load data from local storage when the component initializes
        const storedData = localStorage.getItem('task-info');
        if (storedData) {
            setTaskdata(JSON.parse(storedData));
        }
    }, []);

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
        const updatedTaskData = [...taskdata, definedTask];
        setTaskdata(updatedTaskData);

        // Save the updated data to local storage
        localStorage.setItem('task-info', JSON.stringify(updatedTaskData));

        toast('Task has been added to local storage successfully');
        form.reset();
    }

    return (
        <div>
            <div className="hero pt-5 lg:pt-0">
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
                                            <input type="text" placeholder="Title of task" name="title" className="input input-bordered w-full md:w-96" required/>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Description</span>
                                            </label>
                                            <input type="text" placeholder="Description" name="description" className="input input-bordered md:w-96" required/>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Due Date</span>
                                            </label>
                                            <input type="date" name="date" className="input input-bordered" required/>
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
                                            <input type="text" placeholder="Set the team name" name="teamname" className="input input-bordered md:w-96" required/>
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
            <hr className="pb-10" />
            <div className="px-4 flex justify-center items-center pb-24 pt-12 lg:pt-0">
                <div className="mockup-code w-full lg:w-7/12">
                    <pre data-prefix="1" className="text-warning"><code>Requirements 2 Completed, Task Creation and Management:</code></pre>
                    <pre data-prefix="2"><code>Allow users to create tasks with a title, description, due date, and priority level.
                    </code></pre>
                    <pre data-prefix="3"><code>Users should be able to assign tasks to other team members.</code></pre>
                    <pre data-prefix="4"><code>Implemented a way to mark tasks as completed or in progress.
                    </code></pre>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default CreateTask;
