import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/account/login/login.component'
import { SingComponent } from './features/account/sing/sing.component';
import { ForgotCompoent } from './features/account/forgot/forgot.component';
import { CheckComponent } from './features/account/check/check.component';

export const routes: Routes = [
    {path: '', component:  LoginComponent},
    {path: 'Sing', component:  SingComponent},
    {path: 'Forgot', component:  ForgotCompoent},
    {path: 'Check', component:  CheckComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}