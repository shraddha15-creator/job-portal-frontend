import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/iaLabLogo.png'


export const Header = () => {
    return (
        <header className="w-screen">
            <div className="flex bg-white px-8 py-2 pb-2 shadow justify-between">
                <p className="bg-auto">
                <img src={BrandLogo} 
                    style={{ 
                        height: 72,
                        width: 72
                        }} />
                </p>
                <nav className="space-x-10 capitalize text-black  font-semibold pt-4">
                    <Link to="jobs" className="hover:text-red-500 p-2"> Jobs </Link>
                    <Link to="/recruit" className="hover:text-red-500"> Recruit </Link>
                    <Link to="/blogs" className="hover:text-red-500"> Blogs </Link>
                    <button to="/postjob" className=" bg-red-500 p-2 rounded-lg text-white "> Post a Job </button>
                </nav>
            </div>
        </header>
    )
}