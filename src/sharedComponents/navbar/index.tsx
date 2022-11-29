import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import HiddenSearchBar from "./components/HiddenSearchBar";
import reactLogo from "../../assets/react.svg";
import Typography from "@mui/material/Typography";
import SwitchComponent from "./components/Switch";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import "./style.css";

const NavBar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <AppBar
      component={Box}
      position="fixed"
      elevation={2}
      color="primary"
      py="5px"
    >
      {openSearch ? <HiddenSearchBar hideSearchBar={setOpenSearch} /> : null}

      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            marginLeft: { xs: "0.5rem", sm: "0.5rem", md: "4rem" },
            marginRight: { xs: "0.5rem", sm: "0.5rem", md: "4rem" },
          }}
        >
          <Box
            sx={{
              width: "300px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={reactLogo} className="app-logo" alt="React logo" />
            <Typography
              sx={{
                fontSize: "1.5rem",
                // letterSpacing: "4px",
                fontWeight: "600",
                ml: "1rem",
                background:
                  "-webkit-linear-gradient(10deg, #e411a6 20%, #7908b9 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FO-SOC SYSTEM
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search..."
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    border: "solid 3px primary",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Box>
              <IconButton
                onClick={() => setOpenSearch(true)}
                aria-label="search"
                sx={{
                  border: "solid #d1d1d1 1px",
                  display: { xs: "flex", sm: "none" },
                }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
            <Box>
              <SwitchComponent />
            </Box>
            <Tooltip title="Logout">
              <IconButton disableRipple>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
