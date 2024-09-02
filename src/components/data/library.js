
let library = Array();

library.push({
    id: 1,
    category: 'Programacion',
    title: 'Clean Code',
    author: 'Robert C. Martin',
});

library.push({
    id: 2,
    category: 'Programacion',
    title: 'Programando con C#',
    author: 'Elmer L. Marquez',
});

let id = 2;

export function addBook(book){
    id++;
    let bookJson = book;
    bookJson.id = id;
    library.push(bookJson);
}

export function getAllBooks(){
    return library;
}

export function getBookById(id){
    return library.find(book=>book.id===id);
}

export function deleteBookById(id){
    library = library.filter(book=>{
        return book.id !== id;
    });
    return getAllBooks();
}

export function updateBook(bookEdit){
    let index = library.findIndex(book=>book.id=== bookEdit.idEdit);
    if(index === -1){
        return false;
    }

    let updatedBook = {
        id: bookEdit.idEdit,
        category: bookEdit.categoryEdit,
        title: bookEdit.titleEdit,
        author: bookEdit.authorEdit
    }

    library[index] = updatedBook;

    return true;
}

export function getBooksByCategory(category){
    return library.filter(book=>book.category===category);
}

