import { registerLocaleData } from '@angular/common';
import { literalMap } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRComponent } from './add-r/add-r.component';
import { AuthGuard } from './auth.guard';
import { DeleteRComponent } from './delete-r/delete-r.component';
import { ListRComponent } from './list-r/list-r.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRComponent } from './update-r/update-r.component';
import { ResultComponent } from './result/result.component';
import { AppComponent } from './app.component';
// import { RegisterSComponent } from './register-s/register-s.component';

const routes: Routes = [
  {
    path:'add',component:AddRComponent, canActivate:[AuthGuard]
  },{
    path:'list',component:ListRComponent,
    canActivate:[AuthGuard]
  },{
    path:'delete',component:DeleteRComponent, canActivate:[AuthGuard]
  },{
    path:'login',component:LoginComponent
  },{
    path:'register',component:RegisterComponent
  },{
    path:'update/:id',component:UpdateRComponent, canActivate:[AuthGuard]
  }
   ,
   {
    path:'result',component:ResultComponent
   }
   ,{
    path:'home',component:AppComponent,canActivate:[AuthGuard]
   }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
