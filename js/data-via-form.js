export const uploadFile=document.querySelector('#upload-file');
const uploadCancelButton = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

export function uploadPicture() {
  // код для контрола загрузки файла...
    imgUploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

function closeBigPicture() {
  document.body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  uploadFile.value=''; //???
}

uploadCancelButton.addEventListener('click',()=>{
  closeBigPicture()
})
