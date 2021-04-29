import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent {
  @Input() inputControl: InputBase<string>;
  @Input() form: FormGroup;
  @Input() formStyle: string;
  @Input() formColor: string;

  get isValid(): boolean {
    return this.form.controls[this.inputControl.key].valid;
  }

}
