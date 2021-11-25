import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { VacinationCountComponent } from './vacination-count/vacination-count.component';
import { SearchVacinationComponent } from './search-vacination/search-vacination.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { RiseIssueComponent } from './rise-issue/rise-issue.component';
import { SteptovacinationComponent } from './steptovacination/steptovacination.component';
import { SummaryVacinationComponent } from './summary-vacination/summary-vacination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurPartnerComponent } from './our-partner/our-partner.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

const routes: Routes= [
  
  {path:'', component:LandingHomeComponent},
  {path:'vc', component:VacinationCountComponent},
  {path:'sv', component:SearchVacinationComponent},
  {path:'wn', component:WhatsNewComponent},
  {path:'ri', component:RiseIssueComponent},
  {path:'stv', component:SteptovacinationComponent},
  {path:'sv', component:SummaryVacinationComponent},
  
]

@NgModule({
  declarations: [
    LandingHomeComponent,
    VacinationCountComponent,
    SearchVacinationComponent,
    WhatsNewComponent,
    RiseIssueComponent,
    SteptovacinationComponent,
    SummaryVacinationComponent,
    OurPartnerComponent
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
export class HomeModule { }
