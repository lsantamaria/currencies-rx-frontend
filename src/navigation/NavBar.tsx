import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Button} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <AppBar style={{width:'100%'}}>
                <Toolbar variant='regular' style={{width:'100%'}}>
                    <Typography color="inherit">Currencies application</Typography>
                    <div style={{marginLeft: '35%'}}>
                        <Button color="inherit" component={RouterLink} to="/">Home</Button>
                        <Button color="inherit" component={RouterLink} to="/admin">Admin</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar;
