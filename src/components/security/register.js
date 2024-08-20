
import { Avatar, Container, Card, Grid, Icon, Typography, TextField, Button, Link } from "@material-ui/core";
import React from "react";
import useStyles from "../../theme/useStyles";

const Register = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container} >
            <Grid container justify="center">
                <Grid item lg={6} md={8}>
                    <Card align="center" className={classes.card}>
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>person_add</Icon> 
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Registro de Usuario
                        </Typography>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField label="Nombres" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField label="Apellidos" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <TextField label="Email" variant="outlined" fullWidth type="email" />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <TextField label="Password" variant="outlined" fullWidth type="password" />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <Button variant="contained" fullWidth color="primary">Registrar</Button>
                            </Grid>
                        </Grid>
                        <Link href='/' variant='body1'  className={classes.link} >
                            Tienes una cuenta? Iniciar Sesion
                        </Link>
                    </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Register;