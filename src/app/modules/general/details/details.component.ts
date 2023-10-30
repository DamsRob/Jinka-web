import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RealEstateAdd } from 'src/app/models/real-estate-add.model';
import { RealEsateAddService } from 'src/app/services/real-estate-add.services';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  detailRealEstate$!: Observable<RealEstateAdd | undefined>;
  id!: string;
  isLike!: boolean;
  type!: 'house' | 'appartment' | 'parking';
  detailTest!: RealEstateAdd

  constructor(private route:ActivatedRoute, private realEstadeAddService : RealEsateAddService, private router: Router, private dialog: MatDialog){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.detailRealEstate$ = this.realEstadeAddService.getOneRealEstateAdd(this.id)
    this.detailTest = this.detailTest
    // this.detailRealEstate$.subscribe(value=>{
    //   if(value){
    //     this.isLike = value.like
    //     this.type = value.type
    //  }
    // })
  }

  ngStyle(isLike: boolean): Object {
    if(isLike){
      return {fill: '#ED1C24', stroke : '#ED1C24'}
    }
    else {
      return {fill: '#FFF', stroke : '#676B8B'}
    }
  }

  realEstateType(): string{
    switch (this.type){
      case 'house': 
        return 'Maison';
      case 'appartment':
        return 'Appartement';
      case 'parking':
        return 'Parking'
    }
  }

  setLike(id: number): void{
    const idString = id.toString()
    // this.realEstadeAddService.putALike(idString)
  }

  
  putToTrash(id: number): void {
    const idString = id.toString()
    // this.realEstadeAddService.putToTrash(idString)
    this.router.navigateByUrl('/home')
  }

  shareClick(){
    const url = this.router.url
    this.dialog.open(PopUpComponent)
  }
}
