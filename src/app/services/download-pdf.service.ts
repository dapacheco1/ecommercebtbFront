import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Injectable({
  providedIn: 'root'
})
export class DownloadPDFService {

  constructor() { }


  convertToPDF(idName:string,today:Date,matter:string) {


    let div: any = document.querySelector(`#${idName}`);

    html2canvas(div).then((canvas) => {
      // Few necessary setting options

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save(`${matter}-${today}.pdf`); // Generated PDF
    });
  }
}
