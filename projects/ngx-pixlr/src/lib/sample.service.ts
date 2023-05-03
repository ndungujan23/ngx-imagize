import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgxPixlrSampleService {
  public getBestFramework(): string {
    return 'Angular';
  }
}
