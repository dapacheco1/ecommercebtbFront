import { Component, Input, OnInit,Output } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {
  @Input() msg:string = '';
  @Input() id:number = 0;
  @Output() deleted = new EventEmitter();


  constructor(
    private _catService:CategoriesService
  ) {

   }

  ngOnInit(): void {



  }

  deleteObj(){


    this._catService.deleteCategoryById(this.id).subscribe(res=>{
      alert(res.message);
      this.deleted.emit('deleted');
    });
  }

}
