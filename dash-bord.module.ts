import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacinationTrendsComponent } from './vacination-trends/vacination-trends.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

const routes: Routes= [
  {path:'sum', component:SummaryComponent}
]

@NgModule({
  declarations: [
    SummaryComponent,
    VacinationTrendsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule,
    ReactiveFormsModule,
    TabViewModule,
    ButtonModule
  ]
})
export class DashBordModule { }
