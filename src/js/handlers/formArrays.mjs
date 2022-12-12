export function addtoList() {
  const imageInput = document.querySelector(".image-input");
  const imageInputContainer = document.querySelector(".image-input-container");

  const imageInputsAmount = imageInputContainer.childElementCount;
  if (imageInputsAmount === 6) {
    const addIcon = document.querySelector(".add-input-icon");
    addIcon.classList.remove("d-flex");
    addIcon.style.display = "none";
    console.log("HEY");
  }
  console.log(imageInputsAmount);
  imageInputContainer.innerHTML += `<div class="form-floating mb-3 d-flex">
                    <input
                      name="image-url"
                      type="url"
                      class="form-control rounded-3"
                      id="floatingInput"
                      placeholder="Images"
                    />
                    <label for="floatingInput">Image</label>
                  </div>`;
}
