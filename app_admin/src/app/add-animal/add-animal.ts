import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";

import { Router } from "@angular/router"; 
import { AnimalData } from '../services/animal-data'; 

@Component({   
  selector: 'app-add-animal',   
  standalone: true,   
  imports: [CommonModule, ReactiveFormsModule],   
  templateUrl: './add-animal.html',   
  styleUrl: './add-animal.css' 
})

export class AddAnimal implements OnInit {  
  addForm!: FormGroup;  
  submitted = false;

  constructor(    
    private formBuilder: FormBuilder,    
    private router: Router,    
    private animalService: AnimalData  
  ) { }

  ngOnInit() {    
    this.addForm = this.formBuilder.group({      
      _id: [],      
      code: ['', Validators.required],      
      name: ['', Validators.required],      
      species: ['', Validators.required],            
      img: ['', Validators.required],      
      description: ['', Validators.required],    
    })  
  } 

  public onSubmit() {    
    this.submitted = true;    
    if(this.addForm.valid){      
      this.animalService.addAnimal(this.addForm.value)      
      .subscribe( {       
        next: (data: any) => {        
          console.log(data);        
          this.router.navigate(['']);      
        },      
        error: (error: any) => {
          console.log('Error: ' + error); 
        }
      }); 
    } 
  } 
  // get the form short name to access the form fields 
  get f() { return this.addForm.controls; } 
} 
