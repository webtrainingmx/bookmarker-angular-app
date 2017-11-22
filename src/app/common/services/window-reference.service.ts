import { Injectable } from '@angular/core';

@Injectable()
export class WindowReferenceService {

  constructor () {
  }

  // Inspired by: https://stackoverflow.com/questions/40760099/how-to-open-new-window-in-new-tab-in-angular2
  getNativeWindow () {
    return window;
  }
}
