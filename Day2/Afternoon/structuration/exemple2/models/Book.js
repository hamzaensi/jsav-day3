export class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.id = Date.now(); // Identifiant unique basé sur le timestamp
    }
}
