import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/Services/book-details.service';
import { booksDetails } from 'src/app/modules/Shared/models/booksDetails'
//import BookDetailsjson  from 'src/db.json/BookDetails.json';
import { Pipe } from '@angular/core';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})

export class LibraryComponent implements OnInit { 
 constructor( private bookDetailsService : BookDetailsService ) { }

 columns =["book id","book name","author name","description","release Year","status","ratings"];
 index =["id","name","author","description","releaseYear","status","ratings"]

 booksData: booksDetails[] = [];
  ngOnInit(): void {
    this.bookDetailsService.getJSON().subscribe( data => {
      this.booksData = data;
      //console.log(data);
    },
    (error) => console.log(error)
     );
  }  
}
