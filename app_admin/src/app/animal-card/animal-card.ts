import { Component, OnInit, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Animal } from '../models/animal'; 

@Component({ 
  selector: 'app-animal-card', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './animal-card.html', 
  styleUrl: './animal-card.css' 
}) 
export class AnimalCard implements OnInit { 
  @Input('animal') animal: any; 
  constructor(private router: Router) {} 
  ngOnInit(): void { 
  }
  
  public editAnimal(animal: Animal) {
    localStorage.removeItem('animalCode');
    localStorage.setItem('animalCode', animal.code);
    this.router.navigate(['edit-animal']);
  }
} 