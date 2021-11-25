import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes= [
  {path:'reg', component:RegisterMemberComponent},
]

@NgModule({
  declarations: [
    RegisterMemberComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
