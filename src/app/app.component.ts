import { Component } from '@angular/core';
import { User } from './user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: AngularFireList<User>;
  constructor(dbUsers: AngularFireDatabase
) {
    this.users = dbUsers
      .list<User>('/users');
    }

  model = new User(null, null, null);

  submitted = false;

  AddUser() {
    // this.users.update('user', this.model);
  }
  onSubmit() {
    this.submitted = true;
    this.users.push(this.model);
  }
}
