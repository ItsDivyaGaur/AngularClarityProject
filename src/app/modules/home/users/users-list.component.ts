import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../Shared/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit { 
Users: any = [];
id = this.actRoute.snapshot.params['id'];
userObject: any = {};

@Input() userObj = { firstName: '',  lastName: '', email: '', gender: '', userType: '' }
  constructor(public crudservice: CrudService,
    public router: Router,
    public actRoute: ActivatedRoute
    ) { }
  ngOnInit() {
    this.fetchUsers();
    this.crudservice.getSingleUser(this.id).subscribe((res: {}) => {
      this.userObject = res;
    });
  }
  fetchUsers(){
    return this.crudservice.getUsers().subscribe((res: {}) => {
      this.Users = res;
    });
  }
  delete(id: any){
    if (window.confirm('Are you sure, You want to delete this record?')){
      this.crudservice.deleteUser(id).subscribe((res) =>{
        this.fetchUsers();
      });
    }
  }
  addUser(data: any) {
    this.crudservice.addUser(this.userObj).subscribe((data:{}) =>{
      this.router.navigate(['/users'])
    })     
  }
  updateUser(id:any, data:any){
    if(window.confirm('Are you sure, You want to update this record?')){
      this.crudservice.updateUser(this.id, data).subscribe((res) => {
        console.log('update user Data:', res.firstName, res.lastName )
        this.router.navigate(['./users']);
      });
    }
  }
}
