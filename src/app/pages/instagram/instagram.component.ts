import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { InstagramService } from "src/app/services/instagram/instagram.service";
import * as fromAuth from '../../state/auth/auth.reducer'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-instagram",
  templateUrl: "instagram.component.html"
})
export class InstagramComponent implements OnInit {
  
  user$ = this.store.select(fromAuth.selectUser)
  accounts$ =this.igService.getAccounts()
  defaultIgProfile = 'expandio1234'
  constructor(private store: Store<fromAuth.State>, private igService: InstagramService,private toastr:ToastrService) {}

  onCheckChange(profile:string){
    this.defaultIgProfile=profile
  }

  loginIG(username: string, password: string){
    this.igService.loginIG(username,password).subscribe(
      {
        next: ()=> {
          this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Instagram Authentication successfully!', '', {
            disableTimeOut: true,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success",
            positionClass: 'toast-' + 'bottom' + '-' +  'right'
          });
          setTimeout(()=> {
            window.location.reload()
          },1200)
        },
        error: (error)=>  {
          console.log(error)

          }
      }
    )
  }

  likePost(link:string){
   
    this.igService.likeProfile(link).subscribe(
      {
        next:(data)=> { 
          this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Liked successfully!', '', {
            disableTimeOut: true,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success",
            positionClass: 'toast-' + 'bottom' + '-' +  'right'
          });
        },
        error:(error)=> console.log( error)
      }
    )
  }

  followProfile(username: string){
    this.igService.followProfile(username).subscribe(
        {
            next:()=> {
              this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Followed successfully!', '', {
                disableTimeOut: true,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-success",
                positionClass: 'toast-' + 'bottom' + '-' +  'right'
              });
            },
            error:(error)=> {
                console.log(error)
            }
        }
    )
  }

  scrapeFollowers(username:string,amount:number){
    this.igService.scrapeFollowers(username,amount).subscribe({
      next:(data)=> {
        console.log(data),
        this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Scraped successfully!', '', {
          disableTimeOut: true,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success",
          positionClass: 'toast-' + 'bottom' + '-' +  'right'
        });
      },
        error:(error)=> {
        console.log(error)
      }
    })
  }

  commentLikesProfile(target:string,comments:string,count:number){
    this.igService.commentOnProfilePosts(target,comments,count).subscribe({
      next:(data)=> console.log(data),
      error:(error)=> console.log(error)
    })
  }


  ngOnInit() {}
}
