import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {
    console.log('loadingService:', loadingService);
  }
}
