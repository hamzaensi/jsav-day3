export function createBookElement(book, onDelete) {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => onDelete(book.id);

    li.appendChild(deleteButton);
    return li;
}
