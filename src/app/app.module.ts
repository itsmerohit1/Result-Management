import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRComponent } from './add-r/add-r.component';
import { UpdateRComponent } from './update-r/update-r.component';
import { ListRComponent } from './list-r/list-r.component';
import { DeleteRComponent } from './delete-r/delete-r.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
 
import { ResultComponent } from './result/result.component';
// import { RegisterSComponent } from './register-s/register-s.component';
@NgModule({
  declarations: [
    AppComponent,
    AddRComponent,
    UpdateRComponent,
    ListRComponent,
    DeleteRComponent,
    LoginComponent,
    RegisterComponent,
    ResultComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
