

const JobsHeader = () => {
    return (<div>
        <div className="flex bg-white  px-10 py-2  shadow justify-between  mt-2  text-sm">
            <div className="flex space-x-3 text-xs  mt-1 " >
                <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2Fb0c032466eb88b109f20d7d9f6b4e0a8%2F0x0.jpg " class="rounded-3xl shadow w-14 h-14     align-middle  justify-center"></img>
                <div><h4 className="text-red-500 font-bold text-lg ">Rohit Balodi</h4>
                    <p className=" font-semibold text-sm ">Recruiter of XYZ</p>
                </div>
            </div>
            <div className="flex-end py-1 ml-6"><button class="bg-red-500 hover:bg-green-700 text-white font-bold py-3 px-3 rounded text-sm flex-left mt-1 ">Add a Job</button></div>
        </div>

        <div className="flex bg-white  py-4   shadow justify-between w-full px-10   mt-4 text-base font-bold">
            <p className=" ml-16">100 Jobs Added</p>

            <div className="flex space-x-1 ml-4">
                <p>Sort by:Latest</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>

        </div>

        <div className="flex w-6/6 mt-6 mb-12  text-lg font-bold justify-between ">
            <p className="ml-80">JobPost</p>

            <p className="mr-6">Applications</p>


        </div>

    </div>
    );
}
export default JobsHeader;