import React, { useState } from 'react';
import { Divider, IconButton, Menu, MenuItem, makeStyles } from '@material-ui/core/';
import { Info as InfoIcon } from '@material-ui/icons'
import BookIcon from '@material-ui/icons/Book';


const useStyles = makeStyles((theme) => ({
    iconButton: {
        color: '#3a3a3a',
        marginRight: '1rem'
    }
}))

export default function InfoButton(props) {
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
                <MenuItem onClick={handleClose}><BookIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Menu Option 1</p>
                    </div></MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><BookIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Menu Option 2</p>
                    </div></MenuItem>
                    <MenuItem onClick={handleClose}> <div>
                    <a className="p-0 m-0" style={{ textDecoration: 'none' }}>RESOURCES</a>
                    </div></MenuItem>
                <MenuItem onClick={handleClose}><BookIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Menu Option 3</p>
                    </div></MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}><BookIcon className={classes.iconButton} /> <div>
                    <p className="p-0 m-0">Menu Option 4</p>
                    </div></MenuItem>
                <Divider />
            </Menu>
        </div>
    )
}
