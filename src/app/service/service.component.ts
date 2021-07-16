
import { Component, OnInit } from '@angular/core';
import { BiodataService } from './../biodata.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
public showData=[];
  constructor(private Sdata:BiodataService) { }

  ngOnInit(): void {
    this.Sdata.biodata().subscribe(data=>this.showData=data)
  }

}
