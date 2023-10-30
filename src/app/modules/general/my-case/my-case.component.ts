import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Case } from 'src/app/models/case.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-case',
  templateUrl: './my-case.component.html',
  styleUrls: ['./my-case.component.css']
})
export class MyCaseComponent {

  user$!: Observable<User | undefined>
  user!: User
  case!: Case
  phone!: string
  modifyInfos!: boolean[]
  buttonType!: string
  submitType!: string
  jobList!: string[]
  helpList!: string[]
  guarantorList!: string[]
  job!: "C.D.I" | "C.D.D" | "Student" | "Jobless"
  help!: "CAF" | "RSA" | "Handicap"
  guarantor!: "Oui" | "Non"

  constructor(private userService: UserService){}

  ngOnInit(): void {

    this.jobList= ['C.D.I', 'C.D.D', "Student", "Jobless"]
    this.helpList = ['CAF', 'RSA', 'Handicap', "None"]
    this.guarantorList = ['Oui', 'Non']
    this.buttonType = "button"
    this.submitType = "submit"
      this.modifyInfos = [false, false, false, false]
      this.user$ = this.userService.getOneUser(0)
      if(this.user$){
      this.user$.subscribe(value=>{
        if(value){
          this.user = value
          value.case ? this.case = value.case : '' 
        }
        this.phone = this.case.phone
        this.guarantor = this.case.guarantor ? 'Oui' : 'Non'
        this.job = this.case.poste
      })}
  }

  onClick(idBlock: number): boolean{
    this.modifyInfos[idBlock] = !this.modifyInfos[idBlock]
    return this.modifyInfos[idBlock]
  }


}
