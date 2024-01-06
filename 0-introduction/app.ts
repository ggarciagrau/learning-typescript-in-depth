const _button: HTMLButtonElement = document.querySelector("button")!;
const _input1: HTMLInputElement = document.getElementById("num1")! as HTMLInputElement;
const _input2: HTMLInputElement = document.getElementById("num2")! as HTMLInputElement;

const _sum = (term1: number, term2: number) => {
  return term1 + term2;
};

_button.addEventListener("click", () => {
    console.log(_sum(+_input1.value, +_input2.value));
  });
  