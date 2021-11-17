import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  // eslint-disable-next-line no-unused-vars
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
    return (
        <div className="sidebar">
            <img
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
             alt=""
             />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your 
        Library" />

        <br/>
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr/>

        {playlists?.items?.map(playlist => (
          <SidebarOption title={playlist.name}/>
        ))}
        

        </div>
    )
}

export default Sidebar
