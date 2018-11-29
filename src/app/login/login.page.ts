import { Component, AfterContentInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { AuthGuardService } from '../auth-guard.service'
import { AmplifyService }  from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage { 

  authState: any;

  constructor(
    public events: Events,
    public authService: AuthGuardService,
    public amplifyService: AmplifyService,
    public router: Router
  ) {
    this.authState = { signedIn: false };

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.authState.signedIn = authState.state === 'signedIn';
        this.events.publish('data:AuthState', this.authState);
      });
    }

    showDecks() {
      this.router.navigate(['/home']);
    }
}
