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
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </Link>
        <Link to="/members" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Members" />
          </ListItemButton>
        </Link>
        <Link to="/services" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton>
            <ListItemIcon>
              <BuildIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </Link>
        <Link to="/payment" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton>
            <ListItemIcon>
              <PaymentIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItemButton>
        </Link>
        <Link to="/userlist" style={{ textDecoration: "none", color: "white" }}>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="UserList" />
          </ListItemButton>
        </Link>
        <Link
          to="/adminprofile"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
