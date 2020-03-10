import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class Ui5EventBusService {

  private channels: Map<string, Subject<any>>;

  constructor() {
    this.channels = new Map();
    this.channels.set('loadComponent', new Subject<any>());
    this.channels.set('comm', new Subject<any>());
  }

  public publish(channel: string, data: any) {
    if (this.channels.has(channel)) {
      this.channels.get(channel).next(data);
    }
  }

  public subscribe(channel: string, callback: (data: any) => void) {
    if (this.channels.has(channel)) {
      this.channels.get(channel).subscribe(callback);
    }
  }
}
