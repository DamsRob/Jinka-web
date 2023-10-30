import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RealEstateAdd } from 'src/app/models/real-estate-add.model';
import { User } from 'src/app/models/user.model';
import { RealEsateAddService } from 'src/app/services/real-estate-add.services';
import { selectUser } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit{

  listOfRealEstateAdd$!: Observable<RealEstateAdd[]>
  user$!: Observable<User>

  constructor(private realEstateAddService: RealEsateAddService, private store: Store){}

  ngOnInit(): void {
    this.listOfRealEstateAdd$ = this.realEstateAddService.getRealEstateAdd()
    this.user$ = this.store.select(selectUser)
  }


  ngStyle(isLike :boolean): Object {
    if(isLike){
      return {fill: '#ED1C24', stroke : '#ED1C24'}
    }
    else {
      return {fill: '#FFF', stroke : '#676B8B'}
    }
  }
  
  setLike(id: number): void{
    const idString = id.toString()
    // this.realEstateAddService.putALike(idString)
  }

  
  putToTrash(id: number): void {
    const idString = id.toString()
    // this.realEstateAddService.putToTrash(idString)
  }
}
