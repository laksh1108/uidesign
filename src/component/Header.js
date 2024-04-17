import React from 'react'

const Header = () => {
  return (
    <div className="header">
     
     <img src="cpmy-name.png" alt="" width='168px' height='44px' />
      
      <div className="header-links flex justify-between ">
        <p className='hidden xl:block'>Blogs</p>
        <p  className='hidden xl:block'>Features</p>
        <p  className='hidden xl:block'>Pricing</p>
        <p  className='hidden xl:block'>Integrations</p>
        <button className='hidden xl:block'>Start trail</button>
        <img src="icon.png" alt="" className='xl:hidden'/>
      </div>
    </div>
  )
}

export default Header