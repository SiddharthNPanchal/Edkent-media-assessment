import React, { useState } from 'react';
import { Divider, IconButton, Menu, MenuItem, makeStyles } from '@material-ui/core/';
import { Info as InfoIcon } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    iconButton: {
        color: '#3a3a3a',
        marginRight: '1rem'
    }
}))

export default function NotificationButton(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
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
            <IconButton {...props} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {props.icon}
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><InfoIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Lorem ipsum is simply dummy text of the printing <br />and typesetting industry</p>
                    <small>5 Dec 2020</small></div></MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><InfoIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Lorem ipsum is simply dummy text of the printing <br />and typesetting industry <span style={{color:'blue'}}>Lorem Ipsum</span></p>
                    <small>5 Dec 2020</small></div></MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><InfoIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Lorem <span style={{color:'blue'}}>ipsum is</span> simply dummy text of the printing <br />and typesetting industry</p>
                    <small>5 Dec 2020</small></div></MenuItem>
            </Menu>
        </div>
    )
}
