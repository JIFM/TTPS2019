import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetsService } from './pets-list.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  providers: [ PetsService ],
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {
  pets: Pet[];
  editPet: Pet; // the pet currently being edited

  constructor( private petsService: PetsService ) {
    // this.pets = [ {nombre: 'Perri', raza: 'Ornitorrinco', color: 'Turquesa', sexo: 'Macho', foto: 'SELFIE'},
    //               {nombre: 'Perri', raza: 'Ornitorrinco', color: 'Turquesa', sexo: 'Macho', foto: 'SELFIE'},
    //               {nombre: 'Perri', raza: 'Ornitorrinco', color: 'Turquesa', sexo: 'Macho', foto: 'SELFIE'} ];
    // this.pets = http.get('http://localhost:8080/25/mascota');
  }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void{
    this.petsService.getPets().subscribe( pets => {
      return this.pets = pets;
    } );
  }

  // add( name: string ): void{
  //   this.editHero = undefined;
  //   name = name.trim();
  //   if(!name) { return; }
  //   // The server will generate the id for this new hero
  //   constnewHero: Hero = { name } asHero;
  //   this.petsService.addPet( new Pet ).subscribe( pet => this.pets.push(pet) );
  // }

}
