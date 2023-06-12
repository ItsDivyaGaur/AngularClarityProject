import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersListComponent } from './users/users-list.component';
const routes: Routes = [
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'my-library',
    component: MyLibraryComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/5',
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
