import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { HomeBodyComponent } from './home/home-body/home-body.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ThankyouBodyComponent } from './thankyou/thankyou-body/thankyou-body.component';
import { ThankyouHeaderComponent } from './thankyou/thankyou-header/thankyou-header.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // BodyComponent,
    HomeComponent,
    HomeBodyComponent,
    HomeHeaderComponent,
    ThankyouComponent,
    ThankyouBodyComponent,
    ThankyouHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'home', component: HomeComponent},
      { path:'thankyou', component: ThankyouComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
