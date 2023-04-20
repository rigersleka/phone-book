import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  @Input() title: string = '';
  @Input() logoName = '';
}
