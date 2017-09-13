import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// BOOTSTRAP
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// MODALS
import { NgbdModalBasic } from './pages/modal-basic/modal-basic';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NgbdModalBasic
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }