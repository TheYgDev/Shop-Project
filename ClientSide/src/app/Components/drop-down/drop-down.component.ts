import { Component ,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownchComponent {
  @Output() selectedValue = new EventEmitter<string>();
  @Input() selected: string = "";
  coins = [
    { value:"USD",name: "USD (US dollar)" },
    { value:"ILS",name: "ILS (Israeli shakel)" },
    { value:"EUR",name: "EUR (Euro)" },
    { value:"JPY",name: "JPY (Japanese yen)" },
    { value:"GBP",name: "GBP (Pound sterling)" },
    { value:"AUD",name: "AUD (Australian dollar)" },
    {value:"CAD",name:"CAD (Canadian dollar)"}
    
  ]
  constructor() {
    
  }

  onChange(coin: any) {
    console.log(coin.target.value);
    this.selectedValue.emit(coin.target.value);
  }
}
