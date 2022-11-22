import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  user: any;
  loggedIn: any;
   constructor(private authService: SocialAuthService) { }

   ngOnInit() {
     this.authService.authState.subscribe((user) => {
       this.user = user;
       this.loggedIn = (user != null);
       console.log(this.user)
     });
   }


}
