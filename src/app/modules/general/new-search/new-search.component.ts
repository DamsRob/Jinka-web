import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-search',
  templateUrl: './new-search.component.html',
  styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent implements OnInit{

  choiceOffer!: 'buy' | 'loan'


  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.choiceOffer = 'buy'
  }

  searchForm = {
    offer: 'buy',
    localisation: '',
    type: ['Maison'],
    surfaceMin: 0,
    surfaceMax: 10000,
    priceMin: 0,
    priceMax: 500000000,
    rooms: [0],
    bedRooms: [0],
    furniture : [false, false]
  }

  changeChoice(typeChoice: string){
    const choice = this.searchForm.type.find(type=>type == typeChoice)
    if(!!choice){
      const index = this.searchForm.type.indexOf(typeChoice)
      this.searchForm.type.splice(index, 1)
    }
    else{
      this.searchForm.type.push(typeChoice)
    }
  }

  styleButton(offer: 'buy' | 'loan'): Object{
    if(this.choiceOffer == offer){
      return {background: '#F5A6E4'}
    }
    else {
      return {background: 'linear-gradient(0deg, rgba(249, 249, 249, 0.65) 0%, rgba(249, 249, 249, 0.65) 100%), #F5A6E4'}
    }
  }

  styleButtonType(typeChoice: string): Object{
   
      if(!!this.searchForm.type.find(type=>type == typeChoice)){
        return {background: '#F5A6E4', border: '3px solid #F5A6E4', color: '#FFF' }
      }
      else{
        return {background: '#FFF', border: '3px solid #676B8B', color: '#676B8B' }
      }
    
     
  }

  styleButtonRooms(rooms: number): Object{
    if(this.searchForm.rooms.find(type=>type == rooms) != undefined){
      return {background: '#F5A6E4', border: '3px solid #F5A6E4', color: '#FFF' }
    }
    else{
      return {background: '#FFF', border: '3px solid #676B8B', color: '#676B8B' }
    }
  }

  styeButtonBedRooms(bedRooms: number): Object {
    if(this.searchForm.bedRooms.find(type=>type == bedRooms) != undefined){
      return {background: '#F5A6E4', border: '3px solid #F5A6E4', color: '#FFF' }
    }
    else{
      return {background: '#FFF', border: '3px solid #676B8B', color: '#676B8B' }
    }
  }

  changeRooms(nbr: number){
    const choice = this.searchForm.rooms.find(type=>type == nbr)
    if(choice != undefined){
      const index = this.searchForm.rooms.indexOf(nbr)
      this.searchForm.rooms.splice(index, 1)
    }
    else{
      this.searchForm.rooms.push(nbr)
    }
  }

  changeBedRooms(nbr: number){
    const choice = this.searchForm.bedRooms.find(type=>type == nbr)
    if(choice != undefined){
      const index = this.searchForm.bedRooms.indexOf(nbr)
      this.searchForm.bedRooms.splice(index, 1)
    }
    else{
      this.searchForm.bedRooms.push(nbr)
    }
  }

  changeOffer(offer: 'buy' | 'loan') {
    if(offer == 'buy'){
      this.choiceOffer = 'buy'
    }
    else{
      this.choiceOffer = 'loan'
    }
  }

  changeFurnishedChoice(furnished: number){
    this.searchForm.furniture[furnished] = !this.searchForm.furniture[furnished]
  }

  styleButtonFurnished(furnished: number): Object{
    if(this.searchForm.furniture[furnished]){
      return {background: '#F5A6E4', border: '3px solid #F5A6E4', color:'#FFF'}
    }
    else{
      return {background: '#FFF', border: '3px solid #676B8B', color: '#676B8B'}
    }
  }

  allItemsNotEmpty(): boolean{
    return this.searchForm.localisation != null && this.searchForm.localisation != ''
  }

  onNewSearch(){
    this.userService.changeUserPreferencies(this.searchForm.offer, this.searchForm.localisation, this.searchForm.type, this.searchForm.surfaceMin, this.searchForm.surfaceMax, this.searchForm.priceMin, this.searchForm.priceMax, this.searchForm.rooms, this.searchForm.bedRooms, this.searchForm.furniture)
  }
}
