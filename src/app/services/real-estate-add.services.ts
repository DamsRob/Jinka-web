import { Injectable } from "@angular/core";
import { RealEstateAdd } from "../models/real-estate-add.model";
import { Observable, find, map, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class RealEsateAddService {


    realEstateAdd$!: Observable<RealEstateAdd[]>
    oneRealEstateAdd$!: Observable<RealEstateAdd | undefined>

    realEstateAdds: RealEstateAdd[] = [
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

    getRealEstateAdd(): Observable<RealEstateAdd[]>{
        this.realEstateAdd$ = of(this.realEstateAdds)
        return this.realEstateAdd$
    }

    getOneRealEstateAdd(id: string) :Observable<RealEstateAdd | undefined>{
       
        const idNumber = parseInt(id)
       this.realEstateAdd$ = of(this.realEstateAdds)
       this.oneRealEstateAdd$ =  this.realEstateAdd$.pipe(
        map(value=>value.find(realEstateAdd=>realEstateAdd.id == idNumber))
       )
       return this.oneRealEstateAdd$
    }

    // putALike(id: string){
    //    this.getOneRealEstateAdd(id).subscribe(value =>{
    //         if(value) { 
    //             if(!value.like){
    //                 value.like = true
    //             }
    //             else{
    //                 value.like =false
    //             }
    //         }
    //     })

    // }

    // putToTrash(id :string){
    //     this.getOneRealEstateAdd(id).subscribe(value=>{
    //         if(value){
    //             if(!value.hated){
    //                 value.hated = true
    //             }
    //         }
    //     })
    // }
}