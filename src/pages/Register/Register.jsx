import React, { useContext } from 'react';
import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json'
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUserEP } = useContext(AuthContext);

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUserEP(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="w-10/12 mx-auto p-3 bg-white min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="bg-base-100 flex flex-col w-full  shrink-0">
                    <h2 className='text-center text-4xl font-bold mt-6'>Register</h2>
                    <form onSubmit={handleRegister} className="card-body">
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
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div>
                        <h2 className='text-center my-2'>Have Account? <Link className='font-bold' to='/login'>Login</Link></h2>
                    </div>
                    <div className='flex flex-grow'></div>
                </div>
                <div className="text-center w-full lg:text-left">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>

            </div>
        </div>
    );
};

export default Register;