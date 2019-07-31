import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  authForm: FormGroup;
  @Output() submitted = new EventEmitter<User>();

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.submitted.emit(this.authForm.getRawValue());
  }
}
