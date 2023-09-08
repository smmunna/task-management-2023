import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const [error, setError] = useState('')
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLoginSubmit = (e) => {

        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        const userInfo = JSON.parse(localStorage.getItem('user'))
        const localEmail = userInfo?.email;
        const localPass = userInfo?.pass;

        if (localEmail == null) {
            setError('No Accounts Found !!')
            return
        }
        if (email !== localEmail) {
            setError('Invalid email/password')
            return
        }
        if (pass !== localPass) {
            setError('Invalid email/password')
            return
        }
        setError('')
        toast('Login Successfull')
        setUser(userInfo)

        setTimeout(() => {
            navigate('/home')
        }, 1000)
    }

    return (
        <div>
            {/* Login form */}
            <div className="hero pt-20">
                <div className="hero-content">
                    <div className="card shadow-2xl bg-base-200">
                        <div>
                            <h3 className="text-center p-5 text-3xl font-semibold">Please Login</h3>
                            <hr />
                            {
                                error && <><h3 className=" py-4 text-red-600 font-bold text-center">{error}</h3> <hr /></>
                            }
                            <form onSubmit={handleLoginSubmit}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered w-full lg:w-96" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="pass" className="input input-bordered w-full lg:w-96" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </form>

                            <div className="pb-8 px-8">
                                <h3>Don{"'"}t have account ? <Link to="/register" className="link-secondary">Register Now</Link></h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
