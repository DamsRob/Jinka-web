import { Observable, map } from "rxjs";
import { User, Users } from "../models/user.model";
import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit{
    emails!: string[];
    password!: string;
    
    users$!: Observable<Users>
    user!: User
    constructor(){}

    ngOnInit(): void {
        
    }

    // login(emailForm: string, passwordForm: string): {
    //     this.users$.pipe(
    //     map(users=>users.users.map(user=>{if(user.email == emailForm)
    //         this.user = user
    //     }))
    //    )
    //     if(!!this.user){
    //         if(this.user.password == passwordForm){
    //             return 'OK';
    //         }
    //         else {
    //             return 'WrongInfos';
    //         }    
    //     }
    //     else {
    //         return 'NoUser';
    //     }
       
    // }
}