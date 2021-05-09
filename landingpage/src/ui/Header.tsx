import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
  useScrollTrigger
} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/styles';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/logo.svg';
import {
  ABOUT,
  CONTACT,
  CUSTOM_SOFTWARE,
  HOME,
  MOBILE_APPS,
  REVOLUTION,
  SERVICES,
  WEBSITE_DEVELOPMENT
} from 'src/constants';
import { ITheme } from './Theme';

function ElevationScroll(props: any) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme: ITheme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

interface Props {}

const Header = (props: any) => {
  const classes = useStyles();
  const theme = useTheme<ITheme>();
  console.log('theme ', theme);
  const iOS =
    process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (e: any, newValue: any) => {
    props.setValue(newValue);
  };

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e: any, i: any) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e: any) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const {
    current: { menuOptions, menu_links, setValue, setSelectedIndex },
  } = useRef({
    menuOptions: [
      {
        ...SERVICES,
        activeIndex: 1,
        selectedIndex: 0,
      },
      {
        ...CUSTOM_SOFTWARE,
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        ...MOBILE_APPS,
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        ...WEBSITE_DEVELOPMENT,
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    menu_links: [
      { ...HOME, activeIndex: 0 },
      {
        ...SERVICES,
        activeIndex: 1,
        ariaOwns: anchorEl ? 'simple-menu' : undefined,
        ariaPopup: anchorEl ? 'true' : undefined,
        mouseOver: (event: any) => handleClick(event),
      },
      { ...REVOLUTION, activeIndex: 2 },
      { ...ABOUT, activeIndex: 3 },
      { ...CONTACT, activeIndex: 4 },
    ],
    setValue: props.setValue,
    setSelectedIndex: props.setSelectedIndex,
  });

  const { value, selectedIndex } = props;
  useEffect(() => {
    [...menuOptions, ...menu_links].forEach((route: any) => {
      switch (window.location.pathname) {
        case `${route.path}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== selectedIndex
            ) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/estimate':
          setValue(5);
          break;
        default:
          break;
      }
    });
  }, [
    menuOptions,
    menu_links,
    selectedIndex,
    setSelectedIndex,
    setValue,
    value,
  ]);
  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {menu_links.map((route: any, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.path}
            label={route.key}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => props.setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option: any, i: any) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.path}
            classes={{ root: classes.menuItem }}
            onClick={(event: any) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose(event);
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.key}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {menu_links.map((route: any) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.path}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography
              >
                {route.key}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            to="/estimate"
            selected={props.value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              // onClick={() => props.setValue(0)}
              className={classes.logoContainer}
            >
              <img
                alt="company logo"
                className={classes.logo}
                src={logo}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
