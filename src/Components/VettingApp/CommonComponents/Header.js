import React from 'react';
import {
  AppBar,
  Toolbar,
  MenuItem,
  ListItemText,
  Menu,
  Typography,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {withStyles} from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import {deepPurple} from '@material-ui/core/colors';
import BrandingStatsCan from '../../../Components/Headers/BrandingStatsCan';
import Language from '../../../Components/Headers/Language';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
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
));

const defaultStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1200,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: deepPurple[500],
  },
  toolbar: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  branding: {
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    },
    '& img': {
      height: theme.spacing(3),
    },
  },
  lang: {
    marginRight: theme.spacing(1),
    textAlign: 'right',
    flexGrow: 1,
  },
  button: {
    'backgroundColor': 'white',
    'boxShadow': 'none',
    '&:hover': {
      backgroundColor: 'white',
      color: '#FFF',
      boxShadow: 'none',
    },
  },
  iconButton: {
    marginRight: theme.spacing(-0.5),
  },
  purple: {
    backgroundColor: deepPurple[500],
  },
}));

function ShowMenuButton(props) {
  const classes = defaultStyles();
  if (props.role === 'analyst' || props.role === 'researcher') {
    return (
      <IconButton
        onClick={props.clickHandler}
        className={classes.iconButton}
        edge="start"
        aria-label="Show menu button"
      >
        <MenuIcon />
      </IconButton>
    );
  } else {
    return false;
  }
}

export default function DefaultHeader(props) {
  const classes = defaultStyles();

  const [state, setState] = React.useState({
    windowWidth: window.innerWidth,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    // Detect screen size
    const handleResize = () =>
      setState({...state, windowWidth: window.innerWidth});
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [state]);

  return (
    <React.Fragment>
      <AppBar
        className={`${classes.appBar} ${props.flat && classes.flatHeader}`}
      >
        <Toolbar className={classes.toolbar}>
          <ShowMenuButton clickHandler={props.clickHandler} role={props.role} />
          <div className={classes.branding}>
            <BrandingStatsCan />
          </div>
          <div className={classes.lang}>
            <Language />
          </div>
          <IconButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            className={classes.button}
            onClick={handleClick}
            edge="end"
          >
            <Avatar className={classes.small}>
              <span className={classes.purple}>TS</span>
            </Avatar>
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <ListItemText
                primary={<Typography variant="body2">Sign out</Typography>}
              />
            </MenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
