var _button = document.querySelector("button");
var _input1 = document.getElementById("num1");
var _input2 = document.getElementById("num2");
var _sum = function (term1, term2) {
    return term1 + term2;
};
_button.addEventListener("click", function () {
    console.log(_sum(+_input1.value, +_input2.value));
});
