import rectangle1 from '../assets/icons/Rectangle1.png';
import rectangle2 from '../assets/icons/Rectangle2.png';
import rectangle3 from '../assets/icons/Rectangle3.png';
import rectangle4 from '../assets/icons/Rectangle4.png';
import vector from '../assets/icons/Vector.png';

const PostJob = () => {
    return (
        <div className='w-screen h-screen bg-gray-300'>
            <div className='bg-white ml-7 h-60 w-100 mr-7 rounded border-t-2'>
                <label className='font-semibold pt-4 pl-5'>Add A Job</label>
                <div className='flex justify-between mr-5 ml-5'>
                    <div className='h-40 w-96 mt-10 rounded'>
                        <img
                            className='h-full w-full rounded-sm'
                            src={rectangle1}
                            alt='display'
                        />
                    </div>

                    <div className='h-40 w-96 mt-10 rounded'>
                        <img
                            className='h-full w-full rounded-sm'
                            src={rectangle4}
                            alt='display'
                        />
                    </div>
                    <div className='h-40 w-96 mt-10 rounded'>
                        <img
                            className='h-full w-full rounded-sm'
                            src={rectangle3}
                            alt='display'
                        />
                    </div>
                    <div className='h-40 w-96 mt-10 rounded'>
                        <img
                            className='h-full w-full rounded-sm'
                            src={rectangle2}
                            alt='display'
                        />
                    </div>
                </div>
                <div className='bg-white h-screen mt-5'>
                    <div className='flex pt-5 '>
                        <label className='font-semibold pt-3 ml-11'>Job Title</label>
                        <input
                            className='bg-gray-50 h-16 rounded shadow w-2/5 ml-52 pl-1 text-lg outline-none  '
                            type='text'
                            placeholder='UX Designer, Python Developer, Business Developer  etc.'
                        />
                    </div>
                    <div className='flex pt-10 justify-bet sm:pt-4'>
                        <div className='font-semibold pt-5 mx-11 '>
                            <label>Employee Type</label>
                        </div>
                        <div className=' space-x-12 sm:space-y-3 ml-28 sm:flex-col '>
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-52 text-center outline-none '
                                placeholder='Full Time Employee'
                            />
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-52 text-center outline-none '
                                placeholder='Contract Based'
                            />
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-52 text-center outline-none'
                                placeholder='Internship'
                            />
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-52 text-center outline-none'
                                placeholder='Freelancer'
                            />
                        </div>
                    </div>
                    <div className='flex pt-10 '>
                        <label className='font-semibold pt-2 ml-10'>Skills Requried</label>
                        <div className='bg-gray-50 h-32 rounded shadow w-3/5 text-xs  ml-40  divide-y divide-black '>
                            <div>
                                {' '}
                                <input
                                    className='w-full h-12 pl-3 text-lg outline-none'
                                    type='text'
                                    placeholder='Start typing desired skills required for this job post'
                                />
                            </div>
                            <div className='flex '>
                                < div className="h-11 w-28 mx-3 mt-4 flex">
                                    <div className="h-11 w-28 shadow">
                                        <input
                                            className='h-11 w-20 pl-2 outline-none bg-gray-50  text-base capitalize '
                                            placeholder='skill 1' />
                                    </div>
                                    <div>
                                        <input className="h-3 w-3 mt-4 -mx-6 outline-none" src={vector} alt="display" type="image" />
                                    </div>
                                </div>
                                < div className="h-11 w-28 mx-3 mt-4 flex">
                                    <div className="h-11 w-28 shadow">
                                        <input
                                            className='h-11 w-20 pl-2 outline-none bg-gray-50  text-base capitalize '
                                            placeholder='skill 2' />
                                    </div>
                                    <div>
                                        <input className="h-3 w-3 mt-4 -mx-6 outline-none" src={vector} alt="display" type="image" />
                                    </div>
                                </div>
                                < div className="h-11 w-28 mx-3 mt-4 flex">
                                    <div className="h-11 w-28 shadow">
                                        <input
                                            className='h-11 w-20 pl-2 outline-none bg-gray-50  text-base capitalize '
                                            placeholder='skill 3' />
                                    </div>
                                    <div>
                                        <input className="h-3 w-3 mt-4 -mx-6 outline-none" src={vector} alt="display" type="image" />
                                    </div>
                                </div>
                                < div className="h-11 w-28 mx-3 mt-4 flex">
                                    <div className="h-11 w-28 shadow">
                                        <input
                                            className='h-11 w-20 pl-2 outline-none bg-gray-50  text-base capitalize '
                                            placeholder='skill 4' />
                                    </div>
                                    <div>
                                        <input className="h-3 w-3 mt-4 -mx-6 outline-none" src={vector} alt="display" type="image" />
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className='pt-10 flex'>
                        <label className='font-semibold ml-11 pt-5'>
                            Experience Required
                        </label>
                        <div className='flex space-x-7 ml-28'>
                            <input
                                className='bg-gray-50 h-16 rounded shadow w-44 text-center outline-none'
                                placeholder='Minimum'
                            />
                            <p className='pt-4'>to</p>
                            <input
                                className='bg-gray-50 h-16 rounded shadow w-44 text-center outline-none '
                                placeholder='Maximum'
                            />
                            <p className='pt-4'>years</p>
                        </div>
                    </div>
                    <div className='pt-10 flex'>
                        <label className='font-semibold ml-10 pt-5'>Annual Salary</label>
                        <div className='flex space-x-7 mx-40 pl-1'>
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-44 text-center outline-none'
                                placeholder='Minimum'
                            />
                            <p className='pt-4'>to</p>
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-44 text-center  outline-none'
                                placeholder='Maximum'
                            />
                            <p className='pt-4'>per annum</p>
                        </div>
                    </div>
                    <div className='flex pt-10 '>
                        <label className='font-semibold  ml-10'>Job Description</label>
                        <div className='bg-gray-50 h-28 rounded shadow w-1/2 ml-36'>
                            <div className='h-28  w-full'>
                                <textarea className='bg-gray-50 text-justify h-24 w-full p-1 outline-none '
                                    placeholder='Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                                    Viverra urna mattis egestas vitae sem.Porttitor sedenim,
                                    convallis risus purus sit amet.Mauris, id interdum
                                    pellentesque nunc aenean massa arcu.'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='ml-80 mt-5 flex'>
                        <img className='pt-1' src={vector} alt='display' />
                        <p className='ml-4'>
                            Share this Job Post on all of your social media platforms?
            </p>
                    </div>
                    <button className='bg-red-400  hover:bg-red-400 text-white font-bold py-3 px-16 rounded ml-72 mt-10 capitalize'>
                        submit
          </button>
                </div>
            </div>
        </div>
    );
};
export default PostJob;
