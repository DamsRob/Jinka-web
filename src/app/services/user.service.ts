import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { Observable, find, map, of, switchMap } from "rxjs";
import { RealEstateAdd } from "../models/real-estate-add.model";
import { Case } from "../models/case.model";
import { Preferencie } from "../models/preferencie.model";


@Injectable({
    providedIn: 'root'
})

export class UserService implements OnInit {

    users$!: Observable<User[]>
    user$!: Observable<User | undefined>
    
    users: User[] = [
       { 
        id: 0,
        firstName: "Damien",
        lastName: "Robert",
        email: "drobert@gmail.com",
        password: "password",
        listOfRealEstateAdd: [{
            id:1, 
            offer:  'loan',
            type: 'appartment',
            pictures: [{ picture : 'https://www.travaux.com/images/cms/original/ebcd4d3c-6a00-47d2-8165-6d9e192082af.jpeg'}, 
                        {picture: 'https://edito.seloger.com/sites/default/files/styles/480x/public/edito_migrate/article/image/copropriete_appartement_rez-de-chaussee.jpg?itok=FXKSLDPH'},
                        {picture: 'https://media.architecturaldigest.com/photos/5eac5fa22105f13b72dede45/4:3/w_1420,h_1065,c_limit/111LexowAve_Aug18-1074.jpg'}],
            price: 4200,
            localisation: 'Paris 5ème',
            surface: 110,
            rooms: 5,
            bedrooms: 3,
            transports: [{stationName: 'Jussieu', stationPicture: ['../../assets/images/Metro_10.png', '../../assets/images/Metro_7.png']}],
            description: "Exclusivité - Paris V - Appartement meublé. Rue Gay Lussac : au 1er étage avec ascenseur, un appartement meublé de 122m2 entièrement refait à neuf par architecte comprenant une entrée, une pièce de vie de 50m2 avec balconnet et cuisine ouverte, 3 chambres sur cour, une salle d'eau avec WC, une salle de bains avec WC ainsi qu'un WC séparé. Appartement en parfait état, traversant, calme et lumineux, bénéficiant de vues dégagées et d'une triple exposition. Disponible immédiatement. Zone soumise à encadrement des loyers /n Loyer de référence majoré (loyer de base à ne pas dépasser) : 4295€ /n Loyer de base : 4295€ par mois /n Complément de loyer: 204€ (équipement haut de gamme) /n Provision pour charges : 243€ /n Soit 4742€ charges comprises /n Dépôt de garantie: 8998€",
            furniture: false,
            infos: [{info: 'Baignoire', icon: '../../assets/icons/bath_shower.svg'}, {info: '1er étage', icon: '../../assets/icons/floor.svg'}],
            }],
        listOfPreferencies: [{
            offer: 'loan',
            localisation: 'Paris',
            type: 'appartment',
            surfaceMin: 80,
            surfaceMax: 120,
            priceMin: 3000,
            priceMax: 5000,
            rooms: 4,
            bedroom: 3,
            furniture: false,
        }],
        listOfRealEstateAddInTrash: [],
        case:   {  
            firstName: "Damien",
            lastName: "Robert",
            email: "drobert@gmail.com",
            phone: "06 24 72 15 78",
            ic: "ID.pdf", //TROUVER LE TYPE POUR UN FICHIER PDF
            cdt: "cdt.pdf",
            fdp: "fdp.pdf",
            adi: "adi.pdf",
            poste: 'C.D.I',
            salary: 2200,
            company: "Solutec",
            help: 'None',
            helpMoney: 0,
            guarantor: true,
            guarantorSalary: 2000,
        }
    }
    ]

    ngOnInit(): void {
        this.users$ = of(this.users) 
    }

    getOneUser(id: number): Observable<User | undefined>{
        this.users$ = of(this.users)
        this.user$ = this.users$.pipe(
            map(value=>value.find(user=>user.id == id))
        )
        return this.user$
    }
    

    getUsers(): Observable<User[]>{
        this.users$ = of(this.users)
        return this.users$
    }

    // addUser(firstName: string, lastName: string, email: string, password: string): void{
    //     const newUser = this.getUsers().pipe(
    //         map(users=>[...users].sort((a,b)=>{
    //             if(a.id && b.id){
    //                 return a.id-b.id
    //             }})),
    //         map(sortedUsers =>sortedUsers[sortedUsers.length-1]),
    //         map(previousUser=>{if (previousUser.id) ({
    //             firstName: firstName,
    //             lastName: lastName,
    //             email: email,
    //             password: password,
    //             id: previousUser.id+1,
    //             listOfPreferencies: undefined ,
    //             listOfRealEstateAdd: undefined,
    //             case: undefined
    //         })})
    //     )
    //     //newUser.subscribe(value=>this.users.push(value))
    // }

    changeUserPreferencies( offer: string, localisation: string,type: string[],surfaceMin: number,surfaceMax: number,priceMin: number,priceMax: number,rooms: number[],bedroom: number[],furniture: boolean[]){
    }       
}