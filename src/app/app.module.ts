import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/home.module';
import { MainModule } from './modules/main/main.module';
import { HeaderComponent } from './modules/Shared/header/header.component';
import { FooterComponent } from './modules/Shared/footer/footer.component';
import { SidenavComponent } from './modules/Shared/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsService } from './Services/book-details.service';
import { FileSizePipe } from './modules/Shared/pipes/fileSize.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule, 
    BrowserAnimationsModule,
    HomeModule,
    MainModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    BookDetailsService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
