import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms"; 
import { AnimalData } from '../services/animal-data'; 
import { Animal } from '../models/animal'; 

@Component({   
  selector: 'app-edit-animal',   
  standalone: true,   
  imports: [CommonModule, ReactiveFormsModule],   
  templateUrl: './edit-animal.html',   
  styleUrl: './edit-animal.css' 
})
export class EditAnimal implements OnInit { 

  public editForm!: FormGroup;   
  animal!: Animal;   
  submitted = false;   
  message: string = '';

  constructor(     
    private formBuilder: FormBuilder,     
    private router: Router,     
    private animalDataService: AnimalData    
  ) {}

  ngOnInit(): void {          
    // Retrieve stashed trip ID     
    let animalCode = localStorage.getItem("animalCode");     
    if (!animalCode) {       
      alert("Something wrong, couldn't find where I stashed animalCode!");       
      this.router.navigate(['']);       
      return;     
    }      

    console.log('EditAnimalComponent::ngOnInit');     
    console.log('animalcode:' + animalCode);

    this.editForm = this.formBuilder.group({       
      _id: [],       
      code: [animalCode, Validators.required],       
      name: ['', Validators.required],       
      species: ['', Validators.required],              
      img: ['', Validators.required],       
      description: ['', Validators.required]     
    });

    this.animalDataService.getAnimal(animalCode).subscribe({         
      next: (value: any) => {           
        this.animal = value;           
        // Populate our record into the form           
        this.editForm.patchValue(value[0]);           
        if (!value) {             
          this.message = 'No Animal Retrieved!';           
        } else {             
          this.message = 'Animal: ' + animalCode + ' retrieved';           
        }           
        console.log(this.message);         
      },         
      error: (error: any) => {           
        console.log('Error: ' + error);         
      }       
    });   
  }

  public onSubmit(): void {     
    this.submitted = true;      
    if (this.editForm.valid) {       
      this.animalDataService.updateAnimal(this.editForm.value).subscribe({
        next: (value: any) => {           
          console.log(value);           
          this.router.navigate(['']);         
        },         
        error: (error: any) => {           
          console.log('Error: ' + error);         
        }       
      });     
    }   
  }

  // get the form short name to access the form fields   
  get f() { 
    return this.editForm.controls; 
  }

}