import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropDownchComponent {
  @Output() selectedValue = new EventEmitter<any>();
  @Input() selected: any;
  @Input() list: any[] = [];

  constructor() { }
  
  ngOnInit(): void {
    this.selectedValue.emit(this.selected);
  }

  onChange() {
    console.log(this.selected.id);
    this.selectedValue.emit(this.selected);
  }
}
