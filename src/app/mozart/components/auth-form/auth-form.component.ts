import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChild,
  ViewChild,
  AfterViewInit,
  DoCheck,
} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '../../models/user.model';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { Observable } from 'rxjs';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, AfterContentInit {
  isRemembered$: Observable<boolean>;
  authForm: FormGroup;

  @Output() submitted = new EventEmitter<User>();

  @ViewChild(AuthMessageComponent, { static: true })
  authMessageComponent: AuthMessageComponent;

  @ContentChild(AuthRememberComponent, { static: false })
  authRememberComponent: AuthRememberComponent;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  ngAfterContentInit(): void {
    if (this.authMessageComponent) {
      this.authMessageComponent.days = 30;
    }
    if (this.authRememberComponent) {
      this.isRemembered$ = this.authRememberComponent.checked;
    }
  }

  onSubmit() {
    this.submitted.emit(this.authForm.getRawValue());
  }
}
