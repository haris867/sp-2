export function addTagInputs() {
  const tagInputContainer = document.querySelector(".tag-input-container");
  const tagInputsAmount = tagInputContainer.childElementCount;
  if (tagInputsAmount === 6) {
    const addIcon = document.querySelector(".add-tag-icon");
    addIcon.classList.remove("d-flex");
    addIcon.style.display = "none";
  }
  tagInputContainer.innerHTML += `<div class="form-floating mb-3 d-flex">
                                    <input
                                      name="tags"
                                      type="text"
                                      class="form-control rounded-3"
                                      id="floatingInput"
                                      placeholder="Images"
                                    />
                                    <label for="floatingInput">Tag</label>
                                  </div>`;
}

export function addImageInputs(e) {
  e.preventDefault();
  const imageInputContainer = document.querySelector(".image-input-container");

  const imageInputsAmount = imageInputContainer.childElementCount;
  const addIcon = document.querySelector(".add-image-icon");
  if (imageInputsAmount === 6) {
    addIcon.classList.remove("d-flex");
    addIcon.style.display = "none";
  }
  console.log(imageInputsAmount);
  const input = `
                                    <input
                                      name="image-url"
                                      type="url"
                                      class="form-control rounded-3"
                                      id="floatingInput"
                                      placeholder="Images"
                                    />
                                    <label for="floatingInput">Image</label>`;

  var div = document.createElement("div");
  div.classList.add("form-floating", "mb-3", "d-flex");
  div.innerHTML = input;

  imageInputContainer.append(div);
}
