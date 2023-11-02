import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-moto',
  templateUrl: './card-moto.component.html',
  styleUrls: ['./card-moto.component.css']
})
export class CardMotoComponent implements OnInit {

  constructor() { }

  @Input()
  motoImg:string = ""
  @Input()
  motoNome:string = ""
  @Input()
  Id:String = "0"



  ngOnInit(): void {
  }

}
