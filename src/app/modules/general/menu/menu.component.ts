import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  allMenus!: Menu[]
  page!: string

  constructor(private router: Router){}

  ngOnInit(): void {
      this.allMenus = [{
        iconName: 'assets/icons/hart.svg',
        link: "/favourites",
        title: "favoris"
      },
      {
        iconName: 'assets/icons/menu.svg',
        link: "/search",
        title: "mes critères"
      },
      {
        iconName: 'assets/icons/buildings.svg',
        link: "/home",
        title: "les annonces"
      },
      {
        iconName: 'assets/icons/account.svg',
        link: "/account",
        title: "mon comtpe"
      },
      {
        iconName: 'assets/icons/documents.svg',
        link: "/my-case",
        title: "mon dossier"
      },{
        iconName: 'assets/icons/conversation.svg',
        link: "/conversation",
        title: "conversation"
      },
      {
        iconName: 'assets/icons/map.svg',
        link: "/map",
        title: "la carte"
      },
    ]

   this.page = this.router.url
  }
}
