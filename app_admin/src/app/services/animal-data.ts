import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user'; 
import { AuthResponse } from '../models/auth-response'; 
import { BROWSER_STORAGE } from '../storage';

import {Animal} from '../models/animal'

@Injectable({
  providedIn: 'root'
})

export class AnimalData {
  constructor(     
    private http: HttpClient,     
    @Inject(BROWSER_STORAGE) private storage: Storage     
  ) {}
  url = 'http://localhost:3000/api/animals';
  baseUrl = 'http://localhost:3000/api';

  getAnimals() : Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url);
  }

  addAnimal(formData: Animal) : Observable<Animal> {
    return this.http.post<Animal>(this.url, formData);
  }

  getAnimal(animalCode: string) : Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url + '/' + animalCode);
  }

  updateAnimal(formData: Animal) : Observable<Animal> {
    return this.http.put<Animal>(this.url + '/' + formData.code, formData);
  }

  // Call to our /login endpoint, returns JWT   
  login(user: User, passwd: string) : Observable<AuthResponse> {     
    // console.log('Inside AnimalDataService::login');     
    return this.handleAuthAPICall('login', user, passwd);   
  } 

  // Call to our /register endpoint, creates user and returns JWT   
  register(user: User, passwd: string) : Observable<AuthResponse> {     
    // console.log('Inside AnimalDataService::register');     
    return this.handleAuthAPICall('register', user, passwd);   
  }    

  // helper method to process both login and register methods   
  handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {     
    // console.log('Inside AnimalDataService::handleAuthAPICall');     
    let formData = {       
      name: user.name,       
      email: user.email,       
      password: passwd     };      
      
    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);   
  } 
  
}