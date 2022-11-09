import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/auth/auth.service";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  { path:'signup', component: SignupComponent},
  { path:'login',component: LoginComponent },

  {
    path: "",
    component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: "",
    component: AuthLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
