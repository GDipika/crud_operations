import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './fruit/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './fruit/create/create.component';
import { FruitModule } from './fruit/fruit.module';
import { EditComponent } from './fruit/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component:HomeComponent, pathMatch: "full" },
  { path: 'create', component:CreateComponent },
  { path: 'edit', component:EditComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FruitModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
