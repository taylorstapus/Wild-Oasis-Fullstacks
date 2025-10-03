import { Routes } from '@angular/router';
import { AddAnimal } from './add-animal/add-animal';
import { AnimalListing } from './animal-listing/animal-listing';
import { EditAnimal } from './edit-animal/edit-animal';

export const routes: Routes = [
    { path: 'add-animal', component: AddAnimal },
    { path: '', component: AnimalListing, pathMatch: 'full' },
    { path: 'edit-animal', component: EditAnimal }
];
