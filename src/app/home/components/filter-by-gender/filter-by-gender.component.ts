import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-by-gender',
  templateUrl: './filter-by-gender.component.html',
  styleUrls: ['./filter-by-gender.component.scss']
})
export class FilterByGenderComponent implements OnInit {

  @Output() filterEv = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  filter(value: any) {
    this.filterEv.emit(value.target.value);
  }


}
