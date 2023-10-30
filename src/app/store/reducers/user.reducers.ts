import { createReducer, on } from "@ngrx/store";
import { addLike, logUser, putToTrash, removeLike, subscribeUser } from "../actions/user.actions";
import { User, Users } from "src/app/models/user.model";


const storedState = JSON.parse(localStorage.getItem('userState') || '{}')


    const initialStateUser : User = storedState ||{
        id : undefined,
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        password: undefined,
        listOfRealEstateAdd: [],
        listOfRealEstateAddInTrash: [],
        listOfPreferencies: [],
        case: undefined
    }




export const initialStateUsers: Users = {
    users: [
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
            listOfRealEstateAddInTrash : [],
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
}



export const usersReducer = createReducer(
    initialStateUsers,
    on(subscribeUser, (state, {newUser})=>({...state, users:[...state.users, newUser]})),
)

export const userReducer = createReducer(
    initialStateUser,
    on(logUser, (state, {user})=>{
    const newState = { ...state, 
        id: user.id, 
        firstName: user.firstName, 
        lastName: user.lastName, 
        email: user.email, 
        password: user.password,
        listOfRealEstateAdd: user.listOfRealEstateAdd,
        listOfRealEstateAddInTrash: user.listOfRealEstateAddInTrash,
        listOfPreferencies: user.listOfPreferencies }
    localStorage.setItem('userState', JSON.stringify(newState))
    return newState
    }),
    on(addLike, (state, {realEstateAdd})=>{
        const newState = {
            ...state,
            listOfRealEstateAdd: [...state.listOfRealEstateAdd, realEstateAdd]
        }
        localStorage.setItem('userState', JSON.stringify(newState))
        return newState
    }),
    on(removeLike, (state, {realEstateAdd})=>{
        const newState = {...state, listOfRealEstateAdd: state.listOfRealEstateAdd.filter(item=>(item.id !== realEstateAdd.id))}
        localStorage.setItem('userState', JSON.stringify(newState))
        return newState
    })
)
