export class booksDetails{
    
    id:number;
    name:string;
    author: string;
    description: string;
    releaseYear: number;
    status: string;
    ratings: number;
        
    constructor(id,name,author,description,releaseYear,status,ratings)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.description = description;
        this.releaseYear = releaseYear;
        this.status = status;
        this.ratings = ratings;
    }
           
}