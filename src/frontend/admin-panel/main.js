import assets from './../assets';

const assignImages = () => {
  const releaseKrakenImg = document.getElementById('releaseKraken');

  releaseKrakenImg.src = assets.images.releaseKraken;
};

class Main {
  constructor() {
    this.count = 0;
    this.count += 1;

    assignImages();
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
