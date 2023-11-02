import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-moto-details',
  templateUrl: './moto-details.component.html',
  styleUrls: ['./moto-details.component.css']
})
export class MotoDetailsComponent implements OnInit {
  id: string = ""

  constructor(private route: ActivatedRoute) { }

  @Input()
  detailText:string = ""
  @Input()
  detailImg:string = ""
  @Input()
  detailId:string = ""

  ngOnInit(): void {
    this.id = this.route.snapshot.data['id'];
  }

}
