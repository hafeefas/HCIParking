import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledIconButton = styled(IconButton)({
  
  color: "inherit", 
});

export default function PrimarySearchAppBar() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <StyledIconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <Badge badgeContent={4} color="error"></Badge>
        </StyledIconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <StyledIconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </StyledIconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <StyledIconButton
          size="large"
          aria-label="account of the current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </StyledIconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <StyledIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </StyledIconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Parking Project
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
          <Box sx={{ flexGrow: 1 }} />
          <StyledIconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
            onClick={handleDrawerOpen}
          >
            List
          </Typography>
          </StyledIconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <StyledIconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
                
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </StyledIconButton>
            <StyledIconButton
              size="large"
              edge="end"
              aria-label="account of the current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </StyledIconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>

            <StyledIconButton


              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </StyledIconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        List of Spots: {/* seed code--put into indiv component later */}
        <table border="1">
        <tr>
            <th>Spot #</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>1</td>
            <td>OPEN</td>
        </tr>
        <tr>
            <td>2</td>
            <td>OPEN</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Reserved</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Occupied</td>
        </tr>
        <tr>
            <td>5</td>
            <td></td>
        </tr>
        <tr>
            <td>6</td>
            <td></td>
        </tr>
        <tr>
            <td>7</td>
            <td></td>
        </tr>
        <tr>
            <td>8</td>
            <td></td>
        </tr>
        <tr>
            <td>9</td>
            <td>Reserved</td>
        </tr>
        <tr>
            <td>10</td>
            <td></td>
        </tr>
        <tr>
            <td>11</td>
            <td></td>
        </tr>
        <tr>
            <td>12</td>
            <td></td>
        </tr>
        <tr>
            <td>13</td>
            <td></td>
        </tr>
        <tr>
            <td>14</td>
            <td></td>
        </tr>
        <tr>
            <td>15</td>
            <td>OPEN</td>
        </tr>
        <tr>
            <td>16</td>
            <td>OPEN</td>
        </tr>
        <tr>
            <td>17</td>
            <td>OPEN</td>
        </tr>
        <tr>
            <td>18</td>
            <td>OPEN</td>
        </tr>
        <tr>
            <td>19</td>
            <td></td>
        </tr>
        <tr>
            <td>20</td>
            <td>Reserved</td>
        </tr>
        <tr>
            <td>21</td>
            <td>Reserved</td>
        </tr>
        <tr>
            <td>22</td>
            <td></td>
        </tr>
        <tr>
            <td>23</td>
            <td></td>
        </tr>
        <tr>
            <td>24</td>
            <td></td>
        </tr>
        <tr>
            <td>25</td>
            <td></td>
        </tr>
        <tr>
            <td>26</td>
            <td></td>
        </tr>
        <tr>
            <td>27</td>
            <td></td>
        </tr>
        <tr>
            <td>28</td>
            <td></td>
        </tr>
        <tr>
            <td>29</td>
            <td>OPEN</td>
        </tr>
        <tr>
            <td>30</td>
            <td></td>
        </tr>
        <tr>
            <td>31</td>
            <td></td>
        </tr>
        <tr>
            <td>32</td>
            <td></td>
        </tr>
        <tr>
            <td>33</td>
            <td></td>
        </tr>
        <tr>
            <td>34</td>
            <td></td>
        </tr>
        <tr>
            <td>35</td>
            <td></td>
        </tr>
        <tr>
            <td>36</td>
            <td></td>
        </tr>
        <tr>
            <td>37</td>
            <td>Reserved</td>
        </tr>
    </table>
      </Drawer>
    </Box>
  );
}