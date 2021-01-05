import { StmtModifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from 'src/app/Model/tennis-player';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {

// propriétés


  public playersNames: string[]=['Jim', 'Pete', 'Pat', 'Stephan'];
  

  public player: TennisPlayer = {
    id: 1,
    name:'Sampras',
    firstName: 'Pete'
  };
  modify=false;
  
  // constructeurs et initialiseurs
  constructor() { }

  ngOnInit(): void {
  }

  // méthodes et fonctions
  public onClick(){
    this.player.firstName ="Jim";
    this.player.name ="Courier";
    this.modify=!this.modify;
  }

  public showText(){
    return this.modify;
  }
}
