import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  showPerson(person) {
    alert(`The person's name is ${person}!`);
  }
}

// The @action decorator indicates we want to use this method as an action in our template, in response to user interaction.

// Now that we have implemented the desired behavior, we can go back to the component's template and wire everything up
