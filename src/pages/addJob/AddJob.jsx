import axios from 'axios';
import React from 'react';

const AddJob = () => {

    const handleAddJob = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newData} = initialData;
        newData.salaryRange = { min, max, currency};
        newData.requirements = newData.requirements.split(', ' || ',');
        newData.responsibilities = newData.responsibilities.split(', ' || ',');
        
        
        axios.post('http://localhost:5000/jobs', newData)
        .then(res => {
            if(res.data.insertedId){
                alert('Data inserted successfully')
            }
        })
    }

    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-center text-3xl text-[#338888] font-bold underline mt-4'>Post A Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input border-1 border-[#338888]" required />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input border-1 border-[#338888]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Job Type</span>
                        </label>
                        <select defaultValue="Pick a Job type" name="jobType" className="select select-ghost w-full focus:border-2 border-[#338888]">
                            <option disabled>Pick a Job type</option>
                            <option>Full-time</option>
                            <option>Intern</option>
                            <option>Part-time</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="category" className="input border-1 border-[#338888]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Application DeadLine</span>
                        </label>
                        <input type="date" name="applicationDeadline" placeholder="Application Deadline" className="input border-1 border-[#338888]" required />
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Salary Range</span>
                        </label>
                        <input type="number" name="min" placeholder="Min" className="input border-1 border-[#338888]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Max</span>
                        </label>
                        <input type="number" name="max" placeholder="Max" className="input border-1 border-[#338888]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Currency</span>
                        </label>
                        <select defaultValue="Currency" name="currency" className="select border-1 border-[#338888] focus:border-2 focus:border-[#338888] select-ghost w-full">
                            <option disabled>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Description</span>
                    </label>
                    <textarea name="description" className="textarea border-[#338888]" placeholder="Description"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Company</span>
                    </label>
                    <input type="text" name="company" placeholder="Company" className="input input-bordered border-[#338888]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Requirements</span>
                    </label>
                    <input type="text" name="requirements" placeholder="Requirements" className="input input-bordered border-[#338888]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Responsibilities</span>
                    </label>
                    <input type="text" name="responsibilities" placeholder="Responsibilities" className="input input-bordered border-[#338888]" required />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Status</span>
                        </label>
                        <select defaultValue="status" name="status" className="select select-ghost w-full focus:border-2 border-[#338888]">
                            <option disabled>status</option>
                            <option>Active</option>
                            <option>Not-Active</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">HR Email</span>
                        </label>
                        <input type="email" name="hr_email" placeholder="HR Email" className="input input-bordered border-[#338888]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">HR Name</span>
                        </label>
                        <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered border-[#338888]" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Company Logo</span>
                    </label>
                    <input type="text" name="company_logo" placeholder="Company Logo" className="input input-bordered border-[#338888]" required />
                </div>



                <div className="form-control mt-6">
                    <button className='btn bg-[#6bdddd] hover:bg-[#338888] hover:text-white hover:font-semibold'>Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;