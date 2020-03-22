import { ResponseModel } from './../response-model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {
  @Input()
  public data: ResponseModel;
  @Output()
  public backEmitter = new EventEmitter<boolean>();
  public displayedColumns: string[] = ['Tweets'];

  constructor() { }

  ngOnInit() { }
}
