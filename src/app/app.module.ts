import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment as env } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    HomeContentComponent,
    LoadingComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    MainNavComponent,
    NavBarComponent,
    SignupButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        allowedList: [`${env.dev.serverUrl}/api/messages/protected-message`]
      }
    }),
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
