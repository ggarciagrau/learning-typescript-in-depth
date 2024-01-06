const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

const sum = (term1, term2) => {
  return term1 + term2;
};

const typeSafeSum = (term1, term2) => {
  if (typeof term1 === "number" && typeof term2 === "number") {
    return term1 + term2;
  } else {
    return +term1 + +term2;
  }
};

button.addEventListener("click", () => {
  console.log(typeSafeSum(input1.value, input2.value));
});
