import React from "react"
import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined"
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

function SearchPage() {
    return(
        <div className="searchPage">
            <div className="searchPage-filter">
                <TuneOutLinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://placekitten.com/200/35"
                channel="Pewdiepie"
                verified
                subs="69 million"
                noOfVideos= {4000}
                description="Subscribe for awesome content. Hfjodioapifjsadkf;jadsawif'asfjs;jfayn'klasfdkjl;sadffkdjl;lfk;sda"
            />
            <hr />

            <VideoRow
                views="1.2m"
                subs="659k"
                description="blah blah blah blah blah blah blah blah blah blah blah blah"
                timestamp="10 days ago"
                channel="Naruto"
                title="Lets learn how to stand on water"
                image="https://placekitten.com/200/222"
            />
            <VideoRow
                views="1.2m"
                subs="659k"
                description="blah blah blah blah blah blah blah blah blah blah blah blah"
                timestamp="10 days ago"
                channel="Naruto"
                title="Lets learn how to stand on water"
                image="https://placekitten.com/200/223"
            />
            <VideoRow
                views="1.2m"
                subs="659k"
                description="blah blah blah blah blah blah blah blah blah blah blah blah"
                timestamp="10 days ago"
                channel="Naruto"
                title="Lets learn how to stand on water"
                image="https://placekitten.com/200/5"
            />
            <VideoRow
                views="1.2m"
                subs="659k"
                description="blah blah blah blah blah blah blah blah blah blah blah blah"
                timestamp="10 days ago"
                channel="Naruto"
                title="Lets learn how to stand on water"
                image="https://placekitten.com/200/121"
            />
            <VideoRow
                views="1.2m"
                subs="659k"
                description="blah blah blah blah blah blah blah blah blah blah blah blah"
                timestamp="10 days ago"
                channel="Naruto"
                title="Lets learn how to stand on water"
                image="https://placekitten.com/200/212"
            />
            <VideoRow
                views="1.2m"
                subs="659k"
                description="blah blah blah blah blah blah blah blah blah blah blah blah"
                timestamp="10 days ago"
                channel="Naruto"
                title="Lets learn how to stand on water"
                image="https://placekitten.com/200/11"
            />
            <VideoRow
                views="1.2m"
                subs="659k"
                description="blah blah blah blah blah blah blah blah blah blah blah blah"
                timestamp="10 days ago"
                channel="Naruto"
                title="Lets learn how to stand on water"
                image="https://placekitten.com/200/2"
            />
        </div>
    )
}

export default SearchPage