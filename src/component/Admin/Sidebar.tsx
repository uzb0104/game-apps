import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Typography,
  ListItemButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import BuildIcon from "@mui/icons-material/Build";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  name: string;
  profilePic: string;
}

const Sidebar: React.FC<SidebarProps> = ({ name, profilePic }) => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1a2129a6",
        color: "white",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Avatar
          alt={name}
          src={profilePic}
          style={{ width: "80px", height: "80px", margin: "0 auto" }}
        />
        <Typography variant="h6" style={{ marginTop: "10px" }}>
          {name}
        </Typography>
      </div>

      <List>
        <NavLink
          to="/adminnavbar"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#ff6f61" : "white",
          })}
        >
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon style={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </NavLink>
        <NavLink
          to="/members"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#ff6f61" : "white",
          })}
        >
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon style={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Members" />
          </ListItemButton>
        </NavLink>
        <NavLink
          to="/services"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#ff6f61" : "white",
          })}
        >
          <ListItemButton>
            <ListItemIcon>
              <BuildIcon style={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </NavLink>
        <NavLink
          to="/payment"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#ff6f61" : "white",
          })}
        >
          <ListItemButton>
            <ListItemIcon>
              <PaymentIcon style={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItemButton>
        </NavLink>
        <NavLink
          to="/userlist"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#ff6f61" : "white",
          })}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="UserList" />
          </ListItemButton>
        </NavLink>
        <NavLink
          to="/adminprofile"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#ff6f61" : "white",
          })}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </NavLink>
      </List>
    </div>
  );
};

export default Sidebar;
