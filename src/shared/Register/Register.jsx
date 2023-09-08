import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const pass = form.pass.value;
        const bio = form.bio.value;
        const photo = form.photo.files[0];

        if (photo) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageData = event.target.result;
                const userdata = {
                    username,
                    email,
                    pass,
                    bio,
                    imageData
                }
                // Save the image data to local storage
                localStorage.setItem("user", JSON.stringify(userdata));

                toast("Registration Successfull..")
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            };

            reader.readAsDataURL(photo);
        }

    }
    return (
        <div>
            {/* Registration form */}
            <div className="hero pt-2">
                <div className="hero-content">
                    <div className="card shadow-2xl bg-base-200">
                        <div>
                            <h3 className="text-center p-5 text-3xl font-semibold">Create your account</h3>
                            <hr />
                            <form onSubmit={handleFormSubmit}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Username</span>
                                        </label>
                                        <input type="text" placeholder="username" name="username" className="input input-bordered w-full lg:w-96" required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered w-full lg:w-96" required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="Password" name="pass" className="input input-bordered w-full lg:w-96" required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Bio</span>
                                        </label>
                                        <input type="text" placeholder="Write your Bio" name="bio" className="input input-bordered w-full lg:w-96 " required/>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo</span>
                                        </label>
                                        <input type="file" accept="image/*" name="photo" className="file-input file-input-bordered w-full lg:w-96" required/>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary" type="submit">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
