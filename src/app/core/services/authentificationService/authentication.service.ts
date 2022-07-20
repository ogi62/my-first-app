import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
} from '@angular/fire/auth';
import { NgToastService } from 'ng-angular-popup';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth, private toast: NgToastService) {}

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password).then(
        (res) => {
          localStorage.setItem('user',res.user.uid)
          resolve(res);
        },
        (err) => {
          console.error(err.message);
          this.toast.error({
            detail: 'Login Failed',
            summary: err.message,
            duration: 5000,
          });
        }
      );
    });
  }

  logout(): Observable<any> {
    localStorage.clear();
    return from(this.auth.signOut());
  }
}
