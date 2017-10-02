var lang = 'en';
let dict = [
  create = {
    en: "Create",
    tr: "Oluştur"
  },
  yes = {
    en: "Yes",
    tr: "Evet"
  },
  no = {
    en: "No",
    tr: "Hayır"
  }
]



function switchLang(lang) {
    $('#yesValue').text(dict[1][lang])
    $('#noValue').text(dict[2][lang])
    $('#yes').val(dict[1][lang])
    $('#no').val(dict[2][lang])
    $('#send').val(dict[0][lang])
}

function makeUrl() {
  const question = document.getElementById('question').value
  const slug = slugify(question)
  document.getElementById("quesform").action = "/" + slug

}

function slugify(url) {
  const turkishCharSet = {
      "çÇ": "c",
      "ğĞ": "g",
      "şŞ": "s",
      "üÜ": "u",
      "ıİ": "i",
      "öÖ": "o"
  };

  for (const char in turkishCharSet) url = url.replace(new RegExp("[" + char + "]", "g"), turkishCharSet[char]);
  return url.replace(/[^-a-zA-Z0-9\s]+/gi, "").replace(/\s/gi, "").replace(/[-]+/gi, "").toLowerCase()

}
