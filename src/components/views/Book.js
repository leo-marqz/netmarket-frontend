import React, { useEffect, useState } from 'react'
import useStyles from '../../theme/useStyles'
import { Button, Card, Container, Dialog, DialogContent, DialogTitle, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';
import { addBook, deleteBookById, getAllBooks, getBookById, updateBook } from '../data/library';


const cleanBook = {
    id: '',
    category: '',
    title: '',
    author: ''
}

const cleanBookEdit = {
    idEdit: '',
    categoryEdit: '',
    titleEdit: '',
    authorEdit: ''
}

export default function Book() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [book, setBook] = useState({
        id: '',
        category: '',
        title: '',
        author: ''
    });
    const [bookEdit, setBookEdit] = useState({
        idEdit: '',
        categoryEdit: '',
        titleEdit: '',
        authorEdit: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBook((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleChangeEdit = (e) => {
        const {name, value} = e.target;
        setBookEdit((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const saveBook = () => {
        addBook(book);
        setBook(cleanBook);
    }

    const [listBooks, setListBooks] = useState([]);
    const loadListBooks = ()=>{
        const data = getAllBooks();
        console.log(data);
        setListBooks(data);
    }
    useEffect(()=>{ loadListBooks(); }, [listBooks.length]);

    const editBook = (book)=>{
        const data = updateBook(book);
        setBookEdit(cleanBookEdit);
        closeDialog();
    }

    const deleteBook = (id) => {
        if(window.confirm('¿Está seguro de eliminar el libro?')){
            let newData = deleteBookById(id);
            setListBooks(newData);
        }
    }

    const openDialog = (id) => {
        setOpen(true);
        const dataBook = getBookById(id);
        setBookEdit({
            idEdit: dataBook.id,
            categoryEdit: dataBook.category,
            titleEdit: dataBook.title,
            authorEdit: dataBook.author
        });
        console.log('Abriendo dialogo: +', id);
    }

    const closeDialog = () => {
        console.log('Cerrando dialogo');
        setOpen(false);
    }

    

  return (
    <Container className={classes.container}>
        <Grid container justifyContent='center'>
            <Grid item lg={7} md={8}>
                <Card className={classes.card} align='center'>
                    <Typography variant='h4' color='primary'>
                        Libros
                    </Typography>
                    <form className={classes.form} onSubmit={(e)=>e.preventDefault()}>
                        <Grid container spacing={2}>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <TextField 
                                    select
                                    label='Categoria' 
                                    variant='outlined' 
                                    fullWidth 
                                    align='left'
                                    name='category' 
                                    value={book.category}
                                    onChange={handleChange}
                                >
                                    <MenuItem disabled selected > -- Seleccione una categoria -- </MenuItem>
                                    <MenuItem value='Programacion' >Programacion</MenuItem>
                                    <MenuItem value='Historia' >Historia</MenuItem>
                                    <MenuItem value='Matematica' >Matematica</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField 
                                    label='Titulo' 
                                    variant='outlined' 
                                    fullWidth 
                                    name='title' 
                                    value={book.title}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField 
                                    label='Autor' 
                                    variant='outlined' 
                                    fullWidth 
                                    name='author' 
                                    value={book.author}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} className={classes.gridmb}>
                                <Button 
                                    variant='contained'
                                    fullWidth
                                    color='primary'
                                    type='submit'
                                    onClick={saveBook}
                                    >
                                    Guardar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Grid>
        </Grid>

        <TableContainer component={Paper} className={classes.container}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Categoria</TableCell>
                        <TableCell>Titulo</TableCell>
                        <TableCell>Autor</TableCell>
                        <TableCell align='center' colSpan={2}>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listBooks.map((itemBook)=>(
                        <TableRow key={itemBook.id}>
                            <TableCell>{itemBook.category}</TableCell>
                            <TableCell>{itemBook.title}</TableCell>
                            <TableCell>{itemBook.author}</TableCell>
                            <TableCell>
                                <Button 
                                    variant='contained' 
                                    color='primary' 
                                    onClick={()=>{openDialog(itemBook.id)}}
                                >
                                    Editar
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Button 
                                    variant='contained' 
                                    color='secondary' 
                                    onClick={()=>deleteBook(itemBook.id)}
                                >
                                    Eliminar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        <Dialog open={open} onClose={closeDialog} maxWidth="xs" fullWidth align='center'>
            <DialogTitle>Editar Libro</DialogTitle>
            <DialogContent>
                <form className={classes.form} onSubmit={(e)=>e.preventDefault()}>
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12} className={classes.gridmb}>
                            <TextField 
                                select
                                label='Categoria' 
                                variant='outlined' 
                                fullWidth 
                                align='left'
                                name='categoryEdit' 
                                value={bookEdit.categoryEdit}
                                onChange={handleChangeEdit}
                            >
                                <MenuItem disabled selected > -- Seleccione una categoria -- </MenuItem>
                                <MenuItem value='Programacion' >Programacion</MenuItem>
                                <MenuItem value='Historia' >Historia</MenuItem>
                                <MenuItem value='Matematica' >Matematica</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.gridmb}>
                            <TextField 
                                label='Titulo' 
                                variant='outlined' 
                                fullWidth 
                                name='titleEdit' 
                                value={bookEdit.titleEdit}
                                onChange={handleChangeEdit}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.gridmb}>
                            <TextField 
                                label='Autor' 
                                variant='outlined' 
                                fullWidth 
                                name='authorEdit' 
                                value={bookEdit.authorEdit}
                                onChange={handleChangeEdit}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.gridmb}>
                            <Button 
                                variant='contained'
                                fullWidth
                                color='primary'
                                type='submit'
                                onClick={()=>editBook(bookEdit)}
                                className={classes.gridmb}
                                >
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
        </Dialog>

    </Container>
  )
}
