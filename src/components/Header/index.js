import { Link } from 'react-router-dom';
import brandLogo from "../../assets/iaLabLogo.png"


export const Header = () => {
    return (
        <header className="w-screen h-auto">
            <div className="flex bg-white px-16 shadow justify-between">
                <p className="bg-auto">
                <img src= {brandLogo} style={{
                    height: 70,
                    width: 70,
                    paddingTop: 4
                }}/>
                </p>
                <nav className="space-x-6 capitalize text-black pt-4 pb-2">
                    <Link to="/" className="hover:text-blue-900 p-2"> Home </Link>   
                    <Link to="/jobs" className="hover:text-blue-900 p-2"> Jobs </Link>
                    <Link to="/recruit" className="hover:text-blue-900"> Recruit </Link>
                    <Link to="/blogs" className="hover:text-blue-900"> Blogs </Link>
                    <Link to="/postjob" className="hover:text-blue-900"> 
                        <button className=" bg-blue-900 p-2 rounded-lg text-white "> Post a Job </button>
                    </Link>

                    
                </nav>
            </div>
        </header>
    )
}