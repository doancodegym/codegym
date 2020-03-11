function Cong() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").value = result;
}
function Tru() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").value = result;
}
function Nhan() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").value = result;
}
function Chia() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 / num2;
    document.getElementById("result").value = result.toFixed(2);
}