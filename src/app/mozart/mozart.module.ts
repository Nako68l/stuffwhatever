import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { MozartRoutingModule } from './mozart-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LyFieldModule } from '@alyle/ui/field';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyIconModule } from '@alyle/ui/icon';
import { LyButtonModule } from '@alyle/ui/button';
import { LyCheckboxModule } from '@alyle/ui/checkbox';
import { LyCommonModule } from '@alyle/ui';
import { LyCardModule } from '@alyle/ui/card';
import { LyTypographyModule } from '@alyle/ui/typography';


@NgModule({
  imports: [
    CommonModule,
    MozartRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    LyFieldModule,
    LyRadioModule,
    LyIconModule,
    LyButtonModule,
    LyCheckboxModule,
    LyCommonModule,
    LyCardModule,
    LyTypographyModule,
  ],
  declarations: [AuthPageComponent, AuthFormComponent]
})
export class MozartModule { }
