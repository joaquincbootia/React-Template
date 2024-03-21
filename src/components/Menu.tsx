import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  List,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const ResponsiveAppBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} />
        </Link>
        
        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <List sx={{ display: 'flex' }}>
            <ListItemButton>
              <Link to="/">
                <ListItemText primary="Home" />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/about">
                <ListItemText primary="About" />
              </Link>
            </ListItemButton>
            {/* Add more ListItems as needed */}
          </List>
        )}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/about">About</Link>
          </MenuItem>
          {/* Add more MenuItems as needed */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default ResponsiveAppBar;