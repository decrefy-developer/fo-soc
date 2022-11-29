import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardComponent from "./components/Card";

export const Home = () => {
  const dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Box flex="65%">
        <CardComponent sx={{ height: "100px", mb: "1.5rem" }} />

        {dataArray.map((item) => (
          <CardComponent key={item} sx={{ marginBottom: "1.5rem" }} />
        ))}
      </Box>

      <Box
        flex="35%"
        paddingLeft="1.5rem"
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      >
        <Paper sx={{ height: "250px", mb: "1.5rem" }}>side</Paper>
      </Box>
    </>
  );
};
