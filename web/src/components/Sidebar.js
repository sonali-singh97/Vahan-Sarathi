import React, { useState } from "react";
import { BarChart, Map, Home, HelpCircle, ChevronsLeft, ChevronsRight, ChevronLeft }from "react-feather";
import { Link } from 'react-router-dom';
import icon from "./../assets/images/vehicle-icon.jpg"

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
    const [menu, setMenu] = useState("dashboard")
    
  const menuIconClick = () => {
   if(menuCollapse){
    document.querySelector(".page").className = "page sidebar-open";
    document.querySelector(".header").className = "header sidebar-open";
     setMenuCollapse( !menuCollapse) ;
   }
   else {
    document.querySelector(".page").className = "page sidebar-close";
    document.querySelector(".header").className = "header sidebar-close";
     setMenuCollapse( !menuCollapse) ;
   }
  
  };

  return (
    <>
      <div id="sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              <h4>{menuCollapse ? <span onClick={menuIconClick}> <Map className = "menu-icon" /> </span> : <>< Map className = "menu-icon" /> Vahan Sarathi </>}</h4>
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
             
              <MenuItem  active={menu === "dashboard"} onClick={()=>setMenu("dashboard")}> <Home className = "menu-icon" /> Dashboard   <Link to="/" /></MenuItem>
              <MenuItem  active={menu === "charts"} onClick={()=>setMenu("charts")} > < BarChart className = "menu-icon"  /> Charts    <Link to="/charts" /> 
              </MenuItem>
              <MenuItem  active={menu ==="faq"} onClick={()=> setMenu("faq")} > <HelpCircle className = "menu-icon"  /> FAQ    <Link to="/" /> </MenuItem>
              {/* <MenuItem >Settings</MenuItem> */}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;