import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  @Input() item: BudgetItem;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem) {
    
  }

}
