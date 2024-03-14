import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import webuipackSvg from '../../assets/webuipack.svg';
import './index.css';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [login, setLogin] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const loginButtonClicked = () => {
    setLogin(true);
    localStorage.setItem('token', 'kousik');
  };

  useEffect(() => {
    const loginToken = localStorage.getItem('token');
    if (loginToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  const logOutClicked = (setting) => {
    if (setting === 'Logout') {
      localStorage.removeItem('token');
      setLogin(false);
    }
  };

  return (
    <AppBar
      position="static"
      className='navbar'
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(5px)',
        '&MuiPaper-root': { backgroundColor: 'tranparent' },
      }}
    >
      <Container maxWidth="xl" sx={{ padding: '0' }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src={webuipackSvg} alt='logo' />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ padding: '0' }}
            >
              <MenuIcon sx={{ cursor: 'pointer' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', cursor: 'pointer' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={webuipackSvg} alt='logo' />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', color: 'white' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  textTransform: 'none',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexGrow: 0,
              transistion: 'all 0.5s ease',
            }}
          >
            {login ? (
              <div>
                <Badge badgeContent={4} color="primary" sx={{ mr: 3 }}>
                  <NotificationsIcon color="white" sx={{ cursor: 'pointer' }} />
                </Badge>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      className="avatar"
                      src="data:image/jpeg;base64,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"
                    />
                  </IconButton>
                </Tooltip>
              </div>
            ) : (
              <div className="button-container">
                <Button
                  variant="contained"
                  onClick={loginButtonClicked}
                  sx={{border:'1px solid #2A9D8F',width:'120px',fontFamily:'raleway',fontSize:'16px',textTransform:'none',color:'#FFFFFF',backgroundColor:'transparent','&:hover': {
                    background: 'transparent !important'
                  },}}
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={loginButtonClicked}
                  sx={{background:'#2A9D8F',textTransform:'none',fontFamily:'raleway',width:'120px',fontSize:'16px',color:'#FFFFFF','&:hover': {
                    background: '#2A9D8F !important',
                  },}}
                >
                  Signup
                </Button>
              </div>
            )}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => logOutClicked(setting)}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
