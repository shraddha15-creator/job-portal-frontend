
import { SideListItem } from "./SideListItem"
import { ApplicantMenu } from '../../data/sideItems';

export const LeftSideMenu = () => {
    return(<div >
        { ApplicantMenu.map( ({title, url}) => <SideListItem title={title} url="url"/> )}
       
    </div>)
}