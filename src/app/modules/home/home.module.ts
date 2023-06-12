import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { UsersListComponent } from './users/users-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    MyLibraryComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
