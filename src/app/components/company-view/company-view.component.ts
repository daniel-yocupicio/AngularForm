import { Component, Input } from '@angular/core';

@Component({
  selector: 'company-view',
  imports: [],
  templateUrl: './company-view.component.html',
})
export class CompanyViewComponent {
  @Input() name!: string;
  @Input() fiscalNumber!: number;
}
