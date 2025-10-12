import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AnimalCard } from '../animal-card/animal-card';

import { AnimalData } from '../services/animal-data';
import { Animal } from '../models/animal';

import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-animal-listing',
  standalone: true,
  imports: [CommonModule, AnimalCard],
  templateUrl: './animal-listing.html',
  styleUrl: './animal-listing.css',
  providers: [AnimalData]
})

export class AnimalListing implements OnInit {
  animals!: Animal[];
  message:string = '';

  constructor(private animalDataService: AnimalData,
    private router: Router,
    private authenticationService: Authentication
  ) { 
    console.log('animal-listing constructor'); 
  } 

  public addAnimal(): void {
    this.router.navigate(['add-animal']);
  }

  private getStuff(): void { 
    this.animalDataService.getAnimals() 
    .subscribe({
      next: (value: any) => {           
        this.animals = value;           
        if(value.length > 0)           
          {             
            this.message = 'There are ' + value.length + ' animals available.';           
          }           
          else{             
            this.message = 'There were no animals retrieved from the database';           
          }           
          console.log(this.message);         
        },         
        error: (error: any) => {           
          console.log('Error: ' + error);         
        }       
      })   
  }

   public isLoggedIn() { 
    return this.authenticationService.isLoggedIn(); 
  } 
  
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
