import React, { useState } from 'react';
import { Button, IconButton, Menu, MenuItem,makeStyles,Divider } from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme) => ({
    iconButton: {
        color: '#3a3a3a',
        marginRight: '1rem'
    },
    menuitem:{
        paddingRight: '100px',
        padding:'10px'
    }
}))

export default function PopupIconButton(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        if (typeof props.onOpen === 'function') {
            props.onOpen()
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        if (typeof props.onClose === 'function') {
            props.onClose()
        }
    };


    return (
        <div>
            {
                typeof props.title !== 'undefined' ? (<Button {...props} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {props.icon} {props.title}
                </Button>) : (<IconButton {...props} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {props.icon}
                </IconButton>)
            }
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                     <MenuItem onClick={handleClose} className={classes.menuitem}><FavoriteIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0 ">Menu 1</p>
                    </div></MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose} className={classes.menuitem}><FavoriteIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Menu 2</p>
                    </div></MenuItem> 
                    <Divider />
                    <MenuItem onClick={handleClose} className={classes.menuitem}><FavoriteIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Menu 3</p>
                    </div></MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose} className={classes.menuitem}><ExitToAppIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Logout</p>
                    </div></MenuItem>
            </Menu>
        </div>
    )
}