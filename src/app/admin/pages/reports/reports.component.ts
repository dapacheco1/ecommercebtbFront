import { Component, OnInit } from '@angular/core';
import { SalesDetail } from 'src/app/interfaces/SalesDetails';
import { ReportsService } from 'src/app/services/reports.service';
import { SalesDetailService } from 'src/app/services/sales-detail.service';
import {Chart} from 'chart.js';

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
    const ctx:any = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
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
