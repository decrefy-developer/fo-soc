import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themeDark, themeLight } from "./theme/theme";
import { router } from "./route";
import { RouterProvider } from "react-router-dom";
import { ColorModeContext } from "./context/colorMode";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === "dark" ? themeDark : themeLight}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
