import React from 'react'
import './SidebarRow.css';




function SidebarRow({  Icon, title}) {
  return (
    <div  className='sidebarrow' >
        
        

      
        <Icon className='sidebar_icon' />
        
        
        <h2 className='sidebar_title'>{title}</h2>
        
     
    
        
    </div>
  )
}

export default SidebarRow