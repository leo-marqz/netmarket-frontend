import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

import useStyles from '../../theme/useStyles';

export default function Login() {
    const classes = useStyles();

  return (
    <Container className={classes.container}>
        <Grid container justify="center" >
            <Grid item lg={5} mg={5}>
                <Card align="center" className={classes.card}>
                    <Avatar className={classes.avatar}>
                        <Icon className={classes.icon}>person</Icon>
                    </Avatar>
                    <Typography variant="h5" color="primary">Ingrese su Usuario</Typography>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={classes.gridmb} >
                                <TextField label="Email" variant='outlined' fullWidth type='email' />
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}  >
                                <TextField label="Password" variant='outlined' fullWidth type='password' />
                            </Grid>
                            <Grid item xs={12} className={classes.gridmb}  >
                                <Button variant='contained' fullWidth color='primary'>
                                    Ingresar
                                </Button>
                            </Grid>
                        </Grid>
                        <Link to='/register' variant='body1'  className={classes.link} >
                            No tienes una cuenta? Registrate
                        </Link>
                    </form>
                </Card>
            </Grid>
        </Grid>
    </Container>
  )
}
