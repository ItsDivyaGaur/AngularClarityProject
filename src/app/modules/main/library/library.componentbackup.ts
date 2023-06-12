import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/Services/book-details.service';
import { booksDetails } from 'src/app/modules/Shared/models/booksDetails'
//import BookDetailsjson  from 'src/db.json/BookDetails.json';

// interface BOOKDETAILS {
//   id: number;
//   name: string;
//   author: string;
//   description: string;
//   releaseYear: number;
//   status: string;
//   ratings: number;
// }

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})

export class LibraryComponent implements OnInit { 
 constructor( private bookDetailsService : BookDetailsService ) { }
 //booksData: booksData[] = []
  ngOnInit(): void {
    this.bookDetailsService.getJSON().subscribe( data => {
      console.log(data);
    } );
  }
  //========================================================================
    // export class LibraryComponent {
    //   title = "Book Details";
    // bookDetails: BOOKDETAILS[] = BookDetailsjson;
  
    // constructor(){
    //   console.log(this.bookDetails);
    // }
  
}
