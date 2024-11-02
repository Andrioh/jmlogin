import { Component } from '@angular/core';

import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardModule,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';


import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardModule,
    HlmCardTitleDirective,
    HlmButtonDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
