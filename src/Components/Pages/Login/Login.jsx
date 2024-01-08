import { Link,  useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/Authproviders";


const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        loginUser(email, password)
            .then(result => {
                console.log(result)
                // toast("Login Success")
                // navigate after login
                navigate('/')
            })

            .catch(error => console.log(error))

    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-2xl md:text-4xl mt-3 text-center text-main">Login Now</h1>
            <div className='flex justify-center items-center mt-4 px-6 gap-4 font-inter'>
                <div className='text-center border-4 rounded-2xl border-main p-6'>
                    <div className='text-center'>
                        <button className='text-5xl '></button>

                    </div>
                    <div>
                        <h1>or</h1>
                    </div>
                    <div>
                        <form onSubmit={handlelogin}>

                            <label className='flex justify-start'>Email</label>
                            <input type="email" name='email' placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs my-2" required /><br />
                            <label className='flex justify-start'>Pasword</label>
                            <input type="password" name='password' placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs my-2" required /><br />
                            <input className="btn text-main border-main" type="submit" value="Login" />
                        </form>
                    </div>
                    <div>
                        <h1 className='py-2 text-main text-sm'>Do not have an account ?</h1>
                        <Link to="/register"><button className="btn btn-sm text-main border-main">Register</button></Link>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;