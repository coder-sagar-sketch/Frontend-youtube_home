import React from 'react'
import './videoRow.css';

function videoRow({ views, subs, description,  timestamp, channel, title, image }) {
  return (
    <div className='videoRow'>
        <img src={image} alt=''/>
        <div className='videoRow__text'>
            <h3>{title}</h3>
            <p className='videoRow__headline'>
                {channel}.{" "}
                <span className='videoRow__subs'>
                    <span className='videoRow__subsNumber'>{subs}</span>
                    </span>{" "}
                Subscribe {views} views . {timestamp}
            </p>
            <p className='videoRow__description'>
                {description}
            </p>
        </div>
            </div>
  )
}

export default videoRow