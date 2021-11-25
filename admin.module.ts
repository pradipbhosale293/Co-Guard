import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VacinatorComponent } from './vacinator/vacinator.component';

const routes: Routes= [
  {path:'admincom', component:VacinatorComponent}
]

@NgModule({
  declarations: [
    VacinatorComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
