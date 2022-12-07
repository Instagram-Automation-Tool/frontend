import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(private authService: AuthService, private router: Router){ }

  ngOnInit() {
  }

  signup(username: string, email: string, password1: string, password2: string,fullName:string) {
    const user: User = {
      username: username,
      email: email,
      password: password1,
      full_name: fullName
    }


    this.authService.signUp(user).subscribe(
      {
        next: ()=> this.router.navigate(['dashboard']),
        error: (error)=>  
          {
            console.log(error)
            this.error = error
          }
      }
    )
  }

  loginRedirect(){
    this.router.navigate(['login'])
  }
}
