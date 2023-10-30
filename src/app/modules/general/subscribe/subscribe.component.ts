import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { User, Users } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { logUser, subscribeUser } from 'src/app/store/actions/user.actions';
import { selectUsersState , selectUserState} from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit{


  users$!: Observable<Users>
  user$!: Observable<User>
  lastId!: number
  
  subscribeForm = {
    firstName: null,
    lastName: null,
    email: null, 
    password: null,
    confirmPassword: null
  }

  isChecked!: boolean

  constructor(private users: UserService, private router: Router, private store: Store){}

  ngOnInit(): void {
    this.users$ = this.store.select(selectUsersState)
    this.user$ = this.store.select(selectUserState)

    this.users$.pipe(
      map((users)=>{this.lastId = users.users.length})
    ).subscribe()
  }


  onSubmitForm(){
    if(this.subscribeForm.firstName && this.subscribeForm.lastName && this.subscribeForm.email && this.subscribeForm.password ){
      
      const newUser: User = {
        id: this.lastId,
        firstName: this.subscribeForm.firstName,
        lastName: this.subscribeForm.lastName,
        email: this.subscribeForm.email,
        password: this.subscribeForm.password,
        listOfRealEstateAdd: [],
        listOfRealEstateAddInTrash: [],
        listOfPreferencies: [],
        case: undefined
      }

      this.store.dispatch(subscribeUser({newUser}))
      this.logUser(newUser)
      this.router.navigateByUrl("/home")
    }
  }

  logUser(user: User){
    this.store.dispatch(logUser({user}))
  }

}
