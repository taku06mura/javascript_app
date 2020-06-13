'use strict'

{
  class Panel {
    constructor() {
      const section = document.createElement('section');
      sectionlclassList.add('panel');

      this.img = document.createElement('section');
      this.img.src = 'img/seven.png';

      this.stop = document.createElement('div');
      this.stop.textContent ='STOP';
      this.stop.classList.add('stop');
      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }
  }
}