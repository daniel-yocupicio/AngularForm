import { Component, Input } from '@angular/core';

@Component({
  selector: 'client-view',
  imports: [],
  templateUrl: './client-view.component.html',
})
export class ClientViewComponent {
  @Input() name!: string;
  @Input() lastname!: string;
  @Input() city!: string;
  @Input() country!: string;
  @Input() street!: string;
  @Input() number!: number;
}
