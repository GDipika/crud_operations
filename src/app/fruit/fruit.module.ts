import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
const routes: Routes = [
  { path: 'fruit/home', component: HomeComponent },
  { path: 'fruit', redirectTo: 'fruit/home', pathMatch: "full" },
  { path: '', redirectTo: 'fruit/home', pathMatch: "full" },
  { path: 'fruit/create', component: CreateComponent },
];


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class FruitModule { }
