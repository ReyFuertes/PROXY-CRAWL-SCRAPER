import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  @Output()
  public valueEmitter = new EventEmitter<{ url: string, token: string }>();
  @Input()
  public isLoading: boolean = true;

  ngOnInit() { }

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      url: ['https://twitter.com/dprincessmaja', Validators.required],
      token: ['gTfylEQaSrpyT3t7SkP1WQ', Validators.required]
    })
  }

  public onSubmit(): void {
    this.valueEmitter.emit({
      url: this.form.get('url').value,
      token: this.form.get('token').value
    })
  }
}
