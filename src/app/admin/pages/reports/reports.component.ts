import { Component, OnInit, ViewChild } from '@angular/core';
import { SalesDetail } from 'src/app/interfaces/SalesDetails';
import { ReportsService } from 'src/app/services/reports.service';
import { SalesDetailService } from 'src/app/services/sales-detail.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  public report: SalesDetail[] = [];
  public value: number = 0;
  private aux: number[] = [];
  public visibleButton:boolean = false;
  public today: any = new Date();

  constructor(
    private _salesDetailService: SalesDetailService,
    private _reportsService: ReportsService
  ) {
    this.today =
      this.today.getFullYear() +
      '-' +
      (this.today.getMonth() + 1) +
      '-' +
      this.today.getDate();
  }

  ngOnInit(): void {}

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData!: ChartData<'bar'>;

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  getReports() {
    if(this.value <= 0 ){
      alert('Invalid value, please enter at least a number highter than 0');
    }else{
      this._reportsService.getMostSoldByValue(this.value).subscribe((res) => {
        if (res.success) {
          this.report = res.data;
          this.getOnlyAmounts();
          this.visibleButton = true;
        } else {
          alert(res.message);
        }
      });
    }

  }

  public convertToPDF() {


    let div: any = document.querySelector('#report');
    html2canvas(div).then((canvas) => {
      // Few necessary setting options

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save(`Report-mostSoldat-${this.today}.pdf`); // Generated PDF
    });
  }

  getOnlyAmounts() {
    this.aux = [];
    let labels: string[] = [];
    this.report.forEach((item) => {
      this.aux.push(item.amount);
      labels.push(String(item.clothing?.name));
    });

    this.barChartData = {
      labels: labels,
      datasets: [{ data: this.aux, label: 'Clothe' }],
    };
  }
}
