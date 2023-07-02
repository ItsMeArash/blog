import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
import CustomizedSwitches from "../shared/DarkSwitch";

const Header = ({ handleDark }) => {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="bold" flex={1}>
            <Link to="/" style={{textDecoration: "none", color: "#fff"}}>وبلاگ من</Link>
          </Typography>
          <CustomizedSwitches handleDark={handleDark}/>
          <Link to="/" style={{color: "#fff"}}>
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
