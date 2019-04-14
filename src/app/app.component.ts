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
  constructor(dbUsers: AngularFireDatabase) {
    this.users = dbUsers
      .list<User>('/users');
      // .valueChanges();
      // .subscribe(console.log);
    // const users = dbUsers
    //   .list<User>('user')
    //   .valueChanges()
    //   .subscribe(console.log);
  }

  title = 'app';
  // constructor(
  //   public id: number,
  //   public name: string,
  //   public power: string,
  //   public alterEgo?: string
  // ) {}
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new User(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  AddUser() {
    this.users.push(this.model);
    // this.users.update('user', this.model);
  }
  // onSubmit() {
  //   this.submitted = true;
  // }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
