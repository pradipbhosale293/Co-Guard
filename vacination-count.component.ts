import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacination-count',
  templateUrl: './vacination-count.component.html',
  styleUrls: ['./vacination-count.component.css']
})
export class VacinationCountComponent implements OnInit {
  default1:number=645698745;
  default2:number=8064984;
  constructor() { }

  ngOnInit(): void {
  }

}
