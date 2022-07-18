/* Contains all page headers */

import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';

import IconPlaceholder from "../img/icon_placeholder.png";
import { doSignOutUser } from "../context/slice";

const style = makeStyles({
    signInBtn: {
      color: "white",
      backgroundColor: "blue",
      float: "right",
      position: "right",
      textAlign: "right"
    },
    headerBar: {
        margin: 0,
        padding: 0
    },
    menuItems: {
      float: "right",
      position: "right",
      textAlign: "right"
    }
  });

  const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        {...props}
      />
    ))(({ theme }) => ({
      '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
          theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
          padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5),
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    }
  ));

const Header = (props) => {

const classes = style();
  const SignInStatus = useSelector((state) => state.currentUser.userData);
  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogOut = () =>{ 
      dispatch(doSignOutUser())
      history.push(`/HomePage`);
  }

    return (
        <AppBar position="static">
        <Toolbar variant="dense" sx={{ display:'flex-end', justifyContent:"space-between"}}> {/* sx={{ justifyContext:'flex-end'}} */}
          <div>
            <img src={IconPlaceholder} alt="logo placeholder" style={{marginLeft: '20px', marginRight: '20px', width: '40px'}}/>
          </div>
          <div>
            <Button color="inherit" href="./SignInPage" style={{float: 'right', position: 'right', textAlign: 'right'}} className={classes.signInBtn}> 
              Sign in 
            </Button>
            <Button color="inherit" href="./HomePage" style={{float: 'right', position: 'right', textAlign: 'right'}} className={classes.signInBtn}>
              Home
            </Button>
          </div>
          {SignInStatus
            ? (
              <header className={classes.headerBar}> 
                <div>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    UserName
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <Divider sx={{ my: 0.5 }} />
                    
                    {/* <NavLink to="/UserPage" style={{ textDecoration: 'none', color: 'black' }}>
                      Profile
                    </NavLink> */}
                    <Divider sx={{ my: 0.5 }} />
                    <div style={{ textDecoration: 'none', color: 'black' }} onClick={handleLogOut}>
                      Log out
                    </div>
                  </StyledMenu>
                </div>
              </header>
              ) : 
              <></>
            }
        </Toolbar>
      </AppBar>
    );
}

export default Header;