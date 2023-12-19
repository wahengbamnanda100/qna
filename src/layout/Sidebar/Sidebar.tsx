import {
  Box,
  ListItemText,
  MenuItem,
  MenuList,
  Theme,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";

const SideBarMenuItem = styled(MenuItem)(({ theme }: { theme: Theme }) => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: theme.palette.primary.contrastText,
}));

const Sidebar = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "180px",
        paddingTop: "24px",
        height: `calc(100vh + 10px)`,
        borderRight: `1px solid ${theme.palette.grey[600]}`,
      }}
    >
      <MenuList>
        <SideBarMenuItem>
          <ListItemText>Menu 1</ListItemText>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <ListItemText>Menu 2</ListItemText>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <ListItemText>Menu 3</ListItemText>
        </SideBarMenuItem>
        <SideBarMenuItem>
          <ListItemText>Menu 4</ListItemText>
        </SideBarMenuItem>
      </MenuList>
    </Box>
  );
};

export default Sidebar;
