import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: `<div> You will be remembered for {{ days }} days! </div>`
})
export class AuthMessageComponent {
  days: number = 7;
}
