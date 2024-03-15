//Vowel Count
function getCount(str) {
    vowels = str.replaceAll(' ', '').match(/[aeiou]/g);
    if (vowels != null) {
      return vowels.length;
    } else {
      return 0;
      };
  };


//Relevant Top Answer
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }