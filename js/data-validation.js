export const formPhotoDescription = document.querySelector(".img-upload__form")

export const pristineForm = new Pristine(formPhotoDescription, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
}, false);

pristineForm.addValidator(formPhotoDescription.querySelector('.text__hashtags'),pristineTextHashtags, false);

function pristineTextHashtags(text){

  const hashtags = text.trim().toLowerCase().split(' ');

  if (text.split('  ').length!==1) {
    return false
  };


  const hashtagRegex = /^#[a-zA-Z0-9]{1,19}$/;

  const uniqueHashtags = new Set();

  for (let hashtag of hashtags){

    if (hashtag.length === 1 && hashtag[0] === '#'){
      return false
    }

    if (!hashtagRegex.test(hashtag)){
      return false
    }

    if (uniqueHashtags.has(hashtag)) {
      return false;
    }

    uniqueHashtags.add(hashtag)
  }

  if(hashtags.length > 5){
    return false
  }

  return true
}

export const textHashtags = document.querySelector(".text__hashtags");
