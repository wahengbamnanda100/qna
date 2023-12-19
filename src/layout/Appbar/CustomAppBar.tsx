import {
  AppBar,
  Container,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: `1px solid ${theme.palette.secondary.light}`,
  margin: "auto",
  width: "60%",
  // [theme.breakpoints.up("sm")]: {
  // 	marginLeft: theme.spacing(1),
  // 	width: "auto",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontWeight: "light",
    fontSize: "0.8em",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // [theme.breakpoints.up("sm")]: {
    // 	width: "12ch",
    // 	"&:focus": {
    // 		width: "20ch",
    // 	},
    // },
  },
}));

const CustomAppBar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "secondary" }}>
      <Container>
        <Toolbar style={{ padding: 0 }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              justifySelf: "self-start",
            }}
          >
            QnA
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
