import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinTeam = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const teamname = form.teamname.value;
        const taskInfoArray = JSON.parse(localStorage.getItem('task-info'))
        taskInfoArray.filter((value) => {
            if (value.teamname == teamname) {
                localStorage.setItem('teamname', teamname)
                navigate('/home/team-task')
            }
            else {
                setError('Not found Team.. !')
            }
        })

        // setError('')
    }
    return (
        <div>
            <div className={`px-5 md:px-24 py-10`}>
                <div className="text-center pb-4">
                    <h3 className="text-3xl font-bold pb-4">Join to the Team</h3>
                    <hr />

                    {
                        error && <><h3 className=" py-4 text-red-600 font-bold text-center">{error}</h3> <hr /></>
                    }
                </div>
                <div className="flex justify-center">
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-control pb-4">
                                <input type="text" placeholder="Enter your team name" name="teamname" className="input input-bordered w-full lg:w-96" required />
                            </div>
                            <button className="btn btn-accent">Join Now</button>
                        </form>
                    </div>


                </div>

                <div className="px-4 mt-5 flex justify-center items-center pb-24 pt-12 lg:pt-0">
                    <div className="mockup-code w-full lg:w-7/12">
                        <pre data-prefix="1" className="text-warning"><code>Task 3 Completed: Create a team-based environment where users can form teams and invite others to join</code></pre>
                        <pre data-prefix="2"><code>Users should only be able to view and manage tasks within their team.
                        </code></pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinTeam;
