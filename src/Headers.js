import React, {useState}  from 'react'
import "./header.css";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

export default function Headers() {
  const{ intputSearch, setInputSearch} = useState('')
  return (
    
    
    <div className='header'>
      <div className='left'>
      <MenuSharpIcon/>
      <Link to="/">
      <img  className='left_pic' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"  alt=" "/>
      </Link>
      
      </div>

      <div className='middle'>
        <input 
        value={intputSearch}
        onChange={(e) => setInputSearch(e.target.value)}    type="text" className='textarea' placeholder='Search'/>
        <Link to='/search/:searchTerm'>
        <SearchIcon className='searchbutton'/>
        </Link>
        
        
        
      </div>

      <div className='right'>
        <VideoCallSharpIcon className='right'/>
        <AppsSharpIcon className='right'/>
        <NotificationsActiveSharpIcon className='right'/>
        <Avatar alt="Remy Sharp" src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png" />

      </div>
      
    </div>


    
  )
}
