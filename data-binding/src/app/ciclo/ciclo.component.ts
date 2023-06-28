import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css'],
})
export class CicloComponent
  implements
    OnInit,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {

  @Input() valor: number = 10;

  constructor() {
    this.log('construtor');
  }

  ngOnInit(): void {
    this.log('onInit');
  }

  ngOnChanges(): void {
    this.log('onChanges');
  }

  ngDoCheck(): void {
    this.log('onCheck');
  }

  ngAfterContentInit(): void {
    this.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('OnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
