import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '../../assets/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Logout Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        {
            user ? 
                <>
                <li><NavLink className='mr-2' to="/">Home</NavLink></li>
                {/* <li>
            <details>
                <summary>Parent</summary>
                <ul className="p-2 z-50">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li> */}
                <li><NavLink to="/myApplications" className='mr-2'>My-Applications</NavLink></li>
                <li><NavLink to="/addJob" className='mr-2'>Add a Job</NavLink></li>
                <li><NavLink to="/myPostedJobs" className='mr-2'>My Posted Jobs</NavLink></li>
                </>
                
             : <li><NavLink className='mr-2' to="/">Home</NavLink></li>
        }
        
    </>
    return (
        <div className="navbar w-11/12 mx-auto z-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-1 items-center w-full'>
                    <Link to='/'><img className='w-10 h-9' src={logo} alt="" /></Link>
                    <Link to='/' className="text-2xl font-bold"> Jobs Portal</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? <Link className='btn bg-[#6bdddd] hover:bg-[#338888] hover:text-white hover:font-semibold' onClick={handleLogOut}>Log Out</Link> : <><Link to="/login" className="btn bg-[#6bdddd] hover:bg-[#338888] hover:text-white hover:font-semibold">Login</Link>
                        <Link to="/register" className="btn bg-[#6bdddd] hover:bg-[#338888] hover:text-white hover:font-semibold">Register</Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;