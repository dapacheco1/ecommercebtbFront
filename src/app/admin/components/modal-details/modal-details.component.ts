import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss']
})
export class ModalDetailsComponent implements OnInit {

  @Input() details:string = '';
  @Input() created_at:string = '';
  @Input() updated_at:string = '';
  @Input() modalId:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
