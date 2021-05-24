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
            <div className="-mt-9 pl-3 text-white">Designer</div>
          </div>

          <div className='h-40 w-96 mt-10 rounded'>
            <img
              className='h-full w-full rounded-sm'
              src={rectangle4}
              alt='display'
            />
            <div className="-mt-9 pl-3 text-white">Developer</div>
          </div>
          <div className='h-40 w-96 mt-10 rounded'>
            <img
              className='h-full w-full rounded-sm'
              src={rectangle3}
              alt='display'
            />
            <div className="-mt-9 pl-3 text-white">Sales & Marketing</div>
          </div>
          <div className='h-40 w-96 mt-10 rounded'>
            <img
              className='h-full w-full rounded-sm'
              src={rectangle2}
              alt='display'
            />
            <div className="-mt-9 pl-3 text-white">Others</div>
          </div>
        </div>
        <div className='bg-white h-screen mt-5'>
          <div className='flex pt-5  '>
            <label className='font-semibold pt-3 ml-12 w-60'>Job Title</label>
            <input
              className='bg-gray-50 h-16 rounded shadow w-2/4 ml-12 pl-1 text-lg outline-none  '
              type='text'
              placeholder='UX Designer,Python Developer,Business Developer etc.'
            />
          </div>
          <div className='flex pt-10 justify-bet sm:pt-4'>
            <div className='font-semibold pt-5 ml-12 w-60 '>
                           <label>Employee Type</label>
            </div>
            <div className=' space-x-9 sm:space-y-3 ml-12 sm:flex-col '>
              <button
                className='bg-gray-50 h-16 rounded shadow w-44 text-center hover:bg-blue-600 hover:text-white outline-none '>
              Full Time Employee
              </button>
              <button
                className='bg-gray-50 h-16 rounded shadow w-36 text-center hover:bg-blue-600 hover:text-white outline-none '>
                Contract Based
              </button>
              <button
                className='bg-gray-50 h-16 rounded shadow w-28 text-center hover:bg-blue-600 hover:text-white outline-none'>
                Internship
              </button>
              <button
                className='bg-gray-50 h-16 rounded shadow w-28 text-center hover:bg-blue-600 hover:text-white outline-none'>
                Freelancer
              </button>
            </div>
          </div>
          

             <div className="mt-10 ml-12 flex">
            <label className="capitalize font-semibold w-60 pt-3">job location</label>
            
              <input className="bg-gray-50 h-16 rounded shadow w-2/4 ml-12  pl-1 text-lg outline-none"
              placeholder="e.g. Gurgaon"
               />
             </div>

          <div className="mt-10 ml-12 flex">
            <label className="capitalize font-semibold w-60 pt-1">remote</label>
              <div className="flex items-center">
            
              <input className="h-4 w-4 ml-12" type="checkbox"

              />
              <lable>yes</lable>
              <input className="h-4 w-4 pt-12 ml-12" type="checkbox"

              />
              <lable >no</lable>
            </div>
          </div>

             









          <div className='flex pt-10 '>
            <label className='font-semibold pt-2 ml-12 w-60'>Skills Requried</label>
            <div className='bg-gray-50 h-32 rounded shadow w-2/4 text-xs ml-12 divide-y divide-black '>
              <div>
                {' '}
                <input
                  className='w-full h-12 pl-3 text-lg outline-none'
                  type='text'
                  placeholder='Start typing desired skills required for this job post'
                />
              </div>
              <div className='flex '>
                <div className='h-11 w-auto mx-3 mt-4 flex'>
                  <div className='h-11 w-full shadow '>
                    <input
                      className='h-11 w-28 pl-2 outline-none bg-gray-50  text-base capitalize '
                      placeholder='skill 1'
                    />
                  </div>
                  <div>
                    <input
                      className='h-3 w-3 mt-4 -mx-6 outline-none'
                      src={vector}
                      alt='display'
                      type='image'
                    />
                  </div>
                </div>
                <div className='h-11 w-28 mx-3 mt-4 flex'>
                  <div className='h-11 w-28 shadow'>
                    <input
                      className='h-11 w-20 pl-2 outline-none bg-gray-50  text-base capitalize '
                      placeholder='skill 2'
                    />
                  </div>
                  <div>
                    <input
                      className='h-3 w-3 mt-4 -mx-6 outline-none'
                      src={vector}
                      alt='display'
                      type='image'
                    />
                  </div>
                </div>
                <div className='h-11 w-28 mx-3 mt-4 flex'>
                  <div className='h-11 w-28 shadow'>
                    <input
                      className='h-11 w-20 pl-2 outline-none bg-gray-50  text-base capitalize '
                      placeholder='skill 3'
                    />
                  </div>
                  <div>
                    <input
                      className='h-3 w-3 mt-4 -mx-6 outline-none'
                      src={vector}
                      alt='display'
                      type='image'
                    />
                  </div>
                </div>
                <div className='h-11 w-28 mx-3 mt-4 flex'>
                  <div className='h-11 w-28 shadow '>
                    <input
                      className='h-11 w-20 pl-2 hover:bg-blue-600 outline-none bg-gray-50  text-base capitalize '
                      placeholder='skill 4'
                    />
                  </div>
                  <div>
                    <input
                      className='h-3 w-3 mt-4 -mx-6 outline-none'
                      src={vector}
                      alt='display'
                      type='image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-10 flex'>
            <label className='font-semibold ml-12 w-60 pt-5'>
              Experience Required
            </label>
            <div className='flex space-x-7 ml-12'>
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
            <label className='font-semibold ml-12 w-60 pt-5'>Annual Salary</label>
            <div className='flex space-x-7 ml-12'>
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
            <label className='font-semibold  ml-12 w-60'>Job Description</label>
            <div className='bg-gray-50 h-28 rounded shadow w-1/2 ml-12'>
              <div className='h-28  w-full'>
                <textarea
                  className='bg-gray-50 text-justify h-24 w-full p-1 outline-none '
                  placeholder='Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                                    Viverra urna mattis egestas vitae sem.Porttitor sedenim,
                                    convallis risus purus sit amet.Mauris, id interdum
                                    pellentesque nunc aenean massa arcu.'
                />
              </div>
            </div>
          </div>

          <div className='ml-80 mt-5 flex'>
            <input className="h-4 w-4 pt-12 ml-12" type="checkbox"/>
            <p className='ml-4'>
              Share this Job Post on all of your social media platforms?
            </p>
          </div>
          <div className="pb-8 ml-80 space-x-10 pl-5">
            <button className='  hover:bg-blue-600 hover:text-white text-blue-700 font-bold  h-12 w-40 rounded mt-10 capitalize border-2 border-blue-700'>
              submit
            </button>
            <button className='hover:bg-blue-600 hover:text-white text-blue-700 font-bold h-12 w-40 rounded mt-10 capitalize border-2 border-blue-700'>
              
              cancle
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default PostJob;