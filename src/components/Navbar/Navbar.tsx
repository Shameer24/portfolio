import { AppBar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { INavbar } from "../../Types/Types";
import { ColorModeContext } from "../../../pages/_app";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useRouter } from "next/router";

export const Links = [
  {
    text: "Home",
    Icon: HomeIcon,
    url: "/",
  },
  {
    text: "Contact",
    Icon: ConnectWithoutContactIcon,
    url: "/contact",
  },
  {
    text: "Projects",
    Icon: AssignmentTurnedInIcon,
    url: "/",
  },
];

const Navbar = ({ toggleDrawer, navbarSx }: INavbar) => {
  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        py: ".45em",
        zIndex: "555",
        backdropFilter: "blur(1px)",
        position: "fixed",
        ...navbarSx,
      }}
      position="static"
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          margin: "0 auto",
        }}
        maxWidth="lg"
      >
        <IconButton
          onClick={() => toggleDrawer()}
          size="large"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Container>
    </AppBar>
  );
};
export default Navbar;
