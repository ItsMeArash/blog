import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="bold" flex={1}>
            وبلاگ من
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;