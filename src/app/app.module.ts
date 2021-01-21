import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TodosModule} from './todos/todos.module';
import {TodosService} from './todos/todos.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodosModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
