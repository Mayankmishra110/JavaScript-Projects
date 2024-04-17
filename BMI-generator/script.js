const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(3);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18) {
      results.innerHTML += `Khane peene pr dhyan de bhai/behen`;
    } else if (bmi > 18 && bmi < 22) {
      results.innerHTML += `Nice, you are fit`;
    } else {
      results.innerHTML += `Kam kha bhai/behen`;
    }
  }
});
