import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Gender } from 'src/app/interfaces/Gender';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-filter-by-gender',
  templateUrl: './filter-by-gender.component.html',
  styleUrls: ['./filter-by-gender.component.scss']
})
export class FilterByGenderComponent implements OnInit {

  public genders:Gender[] = [];

  @Input() public val:string = '';

  @Output() filterEv = new EventEmitter<string>();
  constructor(
    private __genderService:GenderService,
  ) { }

  ngOnInit(): void {

    this.loadGenders();
  }

  filter(value: any) {
    this.filterEv.emit(value);

  }

  loadGenders(){
    this.genders = this.__genderService.obtainCurrentGenders()
  }


}
