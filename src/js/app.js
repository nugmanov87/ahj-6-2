import LoadImg from './LoadImg.js';

const blockImg = document.getElementsByClassName('block-img')[0];
const elError = document.getElementById('error-url');

const fieldSelectFile = document.querySelector('#field-select');
const dropFile = document.querySelector('#drop-file');

const loadImg = new LoadImg(blockImg, elError);

function loadFile(files) {
  for (const item of files) {
    const urlImg = URL.createObjectURL(item);
    loadImg.createImg('nameImg', urlImg);
    fieldSelectFile.addEventListener('load', () => {
      URL.revokeObjectURL(urlImg);
    });
  }
}

dropFile.addEventListener('click', () => {
  fieldSelectFile.value = null;
  fieldSelectFile.dispatchEvent(new MouseEvent('click'));
});

dropFile.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropFile.addEventListener('drop', (e) => {
  e.preventDefault();
  const files = Array.from(e.dataTransfer.files);
  loadFile(files);
});

fieldSelectFile.addEventListener('input', (e) => {
  const files = Array.from(e.currentTarget.files);
  loadFile(files);
});

blockImg.addEventListener('click', (e) => {
  if (e.target.className === 'close') {
    const itemElemnt = e.target.closest('.item-img-div');
    blockImg.removeChild(itemElemnt);
  }
});
