import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Item } from '../../models/item';

const baseItem : any = Object.freeze({
  price: '',
  product: '',
  quantity: '',
});

@Component({
  selector: 'form-item',
  imports: [
    FormsModule
  ],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {
  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4;

  item : any = {...baseItem};

  onSubmit(itemForm : NgForm) : void {
    if (itemForm.valid) {
      this.addItemEventEmitter.emit({...this.item, id: this.counterId})
      this.counterId++;
  
      this.item = {...baseItem};
  
      itemForm.resetForm();
      // itemForm.reset();
    }
  }

}
