import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import BuildIcon from "@mui/icons-material/Build";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Fitness Admin</h2>
      <List>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <ListItem>
            <ListItemIcon>
              <DashboardIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/members" style={{ textDecoration: "none", color: "white" }}>
          <ListItem>
            <ListItemIcon>
              <GroupIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Members" />
          </ListItem>
        </Link>
        <Link to="/services" style={{ textDecoration: "none", color: "white" }}>
          <ListItem>
            <ListItemIcon>
              <BuildIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;
