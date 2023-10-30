export class Case {
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    ic!: string; //TROUVER LE TYPE POUR UN FICHIER PDF
    cdt!: string;
    fdp!: string;
    adi!: string;
    poste!: 'C.D.I' | 'C.D.D' | 'Student' | 'Jobless';
    salary!: number;
    company!: string;
    help!: 'CAF' | 'RSA' | 'Handicap' | 'None';
    helpMoney!: number;
    guarantor!: boolean;
    guarantorSalary!: number;
}