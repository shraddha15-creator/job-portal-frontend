import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <header className="w-screen">
            <div className="flex bg-white px-16 py-2 shadow justify-between ">
                <p className="bg-auto w-12">
                <img src="https://ialabs.co.in/wp-content/uploads/2020/10/Dark_logo.png" />
                </p>
                <nav className="space-x-10 capitalize text-black   pt-6 ">
                    <Link to="/" className="hover:text-red-500 p-2 text-lg font-semibold"> Home </Link>   
                    <Link to="/jobs" className="hover:text-red-500 p-2 text-lg font-semibold"> Jobs </Link>
                    <Link to="/recruit" className="hover:text-red-500 text-lg font-semibold"> Recruit </Link>
                    <Link to="/blogs" className="hover:text-red-500 text-lg font-semibold"> Blogs </Link>
                    <Link to="/postjob" className="hover:text-red-500"> 
                        <button className=" bg-red-500 p-2 rounded-lg text-white font-bold"> Post a Job </button>
                    </Link>

                    
                </nav>
            </div>
        </header>
    )
}