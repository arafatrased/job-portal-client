import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loginLottieData from '../../assets/lottie/login.json'
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('in signIn page', location)
    const from = location.state || '/';
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result =>{
            const user = result.user;
            if(user){
                navigate(from);
            } 
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="w-10/12 mx-auto p-3 bg-white min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-base-100 flex flex-col w-full  shrink-0">
                    <h2 className='text-center text-4xl font-bold mt-6'>Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <h2 className='text-center my-2'>Don't Have Account? <Link className='font-bold' to='/register'>Register</Link></h2>
                    </div>
                    <div className='flex flex-grow'></div>
                </div>
                <div className="text-center w-full lg:text-left">
                    <Lottie animationData={loginLottieData}></Lottie>
                </div>

            </div>
        </div>
    );
};

export default Login;