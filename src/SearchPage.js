import { TuneOutlined } from '@mui/icons-material';
import React from 'react'
import ChannelRow from './ChannelRow';
import VideoRow from './videoRow';
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className='SearchPage'>
        <div className='SearchPage_filter'>
            <TuneOutlined/>
            <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow
        image="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"
        Channel="Badsunited Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
        />
        <hr/>
        <VideoRow
        views="1.4K"
        subs="659K"
        description="We just created the Best Free JavaScript Programming Course on the planet Made with lots of ❤️. Kickstart your Web ..."
        timestamp="59 seconds ago" 
        channel="Badsunited Programmer"
        title="In this Exclusive React VIDEO training, we will be covering... ✓ Learn how to build the FULL Amazon website with FULL ..."
        image="https://media.graphcms.com/qNYh5gvQcyleZKzTEqHl"
        />
        <VideoRow
        views="190K"
        subs="659K"
        description="Hey Guys! My name is Zoya and I'm a 14 y/o blogger. I upload weekly videos pretty much about...."
        timestamp="4 years ago" 
        channel="Badsunited Programmer"
        title="reading people's assumptions about me"
        image="	https://media.graphcms.com/lqUQTOS4QoKI63grXTYJ"
        />
        <VideoRow
        views="1.4K"
        subs="659K"
        description="Hello All, In this video, I am talking about - - How to use Uber Suggest Chrome extension? Note: This channel is for EVERYONE ..."
        timestamp="3 months ago" 
        channel="Badsunited Programmer"
        title="How to use Uber Suggest Chrome extension?| UberSuggest Chrome Extension"
        image="https://media.graphcms.com/aVrJ1JlvSHeyJIE60VI5"
        />
        <VideoRow
        views="10M"
        subs="659K"
        description="Yoga For Anxiety and Stress. Awaken The Force! Move from the darkness into the light! Yoga has your back! In this practice video ..."
        timestamp="7 years ago" 
        channel="Badsunited Programmer"
        title="Yoga For Anxiety and Stress"
        image="https://media.graphcms.com/TlUmfJGCRAaiepkuTeGM"
        />
        <VideoRow
        views="26K"
        subs="659K"
        description="Join us for a weekend in Bangor, Wales filled to the brim with adventure and views you won't believe are in the UK. Get started ..."
        timestamp="5 years ago" 
        channel="Badsunited Programmer"
        title="A Weekend In Bangor, Wales with Virgin Trains"
        image="https://media.graphassets.com/Xf3LufTSQKFefraHZIrG"
        />
        <VideoRow
        views="1.5K"
        subs="659K"
        description="Location - Venue - Karnataka Chitrakala Parishath, Near The Lailt Hotel, Seshadripuram, Bengaluru. Timings - 11 am to 7pm ..."
        timestamp="3 months ago" 
        channel="Badsunited Programmer"
        title="MUST Visit FLEA Market in Bangalore | Shopping | Bangalore | Karnataka Chitra Kala Parishath"
        image="https://media.graphcms.com/YylcBrkmTGmikoNfZLzG"
        />
        <VideoRow
        views="235K"
        subs="659K"
        description="Kerala style Beef cutlet is a very tasty and crispy snacks item. Watch this fantastic video showing the cooking process of Beef ..."
        timestamp="2 years ago" 
        channel="Badsunited Programmer"
        title="Iftar Special Beef Cutlet | Kerala Style Snacks Recipe"
        image="https://media.graphcms.com/4twYlR6GQBC2wEyjF244"
        />
    </div>
  )
}

export default SearchPage