import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Preferencie } from 'src/app/models/preferencie.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  user$!: Observable<User | undefined>
  user!: User
  listOfPreferencies!: Preferencie[]
  offer!: 'loan' | 'buy'
  data !: Preferencie


  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.user$ = this.userService.getOneUser(0)
    this.user$.subscribe(user => {
      if(user){
        if(user.listOfPreferencies){
          this.listOfPreferencies = user.listOfPreferencies
        }
      }
    })
    this.listOfPreferencies.map(data=>{
      this.data = data
    })
  }

}
