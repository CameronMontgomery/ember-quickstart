import Route from '@ember/routing/route';

export default class MusiciansRoute extends Route {
  model() {
    return ['Tommy Lee', 'Buddy Holly', 'Elvis', 'Bob Dylan'];
  }
}
