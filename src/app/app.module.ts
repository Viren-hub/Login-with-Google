import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { GoogleImgComponent } from './Components/google-img/google-img.component';
import {LoginAuthService} from './Services/login-auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleImgComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [LoginAuthService,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '75750261722-a21iqu565ngneq07mpga3adcgu0a00nj.apps.googleusercontent.com'
          )
        }
      ],
      onError: () => {
        console.error();
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
