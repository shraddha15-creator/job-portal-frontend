import rectangle1 from '../assets/icons/Rectangle1.png';
import rectangle2 from '../assets/icons/Rectangle2.png';
import rectangle3 from '../assets/icons/Rectangle3.png';
import rectangle4 from '../assets/icons/Rectangle4.png';
import vector from '../assets/icons/Vector.png';

const PostJob = () => {
    return (
        <div className='w-screen h-screen bg-gray-300'>
            <div className='bg-white ml-7 h-60 w-100 mr-7 rounded border-t-2'>
                <lable className='font-semibold pt-4 pl-5'>Add A Job</lable>
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
                        <lable className='font-semibold pt-3 ml-10'>Job Title</lable>
                        <input
                            className='bg-gray-50 h-16 rounded shadow w-2/5 ml-52 text-center text-lg  '
                            type='text'
                            placeholder='UX Designer, Python Developer, Business Developer  etc.'
                        />
                    </div>
                    <div className='flex pt-10 justify-bet '>
                        <div className='font-semibold pt-5 ml-10'>
                            <lable>Employee Type</lable>
                        </div>
                        <div className='ml-40 space-x-12'>
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-52 text-center  '
                                placeholder='Full Time Employee'
                            />
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-52 text-center '
                                placeholder='Contract Based'
                            />
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-52 text-center '
                                placeholder='Internship'
                            />
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-52 text-center '
                                placeholder='Freelancer'
                            />
                        </div>
                    </div>
                    <div className='flex pt-10 '>
                        <lable className='font-semibold pt-2 ml-10'>Skills Requried</lable>
                        <div className='bg-gray-50 h-32 rounded shadow w-3/5 text-xs  ml-40  divide-y divide-black '>
                            <div>
                                {' '}
                                <input
                                    className='w-full h-12 pl-3 text-lg '
                                    type='text'
                                    placeholder='Start typing desired skills required for this job post'
                                />
                            </div>
                            <div className='flex '>
                                < div className="h-11 w-28 mx-3 mt-4 flex">
                                    <input
                                        className='h-11 w-28 pl-2  bg-gray-50  text-base capitalize '
                                        placeholder='skill 1' />
                                    <input className="h-3 w-3 mt-4 -mx-6" src={vector} alt="display" type="image" />
                                </div>
                                < div className="h-11 w-28 mx-3 mt-4 flex">
                                    <input
                                        className='h-11 w-28 pl-2 bg-gray-50 shadow   text-base capitalize '
                                        placeholder='skill 2' />
                                    <input className="h-3 w-3 mt-4 -mx-6" src={vector} alt="display" type="image" />
                                </div>
                                < div className="h-11 w-28 mx-3 mt-4 flex">
                                    <input
                                        className='h-11 w-28 pl-2 bg-gray-50 shadow   text-base capitalize '
                                        placeholder='skill 3' />
                                    <input className="h-3 w-3 mt-4 -mx-6 " src={vector} alt="display" type="image" />
                                </div>
                                < div className="h-11 w-28 mx-3 mt-4 flex">
                                    <input
                                        className='h-11 w-28 pl-2 bg-gray-50 shadow   text-base capitalize '
                                        placeholder='skill 4' />
                                    <input className="h-3 w-3 mt-4 -mx-6" src={vector} alt="display" type="image" />
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className='pt-10 flex'>
                        <label className='font-semibold ml-10 pt-5'>
                            Experience Required
                        </label>
                        <div className='flex space-x-7 ml-28'>
                            <input
                                className='bg-gray-50 h-16 rounded shadow w-44 text-center '
                                placeholder='Minimum'
                            />
                            <p className='pt-4'>to</p>
                            <input
                                className='bg-gray-50 h-16 rounded shadow w-44 text-center  '
                                placeholder='Maximum'
                            />
                            <p className='pt-4'>years</p>
                        </div>
                    </div>
                    <div className='pt-10 flex'>
                        <lable className='font-semibold ml-10 pt-5'>Annual Salary</lable>
                        <div className='flex space-x-7 mx-40 pl-1'>
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-44 text-center '
                                placeholder='Minimum'
                            />
                            <p className='pt-4'>to</p>
                            <input
                                className='bg-gray-50 h-16 rounded shadow  w-44 text-center  '
                                placeholder='Maximum'
                            />
                            <p className='pt-4'>per annum</p>
                        </div>
                    </div>
                    <div className='flex pt-10 '>
                        <label className='font-semibold  ml-10'>Job Description</label>
                        <div className='bg-gray-50 h-28 rounded shadow w-1/2 ml-36'>
                            <div className='h-28  w-full'>
                                <textarea className='bg-gray-50 text-justify h-28 w-full '
                                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Viverra urna mattis egestas vitae sem. Porttitor sed enim,
                                    convallis risus purus sit amet. Mauris, id interdum
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
