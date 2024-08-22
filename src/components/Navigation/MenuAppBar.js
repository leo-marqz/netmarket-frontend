import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from '../../theme/useStyles';
import { Link } from 'react-router-dom';

export default function MenuAppBar() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

  return (
    <AppBar position="static" className={classes.appBar}>
        <Container>
            <Toolbar>
                <div className={classes.sectionMobile}>
                    <IconButton color='inherit' onClick={openDrawer}>
                        <Icon fontSize='large'>menu</Icon>
                    </IconButton>
                </div>
                <Drawer open={open} onClose={closeDrawer}>
                    <div className={classes.list}>
                        <List>
                            <ListItem onClick={closeDrawer} type='button' className={classes.listItem}>
                                <Link to='/login' color='inherit' underline='none' className={classes.linkAppBarMobile}>
                                    <ListItemIcon className={classes.listItemIcon}>
                                        <Icon>person</Icon>
                                    </ListItemIcon>
                                    <ListItemText>Login</ListItemText>
                                </Link>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <div className={classes.grow}>
                    <Link to='/' color='inherit' underline='none' className={classes.linkAppBarLogo}>
                        <Icon fontSize='large' className={classes.mr}>store</Icon>
                        <Typography variant='h5'>NetMarket</Typography>
                    </Link>
                </div>
                <div className={classes.sectionDesktop}>
                    <Button color='inherit' className={classes.buttonIcon}>
                        <Link to='/login' color='inherit' underline='none' href='/login' className={classes.linkAppBarDesktop}>
                            <Icon className={classes.mr}>person</Icon>
                            Login
                        </Link>
                    </Button>
                </div>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
