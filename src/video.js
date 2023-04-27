import { Avatar } from '@mui/material'
import React from 'react'
import './video.css';

function video({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className='viedeoCard'>
        <img  className='thumbnail'  src={image} alt=""/>
        <div className='viedeoInfo'>
            <Avatar 
            className='avatarImage' 
            alt={channel} 
            src={channelImage}
            />
            <div className='viedeoText'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p className='videoT'>
                    {views} | {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default video