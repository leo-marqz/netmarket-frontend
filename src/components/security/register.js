
import { Avatar, Container, Card, Grid, Icon, Typography, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";
import { Link } from 'react-router-dom';

const cleanUser = {
    name: '',
    lastname: '',
    email: '',
    password: ''
};

const Register = () => {
    const classes = useStyles();
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''
    });

    // handleChange: Funcion que se ejecuta cuando se cambia el valor de un campo
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const saveUser = (e) => {
        e.preventDefault();
        console.log('Guardando usuario', user);
        setUser(cleanUser);
    }

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
                                <TextField 
                                    label="Nombres" 
                                    variant="outlined" 
                                    fullWidth 
                                    name="name"
                                    value={user.name} 
                                    onChange={handleChange} 
                                />
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField 
                                    label="Apellidos" 
                                    variant="outlined" 
                                    fullWidth 
                                    name="lastname"
                                    value={user.lastname} 
                                    onChange={handleChange} 
                                    />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <TextField 
                                    label="Email" 
                                    variant="outlined" 
                                    fullWidth 
                                    type="email"
                                    name="email"
                                    value={user.email} 
                                    onChange={handleChange} 
                                    />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <TextField 
                                    label="Password" 
                                    variant="outlined" 
                                    fullWidth type="password"
                                    name="password"
                                    value={user.password} 
                                    onChange={handleChange}
                                    />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <Button 
                                    variant="contained" 
                                    fullWidth color="primary"
                                    onClick={saveUser}
                                    type="submit"
                                >
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                        <Link to='/login' variant='body1'  className={classes.link} >
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