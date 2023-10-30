import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  user$!: Observable<User | undefined>
  user!: User
  firstNameFirstLetter!: string
  lastNameFirstLetter!: string
  modifyInfoList!: boolean[]
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.modifyInfoList = [false, false]
      this.user$ = this.userService.getOneUser(0);
      this.user$.subscribe(user=> {
        if(user){
          this.user = user
          if(this.user.firstName && this.user.lastName){
            this.firstNameFirstLetter = this.user.firstName[0]
            this.lastNameFirstLetter = this.user.lastName[0]
          }
         
        }
      })
  }

  ngStyle(id: number): Object {
    if(this.modifyInfoList[id]){
      return {border : "3px solid #ED1C24"}
    }
    else{
      return {border : "3px solid #676B8B"}
    }
  }

  modifyInfo(id: number){
    this.modifyInfoList[id] = !this.modifyInfoList[id]
  }
}
