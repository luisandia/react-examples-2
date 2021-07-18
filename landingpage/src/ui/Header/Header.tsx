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
} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/styles';
import { nanoid } from 'nanoid';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  WEBSITE_DEVELOPMENT,
} from 'src/constants';
import { ITheme } from '../Theme';
import { ElevationScroll } from './ElevationScroll';
import headerStyles from './styles';

interface Props {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}

const Header = (props: Props) => {
  const classes = headerStyles();
  const theme = useTheme<ITheme>();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const { value, selectedIndex, setSelectedIndex, setValue } = props;

  const handleChange = (e: React.ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    i: number,
  ) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const propRefs = useRef({
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
    setValue,
    setSelectedIndex,
  });

  const {
    current: { menuOptions, menu_links },
  } = propRefs;

  useEffect(() => {
    const {
      current: { setValue, setSelectedIndex, menuOptions, menu_links },
    } = propRefs;

    [...menuOptions, ...menu_links].forEach((route: any) => {
      switch (window.location.pathname) {
        case `${route.path}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
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
  }, [selectedIndex, value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {menu_links.map((route: any, ) => (
          <Tab
            key={nanoid()}
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
        onClick={() => setValue(5)}
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
        {menuOptions.map((option: any, i) => (
          <MenuItem
            key={nanoid()}
            component={Link}
            to={option.path}
            classes={{ root: classes.menuItem }}
            onClick={(
              event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
            ) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.key}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
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
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.key}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            to="/estimate"
            selected={value === 5}
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
    </>
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
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
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
