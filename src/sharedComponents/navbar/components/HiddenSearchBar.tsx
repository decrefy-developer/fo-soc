import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const HiddenSearchBar: React.FC<{
  hideSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ hideSearchBar }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      bgcolor={(t) => t.palette.background.paper}
      display="flex"
      position="absolute"
      width="100%"
      // minHeight="64px"
      zIndex={1}
      alignItems="center"
      px="1rem"
    >
      <TextField
        placeholder="Search..."
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <CloseIcon
        sx={{ color: "#000", cursor: "pointer" }}
        onClick={() => hideSearchBar(false)}
      />
    </Stack>
  );
};

export default HiddenSearchBar;
