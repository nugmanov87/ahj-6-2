/* eslint-disable class-methods-use-this */
export default class LoadImg {
  constructor(blockImg, elError) {
    this.blockImg = blockImg;
    this.elError = elError;
  }

  createImg(name, url) {
    const addImg = document.createElement('img');
    addImg.src = url;

    addImg.addEventListener('load', () => {
      this.elError.classList.add('hidden');
      addImg.className = 'item-img';
      addImg.alt = name;

      const DivImg = document.createElement('div');

      DivImg.className = 'item-img-div';
      DivImg.innerHTML = '<div class="close">x</div>';
      DivImg.appendChild(addImg);
      this.blockImg.appendChild(DivImg);
    });

    addImg.addEventListener('error', () => {
      this.elError.classList.remove('hidden');
    });
  }
}
