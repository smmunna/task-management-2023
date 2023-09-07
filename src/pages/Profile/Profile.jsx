import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className={`px-5 md:px-24 py-10`}>
                <div className="text-center pb-4">
                    <h3 className="text-3xl font-bold">Welcome, {user?.username}</h3>
                </div>
                <hr />
                <div className="grid justify-center items-center py-12 ">
                    <div>
                        <img src={user?.imageData} className="w-[200px]" alt="" />
                    </div>
                    <div className="space-y-3 pt-8">
                        <div>
                            <h3><span className="font-bold">Name:</span> {user?.username}</h3>
                        </div>
                        <div>
                            <h3><span className="font-bold">Email:</span> {user?.email}</h3>
                        </div>
                        <div>
                            <h3><span className="font-bold">Bio:</span> {user?.bio}</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;
