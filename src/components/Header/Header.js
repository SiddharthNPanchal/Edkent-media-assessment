import React, { useState } from 'react'
import './Header.css'
import PopupIconButton from '../popupiconbutton'
import NotificationButton from '../notificationbutton'
import InfoButton from '../infobutton'
import { AppBar, Backdrop, Toolbar, Button, Typography, IconButton, makeStyles, ListSubheader, Divider, List, ListItem, ListItemIcon, ListItemText, Hidden, Drawer } from '@material-ui/core'
import { Menu, Person as PersonIcon, InfoRounded as InfoLogo, Notifications as BellIcon, Dashboard as DshIcon, Receipt as ReceiptIcon } from '@material-ui/icons'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#fafafa',
    boxShadow: '0px 1px #f0f0f0;',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.info.dark,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
    fontWeight: 'bolder',
  },
  button: {
    textTransform: 'none',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: theme.palette.info.dark,
    color: '#ffffff',
    borderRadius: '8px'
  },
  iconButton: {
    color: '#7C8DB5'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  selectedMenu: {
    color: theme.palette.info.dark,
    borderRight: '3px solid ' + theme.palette.info.dark,
  },
  selectedIcon: {
    color: theme.palette.info.dark,
  },
  profileText:{
    fontSize:'14px',
    color: '#7C8DB5'
  }
}))

function Header(props) {
  const { window } = props;
  const classes = useStyles();


  const [showBackdrop, setShowBackdrop] = useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const container = window !== undefined ? () => window().document.body : undefined

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} >
        <Typography variant="h5" className={classes.logo}>
          LOGO
        </Typography>
      </div>
      <Divider />
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Heading 1
        </ListSubheader>
      }>
        <ListItem button className={classes.selectedMenu}>
          <ListItemIcon> <DshIcon className={classes.selectedIcon} /> </ListItemIcon>
          <ListItemText primary="Menu Option 1" />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <ReceiptIcon /> </ListItemIcon>
          <ListItemText primary="Menu Option 2" />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <ReceiptIcon /> </ListItemIcon>
          <ListItemText primary="Menu Option 3" />
        </ListItem>
      </List>
      <Divider />
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Heading 2
        </ListSubheader>
      }>
        <ListItem button>
          <ListItemIcon> <DshIcon /> </ListItemIcon>
          <ListItemText primary="Menu Option 4" />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <ReceiptIcon /> </ListItemIcon>
          <ListItemText primary="Menu Option 5" />
        </ListItem>
      </List>
      <Divider />
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Heading 3
        </ListSubheader>
      }>
        <ListItem button>
          <ListItemIcon> <DshIcon /> </ListItemIcon>
          <ListItemText primary="Menu Option 6" />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <ReceiptIcon /> </ListItemIcon>
          <ListItemText primary="Menu Option 7" />
        </ListItem>
      </List>
      <Divider />
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Heading 4
        </ListSubheader>
      }>
        <ListItem button>
          <ListItemIcon> <DshIcon /> </ListItemIcon>
          <ListItemText primary="Menu Option 8" />
        </ListItem>
        <ListItem button>
          <ListItemIcon> <ReceiptIcon /> </ListItemIcon>
          <ListItemText primary="Menu Option 9" />
        </ListItem>
      </List>
      <div >
        <ListItem button>
          <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </div>
    </div>
  );




  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={showBackdrop} onClick={(e) => setShowBackdrop(false)}></Backdrop>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <div className="d-flex align-items-center justify-content-end flex-grow-1">
            <Button variant="contained" style={{ color: props.color }} className={classes.button} autoCapitalize={false}>
              Button1
            </Button>
            <InfoButton className={classes.iconButton} icon={<InfoLogo />} onOpen={() => setShowBackdrop(true)} onClose={() => setShowBackdrop(false)} />
            <NotificationButton className={classes.iconButton} icon={<BellIcon />} onOpen={() => setShowBackdrop(true)} onClose={() => setShowBackdrop(false)} />
            <PopupIconButton className={classes.iconButton,classes.profileText} icon={<PersonIcon />} title="Jason Statham" onOpen={() => setShowBackdrop(true)} onClose={() => setShowBackdrop(false)} />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          props.widget
        }
      </main>
    </div>
  );
}

export default Header;
