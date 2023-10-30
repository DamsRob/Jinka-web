import { createReducer, on } from "@ngrx/store";
import { RealEstateAdd, RealEstateAdds } from "src/app/models/real-estate-add.model";
import { setRealEstateAdd, setRealEstateAdds } from "../actions/realEstadeAdd.actions";


export const initialStateRealEstateAdds: RealEstateAdds = {
    realEstateAdds: [
        {  
            id: 1,
            offer:  'loan',
           type: 'appartment',
           pictures: [{ picture : 'assets/images/ImageAppartement1.jpg'}, 
                        {picture: 'assets/images/ImageAppartement1_2.jpg'},
                        {picture: 'assets/images/ImageAppartement1_3.jpg'}],
           price: 4200,
           localisation: 'Paris 5ème',
           surface: 110,
           rooms: 5,
           bedrooms: 3,
           transports: [{stationName: 'Jussieu', stationPicture: ['../../assets/images/Metro_10.png', '../../assets/images/Metro_7.png']},
           {stationName: 'Pont de Levallois-Becon', stationPicture: ['assets/images/Metro_3.png', 'assets/images/Metro_7.png']},
                        {stationName: 'Charles-De-Gaulle-étoile', stationPicture: ['assets/images/Metro_1.png', 'assets/images/Metro_2.png']}],
           description: "Exclusivité - Paris V - Appartement meublé. Rue Gay Lussac : au 1er étage avec ascenseur, un appartement meublé de 122m2 entièrement refait à neuf par architecte comprenant une entrée, une pièce de vie de 50m2 avec balconnet et cuisine ouverte, 3 chambres sur cour, une salle d'eau avec WC, une salle de bains avec WC ainsi qu'un WC séparé. Appartement en parfait état, traversant, calme et lumineux, bénéficiant de vues dégagées et d'une triple exposition. Disponible immédiatement. Zone soumise à encadrement des loyers /n Loyer de référence majoré (loyer de base à ne pas dépasser) : 4295€ /n Loyer de base : 4295€ par mois /n Complément de loyer: 204€ (équipement haut de gamme) /n Provision pour charges : 243€ /n Soit 4742€ charges comprises /n Dépôt de garantie: 8998€",
           furniture: false,
           infos: [{info: 'Baignoire', icon: '../../assets/icons/bath_shower.svg'}, {info: '1er étage', icon: '../../assets/icons/floor.svg'}],
        },
        {  
            id: 2,
            offer:  'loan',
           type: 'appartment',
           pictures: [{ picture : 'assets/images/ImageAppartement2.jpg'}, 
                        {picture: 'assets/images/ImageAppartement1_1.jpg'},
                        {picture: 'assets/images/ImageAppartement1_3.jpg'}],
           price: 4200,
           localisation: 'Paris 5ème',
           surface: 110,
           rooms: 5,
           bedrooms: 3,
           transports: [  
            {stationName: 'Pont de Levallois-Becon', stationPicture: ['assets/images/Metro_3.png', 'assets/images/Metro_7.png']},
            {stationName: 'Jussieu', stationPicture: ['../../assets/images/Metro_10.png', '../../assets/images/Metro_7.png']}],
           description: "Exclusivité - Paris V - Appartement meublé. Rue Gay Lussac : au 1er étage avec ascenseur, un appartement meublé de 122m2 entièrement refait à neuf par architecte comprenant une entrée, une pièce de vie de 50m2 avec balconnet et cuisine ouverte, 3 chambres sur cour, une salle d'eau avec WC, une salle de bains avec WC ainsi qu'un WC séparé. Appartement en parfait état, traversant, calme et lumineux, bénéficiant de vues dégagées et d'une triple exposition. Disponible immédiatement. Zone soumise à encadrement des loyers /n Loyer de référence majoré (loyer de base à ne pas dépasser) : 4295€ /n Loyer de base : 4295€ par mois /n Complément de loyer: 204€ (équipement haut de gamme) /n Provision pour charges : 243€ /n Soit 4742€ charges comprises /n Dépôt de garantie: 8998€",
           furniture: false,
           infos: [{info: 'Baignoire', icon: 'assets/icons/bath_shower.svg'}, {info: '1er étage', icon: 'assets/icons/floor.svg'}],
        },
        {  
            id: 3,
            offer:  'loan',
           type: 'appartment',
           pictures: [{ picture : 'assets/images/ImageAppartement1_3.jpg'}, 
                        {picture: 'assets/images/ImageAppartement1_2.jpg'},
                        {picture: 'assets/images/ImageAppartement1_1.jpg'}],
           price: 4200,
           localisation: 'Paris 5ème',
           surface: 110,
           rooms: 5,
           bedrooms: 3,
           transports: [{stationName: 'Jussieu', stationPicture: ['../../assets/images/Metro_10.png', '../../assets/images/Metro_7.png']}],
           description: "Exclusivité - Paris V - Appartement meublé. Rue Gay Lussac : au 1er étage avec ascenseur, un appartement meublé de 122m2 entièrement refait à neuf par architecte comprenant une entrée, une pièce de vie de 50m2 avec balconnet et cuisine ouverte, 3 chambres sur cour, une salle d'eau avec WC, une salle de bains avec WC ainsi qu'un WC séparé. Appartement en parfait état, traversant, calme et lumineux, bénéficiant de vues dégagées et d'une triple exposition. Disponible immédiatement. Zone soumise à encadrement des loyers /n Loyer de référence majoré (loyer de base à ne pas dépasser) : 4295€ /n Loyer de base : 4295€ par mois /n Complément de loyer: 204€ (équipement haut de gamme) /n Provision pour charges : 243€ /n Soit 4742€ charges comprises /n Dépôt de garantie: 8998€",
           furniture: false,
           infos: [{info: 'Baignoire', icon: '../../assets/icons/bath_shower.svg'}, {info: '1er étage', icon: '../../assets/icons/floor.svg'}],
        },
    ]
}

export const initialStateRealEstateAdd: RealEstateAdd = {
    id: undefined,
    offer: undefined,
    type: undefined,
    pictures: [],
    price: undefined,
    localisation: undefined,
    surface: undefined,
    rooms: undefined,
    bedrooms: undefined,
    transports: [],
    description: undefined,
    furniture: undefined,
    infos: []
}

export const realEstateAddsReducer = createReducer(
    initialStateRealEstateAdds,
    on(setRealEstateAdds, (state, {newRealEstateAdd})=>({...state, realEstateAdds: [...state.realEstateAdds, newRealEstateAdd]}))
)


export const realEstateAddReducer = createReducer(
    initialStateRealEstateAdd,
    on(setRealEstateAdd, (state, {realEstateAdd})=>{
        const newRealEstateAdds = {...state,
            id: realEstateAdd.id,
            offer: realEstateAdd.offer,
            type: realEstateAdd.type,
            pictures: realEstateAdd.pictures,
            price: realEstateAdd.price,
            localisation: realEstateAdd.localisation,
            surface: realEstateAdd.surface,
            rooms: realEstateAdd.rooms,
            bedrooms: realEstateAdd.bedrooms,
            transports: realEstateAdd.transports,
            description: realEstateAdd.description,
            furniture: realEstateAdd.furniture,
            infos: realEstateAdd.infos
        }
        localStorage.setItem('realEstateAddsState', JSON.stringify(newRealEstateAdds))
        return newRealEstateAdds
    })
)