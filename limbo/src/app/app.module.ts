import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { SigninComponent } from './components/signin/signin.component';
import { SearchComponent } from './components/shared/search/search.component';
import { MessageComponent } from './components/shared/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SigninComponent,
    SearchComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
