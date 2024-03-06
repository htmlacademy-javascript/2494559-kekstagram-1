export const uploadFile=document.querySelector('#upload-file');
const uploadCancelButton = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

export function uploadPicture() {
  const selectedFile = uploadFile.files[0];

  const reader = new FileReader();

  reader.addEventListener('load', function() {

    const imageUrl = reader.result;

    const imagePreview = document.querySelector('.img-upload__preview img');
    imagePreview.src = imageUrl;
  })

    reader.readAsDataURL(selectedFile);

    imgUploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

function closeBigPicture() {
  document.body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
}

uploadCancelButton.addEventListener('click',()=>{
  closeBigPicture()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBigPicture();
  }
});
