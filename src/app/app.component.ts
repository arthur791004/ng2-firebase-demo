import { Component } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'ng2 firebase demo!';
  public items: FirebaseListObservable<any[]>;
  public item: FirebaseObjectObservable<any>;
  constructor(private af: AngularFire) {
    this.af = af;
    this.items = af.database.list('items');
  }

  createItem() {
    this.items.push({
      name: 'ng2 firebase demo',
      description: 'create'
    });
  }

  replaceItem(key: string) {
    this.item = this.af.database.object(`items/${key}`);
    this.item.set({
      description: 'replace'
    });
  }

  updateItem(key: string) {
    this.item = this.af.database.object(`items/${key}`);
    this.item.update({
      description: 'update'
    });
  }

  deleteItem(key: string) {
    this.item = this.af.database.object(`items/${key}`);
    this.item.remove();
  }
}
