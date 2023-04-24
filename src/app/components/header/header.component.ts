import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() logoName = '';
}
