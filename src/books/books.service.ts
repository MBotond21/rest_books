import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { title } from 'process';

@Injectable()
export class BooksService {
  #books = [
    {
      id: 1,
      title: "I like Milk",
      author: "Valaki",
      isbn: "234141safas",
      publishYear: 2013,
      reserved: true
    },
    {
      id: 2,
      title: "I like Trains",
      author: "József",
      isbn: "5235523dfsew",
      publishYear: 2011,
      reserved: false
    }
  ];
  nextId = this.#books.length+1;

  create(createBookDto: CreateBookDto) {
    let newBook = {
      id: this.nextId,
      title: createBookDto.title,
      author: createBookDto.author,
      isbn: createBookDto.isbn,
      publishYear: createBookDto.publishYear,
      reserved: false
    }
    this.#books.push(newBook);
    this.nextId = this.nextId+1;
    return 'New book added';
  }

  findAll() {
    return this.#books;
  }

  findOne(id: number) {
    return this.#books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    let book = this.findOne(id);
    Object.assign(book, updateBookDto);
    return book;
  }

  remove(id: number) {
    this.#books.splice(this.#books.indexOf(this.#books.find((book) => book.id === id)), 1)
    return `Book #${id} was deleted successfully`;
  }
}
