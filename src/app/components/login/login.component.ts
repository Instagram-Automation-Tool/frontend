import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(username: string, password: string){
    this.authService.login(username,password).subscribe(
      {
        next: ()=> this.router.navigate(['dashboard']),
        error: (error)=>  {console.log(error)
          this.error = error}
      }
    )
  }
  
  signup(){
    this.router.navigate(['signup'])
  }

}
