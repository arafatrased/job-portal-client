import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/teams/team1.jpg'
import team2 from '../../assets/teams/team2.jpg'
import { easeOut } from 'motion';

const Banner = () => {
    return (
        <div className="hero bg-white min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ x: [0, 200, 0] }}
                        transition={{ duration: 20, ease: easeOut, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-[#94d9d9]" />
                    <motion.img
                        animate={{ y: [0, -100, 0] }}
                        transition={{ duration: 10, ease: easeOut, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-[#94d9d9]" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: "easeOut", repeat: Infinity }}
                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['red', 'yellow', 'orange', 'purple'] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >Jobs</motion.span> for You</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;