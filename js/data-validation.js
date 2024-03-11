export const formPhotoDescription = document.querySelector('.img-upload__form');
export const textHashtags = document.querySelector('.text__hashtags');
export const textDescription = document.querySelector('.text__description');

export const pristineForm = new Pristine(formPhotoDescription);

pristineForm.addValidator(textHashtags,pristineTextHashtags, false);

function pristineTextHashtags(text){

  if (text.length === 0) {
    return true;
  }

  const hashtags = text.trim().toLowerCase().split(' ');

  if (text.split('  ').length !== 1) {
    return false;
  }
  const hashtagRegex = /^#[a-zA-Z0-9]{1,19}$/;

  const uniqueHashtags = new Set();

  for (const hashtag of hashtags){

    if (hashtag.length === 1 && hashtag[0] === '#'){
      return false;
    }

    if (!hashtagRegex.test(hashtag)){
      return false;
    }

    if (uniqueHashtags.has(hashtag)) {
      return false;
    }

    uniqueHashtags.add(hashtag);
  }

  if(hashtags.length > 5){
    return false;
  }

  return true;
}

pristineForm.addValidator(textDescription, pristineTextDescription, false);

function pristineTextDescription(text){

  if (text.length === 0 || text.length <= 140) {
    return true;
  }
}

export function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    event.stopPropagation();
  }
}
