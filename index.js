const textarea = document.getElementById("textarea");
const totalCharacters = document.getElementById("total__counter");
const remainingCharacters = document.getElementById("remaining__counter");

textarea.addEventListener("keyup", () => {
  UpdateCharacterCount();
});

UpdateCharacterCount();

function UpdateCharacterCount() {
  let totalCharacter = textarea.value.length;
  let remainingCharacter =
    textarea.getAttribute("maxlength") - textarea.value.length;
  totalCharacters.innerText = totalCharacter;
  remainingCharacters.innerText = remainingCharacter;
}
