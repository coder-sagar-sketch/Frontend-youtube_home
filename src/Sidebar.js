import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import TheatersSharpIcon from '@mui/icons-material/TheatersSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import SlideshowSharpIcon from '@mui/icons-material/SlideshowSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';


function Sidebar() {
  return (
    <div className="siderow">
      <SidebarRow    Icon={HomeIcon} title="Home" />
      <SidebarRow   Icon={TheatersSharpIcon} title="Shorts" />
      <SidebarRow  Icon={SubscriptionsSharpIcon} title="Subsriptions" />
      <hr/>
      <SidebarRow  Icon={VideoLibrarySharpIcon} title="Library" />
      <SidebarRow  Icon={HistorySharpIcon} title="History" />
      <SidebarRow  Icon={SlideshowSharpIcon} title="Your Viedeo" />
      <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
      <SidebarRow  Icon={ExpandMoreSharpIcon} title="Show more" />
      <hr/>
    </div>
  )
}

export default Sidebar