import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {

// propriétés
  

  public player: TennisPlayer = {
    id: 1,
    name:'Sampras',
    firstName: 'Pete'
  };
  
  // constructeurs et initialiseurs
  constructor() { }

  ngOnInit(): void {
  }

  // méthodes et fonctions

}
