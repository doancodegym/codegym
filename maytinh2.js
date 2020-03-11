function maytinh(val)
{
    document.getElementById("edu").value+=val;
}
function ketqua()
{
    let x = document.getElementById("edu").value;
    let y = eval(x);
    document.getElementById("edu").value = y;
}
function xoa()
{
    document.getElementById("edu").value = "";
}