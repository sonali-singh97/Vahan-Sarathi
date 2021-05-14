import React, { useState } from "react";
import { BarChart, Map, Home, HelpCircle, ChevronsLeft, ChevronsRight, ChevronLeft }from "react-feather";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";




import "react-pro-sidebar/dist/css/styles.css";



const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)

    
  const menuIconClick = () => {
   if(menuCollapse){
    document.querySelector(".page").className = "page sidebar-open";
     setMenuCollapse( !menuCollapse) ;
   }
   else {
    document.querySelector(".page").className = "page sidebar-close";
     setMenuCollapse( !menuCollapse) ;
   }
  
  };

  return (
    <>
      <div id="sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <h4>{menuCollapse ? <span onClick={menuIconClick}> <Map /> </span> : <><Map className = "menu-icon" /> Dashboard </>}</h4>
            </div>
            <div className="closemenu" onClick={menuIconClick}>

              {menuCollapse ? (
                null
                
              ) : (
                <ChevronsLeft/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
             
              <MenuItem  active={true}> <Home className = "menu-icon" /> Dashboard</MenuItem>
              <MenuItem > < BarChart className = "menu-icon" /> Charts</MenuItem>
              <MenuItem > <HelpCircle className = "menu-icon" /> FAQ</MenuItem>
              {/* <MenuItem >Settings</MenuItem> */}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;