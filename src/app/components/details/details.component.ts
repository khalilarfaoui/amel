import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataInfoService } from 'app/service/data-info.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id :any
  dataInfo :any
  allData :any
  

  constructor(
    private route: ActivatedRoute,
    private data : DataInfoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log('pp' , this.id)
    this.allData = this.data.getDataInfo
    this.dataInfo = this.allData[this.id]
    console.log(this.dataInfo)
  }

}
