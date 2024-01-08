import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const { createUser, UpdateProfile  , GoogleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const imgurl = form.get('img')

        console.log(name, imgurl);
        // create user
        createUser(email, password)
            .then(result => {
                UpdateProfile(name, imgurl)
                .catch(error => {
                    console.log(error.message)
                })
                navigate('/')
                console.log(result);
            })
            .catch(error => console.log(error))

    }

    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then(result => {
                console.log(result)
                navigate('/')

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-2xl md:text-4xl mt-3 text-center text-main">Register Now</h1>
            <div className='flex justify-center items-center mt-4 px-4 gap-4 font-inter'>
                <div className='text-center border-4 rounded-2xl border-main p-6'>
                    <div className='text-center'>
                        <button onClick={HandleGoogleLogin} className='text-5xl '><FcGoogle /></button>

                    </div>
                    <div className='py-2'>
                        <h1>or</h1>
                    </div>
                    <div>
                        <form onSubmit={handleRegister}>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div>
                                    <label className='flex justify-start'>Name</label>
                                    <input type="text" name='name' placeholder="Type your Username" className="input input-bordered input-primary w-full max-w-xs my-2" required />
                                </div>
                                <div>
                                    <label className='flex justify-start'>Email</label>
                                    <input type="email" name='email' placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs my-2" required />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div>
                                    <label className='flex justify-start'>Profile ImageUrl</label>
                                    <input type="text" name='img' placeholder="Type image url" className="input input-bordered input-primary w-full max-w-xs my-2" required />
                                </div>
                                <div>
                                    <label className='flex justify-start'>Pasword</label>
                                    <input type="password" name='password' placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs my-2" required />
                                </div>
                            </div>
                            <input className="btn text-main border-main w-1/2" type="submit" value="Register" />
                        </form>
                    </div>
                    <div>
                        <h1 className='py-2 text-main text-sm'>Already have an account ?</h1>
                        <Link to="/login"><button className="btn btn-sm text-main border-main">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;