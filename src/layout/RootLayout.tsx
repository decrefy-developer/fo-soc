import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavBar from "../sharedComponents/navbar";
import Sidebar from "../sharedComponents/sidebar";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Toolbar />

      <Container
        maxWidth="xl"
        sx={{
          height: "calc(100vh - 64px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginLeft: { xs: "0.5rem", sm: "0.5rem", md: "4rem" },
            marginRight: { xs: "0.5rem", sm: "0.5rem", md: "4rem" },
          }}
        >
          <Sidebar />
          <Box display="flex" flex="1" padding="1.5rem 0 2rem 0">
            <Outlet />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RootLayout;
