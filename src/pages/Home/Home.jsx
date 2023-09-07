
const Home = () => {
    return (
        <div>
        <h3 className="text-3xl pt-14 text-center font-serif font-bold">Welcome to Task Management System</h3>
            <div className="px-4 flex justify-center items-center py-12">
                <div className="mockup-code w-full lg:w-7/12">
                    <pre data-prefix="1" className="text-warning"><code>Requirements 1 Completed User Authentication</code></pre>
                    <pre data-prefix="2"><code>Implemented user authentication and registration functionalities.
                    </code></pre>
                    <pre data-prefix="3"><code>Users should be able to sign up, log in, and log out</code></pre>
                    <pre data-prefix="4"><code>Each user should have a profile with a profile picture, username, and bio.</code></pre>
                    <pre data-prefix="5"><code><span className="text-warning">Click Profile Image</span> to view the profile of a user</code></pre>
                </div>
            </div>
        </div>
    );
}

export default Home;
