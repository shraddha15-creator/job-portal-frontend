import { Link } from "react-router-dom"

export const SideListItem = ({title, classes, url}) => {
    return(
    
    <Link to={url}>
    <div className={`p-3  hover:bg-white cursor-pointer border-b-2 border-shadow border-gray-200 bg-gray-50`}>
    <div className="flex justify-between items-center ">
        <div>{title}</div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </div>
</div></Link>)
}