import { useState } from "react";

//import Sidebar from "./components/Sidebar";

import './Admin.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'



function Adminview() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
 

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  );
}

export default Adminview;