import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/Services/book-details.service';
import { booksDetails } from 'src/app/modules/Shared/models/booksDetails'

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.scss']
})
export class MyLibraryComponent implements OnInit {
  constructor( private bookDetailsService : BookDetailsService ) { }

  columns =["book id","book name","author name","description","release Year","status","ratings"];
  index =["id","name","author","description","releaseYear","status","ratings"]
 
  booksData: booksDetails[] = [];
   ngOnInit(): void {
     this.bookDetailsService.getJSON().subscribe( data => {
       this.booksData = data;
     },
     (error) => console.log(error)
      );
   }  
}
