import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NgxPixlrSampleService } from './sample.service';

@Component({
  selector: 'ngx-pixlr-sample',
  template: `<h1>
    The best framework is {{ sampleService.getBestFramework() }}
  </h1>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxPixlrSampleComponent {
  constructor(public sampleService: NgxPixlrSampleService) {}
}
