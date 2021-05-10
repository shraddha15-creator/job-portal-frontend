import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <header className="w-screen">
            <div className="flex bg-white px-16 py-2 shadow justify-between">
                <p className="bg-auto w-12">
                <img src="https://ialabs.co.in/wp-content/uploads/2020/10/Dark_logo.png" />
                </p>
                <nav className="space-x-10 capitalize text-black  font-smibold pt-6">
                    {/* <Link to="about" className="hover:text-red-500 p-2"> About </Link>    */}
                    <Link to="jobs" className="hover:text-red-500 p-2"> Jobs </Link>
                    <Link to="/recruit" className="hover:text-red-500"> Recruit </Link>
                    <Link to="/blogs" className="hover:text-red-500"> Blogs </Link>
                    <button to="/postjob" className=" bg-red-500 p-2 rounded-lg text-white "> Post a Job </button>
                </nav>
            </div>
        </header>
    )
}