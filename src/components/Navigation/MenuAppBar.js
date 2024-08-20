import { AppBar, Button, Container, Icon, Link, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '../../theme/useStyles';

export default function MenuAppBar() {
    const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
        <Container>
            <Toolbar>
                <div className={classes.grow}>
                    <Link color='inherit' underline='none' className={classes.linkAppBarLogo}>
                        <Icon fontSize='large' className={classes.mr}>store</Icon>
                        <Typography variant='h5'>NetMarket</Typography>
                    </Link>
                </div>
                <div>
                    <Button color='inherit' className={classes.buttonIcon}>
                        <Link color='inherit' underline='none' href='/login' className={classes.linkAppBarDesktop}>
                            <Icon className={classes.mr}>person</Icon>
                            Ingresar
                        </Link>
                    </Button>
                </div>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
