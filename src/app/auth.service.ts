import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()

export class Auth{
  // configure Auth0

  lock = new Auth0Lock('nKUSz9plHr0JaCyNB0RUweNAZrljpF5D','mzs.au.auth0.com', {});

  constructor(){
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
        if (error){
          throw new Error(error);
        }
        // Set Profile
        localStorage.setItem('profile', JSON.stringify(profile));

        // Set Token
        localStorage.setItem('id_token', authResult.idToken);

      })

    });
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };


  public logout() {
    // Remove info from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');

  }

}


