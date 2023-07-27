import { Component, EventEmitter, Input, Output ,SimpleChanges} from '@angular/core';

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selected'] && !changes['selected'].firstChange) {
      this.onChange();
    }
  }

  onChange() {
    this.selectedValue.emit(this.selected);
  }
}
