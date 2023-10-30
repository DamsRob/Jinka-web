import { Component, OnInit } from '@angular/core';
import { RealEsateAddService } from '../../../services/real-estate-add.services'
import { Observable, map } from 'rxjs';
import { RealEstateAdd, RealEstateAdds } from 'src/app/models/real-estate-add.model';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { selectUserState } from 'src/app/store/selectors/user.selectors';
import { selectRealEstateAddsState } from 'src/app/store/selectors/realEstadeAdd.selectors';
import { addLike, removeLike } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  listOfRealEstateAdds$!: Observable<RealEstateAdds>
  listOfRealEstateAdd!:RealEstateAdd[]
  user!: User
  realEstateAddIsLike!: RealEstateAdd | undefined
  realEstateAdd!: RealEstateAdd | undefined
  user2!: User

  constructor(private realEstateAddService: RealEsateAddService, private store: Store){}

  ngOnInit(): void {
    this.listOfRealEstateAdds$ = this.store.select(selectRealEstateAddsState)
    this.listOfRealEstateAdds$.pipe(
       map(realEstateAdd=>{ this.listOfRealEstateAdd = realEstateAdd.realEstateAdds})
    ).subscribe()

    const storedUserState = localStorage.getItem('userState')
    if(storedUserState){
      this.user2 = JSON.parse(storedUserState)
      this.user = JSON.parse(storedUserState)
      console.log('au début', this.user)
    }
  }

  ngStyle(id: number | undefined): Object {
    this.realEstateAddIsLike = this.user.listOfRealEstateAdd.find(realEstateAdd=> realEstateAdd.id == id)
    if(!!this.realEstateAddIsLike){
      return {fill: "#ED1C24", stroke:"#ED1C24"}
    }
    else{
      return {fill:"white", stroke:"#676B8B" }
    }
  }

  setLike(realEstadeAddSelected: RealEstateAdd): void{
      this.listOfRealEstateAdds$.pipe(
        map(realEstateAdds=> this.realEstateAdd = this.user.listOfRealEstateAdd.find(realEstateAdd=> realEstateAdd.id == realEstadeAddSelected.id))
      ).subscribe()
      if(!!this.realEstateAdd){
        console.log('je suis ici')
        this.removeALike(this.realEstateAdd)
      }
      else{
        console.log('je suis là')
        this.putALike(realEstadeAddSelected)
      }
      const storedUserState = localStorage.getItem('userState')
      if(storedUserState){
        this.user = JSON.parse(storedUserState)
        console.log(this.user)
      }
  }

  putALike(realEstateAdd: RealEstateAdd){
    this.store.dispatch(addLike({realEstateAdd}))
  }

  removeALike(realEstateAdd: RealEstateAdd){
    this.store.dispatch(removeLike({realEstateAdd}))
  }

  putToTrash(id: number | undefined): void {
    if(!!id){
      this.listOfRealEstateAdds$.pipe(
        map(realEstateAdds=> this.realEstateAdd = realEstateAdds.realEstateAdds.find(realEstateAdd=> realEstateAdd.id == id))
      )
    }
  }

  isNotInTrash(realEstadeAdd: RealEstateAdd){
    console.log('j euis suuc')
  }
}
