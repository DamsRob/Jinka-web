import { Injectable } from "@angular/core";
import { Case } from "../models/case.model";


@Injectable({
    providedIn: 'root'
})

export class CaseService {


    case: Case = 
       {  
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