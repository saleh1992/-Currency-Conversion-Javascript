let input = document.querySelector("input");
let result = document.querySelector(".result");
let egy = input.value * 18.5

input.addEventListener("input", () => {
  let egy = input.value * 18.5
    result.innerHTML = `{${input.value}} USD Dollar = {${egy.toFixed(2)}} Egyptian Pound`
})