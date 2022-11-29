import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import GridViewIcon from "@mui/icons-material/GridView";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link, useLocation, useParams } from "react-router-dom";
import ListItem from "@mui/material/ListItem";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [isTabCommunityOpen, setIsTabCommunityOpen] = React.useState(true);
  const [isTabAppOpen, setIsTabAppOpen] = React.useState(true);
  const { pathname } = useLocation();

  const handleClickCommunity = () => {
    setIsTabCommunityOpen((prev) => !prev);
  };

  const handleClickApp = () => {
    setIsTabAppOpen((prev) => !prev);
  };

  return (
    <Box
      width="300px"
      flexDirection="column"
      pt="1rem"
      pr="1rem"
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
        position: "sticky",
        top: 64,
        height: "calc(100vh - 64px)",
      }}
    >
      <List
        sx={{
          width: "100%",
          position: "sticky",
        }}
      >
        <ListItem
          button
          component={Link}
          to="/home"
          selected={pathname === "/home" ? true : false}
          sx={{ marginBottom: "5px" }}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/orders"
          selected={pathname === "/orders" ? true : false}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>

        <ListItemButton>
          <ListItemIcon>
            <PeopleAltOutlined />
          </ListItemIcon>
          <ListItemText primary="Customer List" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>📤</ListItemIcon>
          <ListItemText primary="Upload Orders" />
        </ListItemButton>

        <ListItemButton onClick={handleClickCommunity}>
          <ListItemIcon>
            {isTabCommunityOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText primary="Community" />
        </ListItemButton>
        <Collapse in={isTabCommunityOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src="https://tribe-s3-production.imgix.net/v0WkoYKjsXyfeT5Jc0uI3?w=500&auto=compress,format&dl"
                  alt="forum icon"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: ".375rem",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Forum" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>📢</ListItemIcon>
              <ListItemText primary="Announcements" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickApp}>
          <ListItemIcon>
            {isTabAppOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText primary="App" />
        </ListItemButton>
        <Collapse in={isTabAppOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemIcon>🚀</ListItemIcon>
              <ListItemText primary="Feature requests" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>🐛</ListItemIcon>
              <ListItemText primary="Bug reports" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Box>
        <Typography
          variant="caption"
          display="block"
          ml="16px"
          mt="1rem"
          color={grey[700]}
          gutterBottom
        >
          &copy; Copyright 2022, Cardano
        </Typography>
        <Typography
          variant="caption"
          display="block"
          ml="16px"
          color={grey[700]}
        >
          <GitHubIcon fontSize="inherit" /> Powered by{" "}
          <span style={{ fontWeight: "600" }}>MIS</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
