import { Component, EventEmitter, Input, Output } from '@angular/core';

// In this example I use tr[] because is the father node of the tree, tr -> td
@Component({
  selector: 'tr[row-item]',
  imports: [],
  templateUrl: './row-item.component.html',
})
export class RowItemComponent {
  @Input() id!: number;
  @Input() product!: string;
  @Input() price!: number;
  @Input() quantity!: number;

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
