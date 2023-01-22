import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
}

// In a route's model() method, you return whatever data you want to make available to the template.
// If you need to fetch data asynchronously, the model() method supports any library that uses JavaScript Promises.

// We can now go back to the scientists template and access the model() hook
