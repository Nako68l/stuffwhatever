import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { LyCheckboxChange } from '@alyle/ui/checkbox';

@Component({
  selector: 'app-auth-remember',
  template: `
    <ly-checkbox (change)="onChecked($event)">
      Keep me logged in
    </ly-checkbox>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthRememberComponent {
  @Output() checked = new EventEmitter<boolean>();

  onChecked({ checked }: LyCheckboxChange) {
    this.checked.emit(checked);
  }
}
