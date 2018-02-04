import './styles/base.scss';

class Main {
  constructor() {
    this.count = 0;

    this.count += 1;
  }

  ask() {
    const result = this.howMuch;
    return result;
  }

  get howMuch() {
    const result = 'get howMuch: ';
    return result + this.count;
  }
}

console.info('Tada! It works. Now build something awesome.');
const instance = new Main();

instance.ask();

export default instance;
