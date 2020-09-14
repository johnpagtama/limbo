import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { SigninComponent } from './components/signin/signin.component';
import { SearchComponent } from './components/shared/search/search.component';
import { MessageComponent } from './components/shared/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { MainHeaderComponent } from './components/shared/main-header/main-header.component';
import { MainFooterComponent } from './components/shared/main-footer/main-footer.component';
import { ButtonComponent } from './components/shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SigninComponent,
    SearchComponent,
    MessageComponent,
    HomeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
