import { Component, Input, OnInit,Output } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { EventEmitter } from '@angular/core';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {
  @Input() msg:string = '';
  @Input() id:number = 0;
  @Input() action:number = 0;
  @Output() deleted = new EventEmitter();


  constructor(
    private _catService:CategoriesService,
    private _cltService:ClothingService
  ) {

   }

  ngOnInit(): void {



  }

  deleteObj(){

    switch(this.action){
      case 1:
        this._catService.deleteCategoryById(this.id).subscribe(res=>{
          alert(res.message);
          this.deleted.emit('deleted');
        });

        break;
      case 2:
        this._cltService.deleteClotheById(this.id).subscribe(res=>{
          alert(res.message);
          this.deleted.emit('deleted');
        });
        break;
        
    }
    
  }

}
