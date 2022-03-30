import { Component, OnInit } from '@angular/core';
import { SalesDetail } from 'src/app/interfaces/SalesDetails';
import { ReportsService } from 'src/app/services/reports.service';
import { SalesDetailService } from 'src/app/services/sales-detail.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public report:SalesDetail[] = [];
  public value:number = 0;

  constructor(
    private _salesDetailService:SalesDetailService,
    private _reportsService:ReportsService
  ) { }

  ngOnInit(): void {
    
  }


  getReports(){
    this._reportsService.getMostSoldByValue(this.value).subscribe(res=>{
      if(res.success){
        this.report = res.data;
      }else{
        alert(res.message);
      }
      
    });
  }

}
