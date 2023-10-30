import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { User, Users } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.services';
import { logUser } from 'src/app/store/actions/user.actions';
import { selectUserState, selectUsersState } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  users$!: Observable<Users>
  user$!: Observable<User>
  user!: User


  loginForm = {
    email:null,
    password: null
  }

  connectionOK!: 'NoUser' | 'WrongInfos' | 'OK'
  error!: "L'utilisateur n'existe pas" | "Le mail ou le mot de passe est incorrect"
  

  constructor(private login:LoginService, private router: Router, private store: Store){}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUserState)
    this.users$ = this.store.select(selectUsersState)
    this.users$.subscribe(value=>console.log(value))
  }


  errorConnection(connectionOK: string){
    if(connectionOK == 'NoUser'){
      this.error = "L'utilisateur n'existe pas"
    }
    else {
      this.error = "Le mail ou le mot de passe est incorrect"
    }
  }

  onLogin(){
    if(this.loginForm.email && this.loginForm.password){
      this.users$.pipe(
        map(users=>users.users.map(user=>{
          if(user.email == this.loginForm.email){
            this.user = user 
          }
        }))).subscribe()

        if(!!this.user.password){
          this.connectionOK = this.checkLogin(this.user.password)
        }
        else{
          this.connectionOK = 'NoUser'
        }
        if(this.connectionOK != "OK"){
          this.errorConnection(this.connectionOK)
        }
        else{
          this.logUser(this.user)
          this.router.navigateByUrl('/home')
        }
      }
  }

  checkLogin(password: string): 'WrongInfos' | 'OK'{
    if(password == this.loginForm.password){
        return 'OK';
    }
    else {
      return 'WrongInfos';
    }    
  }

  logUser(user: User){
    this.store.dispatch(logUser({user}))
  }
}
  
