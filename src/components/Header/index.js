import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="w-screen">
            <div>
                <div className="flex bg-gray-400  px-8 py-4  shadow justify-between mt-2 text-xs font-bold items-center">
                    <div className="h-4 w-8  mb-4 "><img src="https://1businessworld.com/wp-content/uploads/2021/04/03/logo-8.png "></img></div>
                    <nav className="space-x-3 mt-1 ">

                        <Link to="/">Home</Link>


                        <Link to="/jobs">Jobs</Link>
                        <Link to="/recruit">Recruit</Link>
                        <Link to="/blogs">Blogs</Link>

                    </nav>
                </div>

                

            </div>
        </header>
    )
}