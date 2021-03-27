import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
