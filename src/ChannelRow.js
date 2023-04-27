import React from 'react'
import './ChannelRow.css';
import { Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function ChannelRow( {image, Channel, subs, noOfVideos, description, verified}) {
  return (
    <div className='channelRow'>
      <Avatar className='logo' alt={Channel} src={image} />
      <div className='channelRow__text'>
        <h4>{Channel} {verified && <Verified/>}
        </h4>
        <p>{subs}subscribe . {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow