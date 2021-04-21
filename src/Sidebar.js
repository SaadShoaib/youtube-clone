import React from "react"
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionIcon from "@material-ui/icons/Subscriptions"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMore"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo"
import HistoryIcon from "@material-ui/icons/History"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"


function Sidebar() {
    return(
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <hr />
        </div>
    )
}

export default Sidebar