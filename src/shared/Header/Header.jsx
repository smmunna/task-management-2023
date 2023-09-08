import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const navlink = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home/create-task">Create Task</Link></li>
        <li><Link to="/home/view-task">View Task</Link></li>
        <li><Link to="/home/join-team">Join Team</Link></li>
    </>

    const handleLogout = () => {
        localStorage.removeItem('user')
        toast('Logout Successfull')
        setTimeout(() => {
            navigate('/login')
        }, 1000)

    }

    return (
        <div className="">

            <div className="navbar px-1 md:px-24 bg-slate-900">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Task Management</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown  dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.imageData} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52">
                            <li>
                                <Link to='/home/profile' className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link to="/home/dashboard">Dashboard</Link></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Header;
