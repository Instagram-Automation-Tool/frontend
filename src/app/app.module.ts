import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard, AuthInterceptor, AuthService } from "./services/auth/auth.service";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { authReducer } from "./state/auth/auth.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./state/auth/auth.effects";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({auth: authReducer}),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly:environment.production,
      autoPause:true
    }),
    EffectsModule.forRoot([AuthEffects])
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent, SignupComponent],
  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
