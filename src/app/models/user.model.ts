import { RealEstateAdd } from "./real-estate-add.model";
import { Case } from "./case.model";
import { Preferencie } from "./preferencie.model";

export class Users{
    users!: User[]
}

export class User {
    id!: number | undefined;
    firstName!: string | undefined;
    lastName!: string | undefined;
    email!: string | undefined;
    password!: string | undefined;
    listOfRealEstateAdd!: RealEstateAdd[] | []
    listOfRealEstateAddInTrash!: RealEstateAdd[] | []
    listOfPreferencies!: Preferencie[]  | []
    case!: Case | undefined
}

export class Test {
    id!: number
    name!: string
    firstname!: string
}