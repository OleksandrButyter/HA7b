// JavaScript File
function getFibonacci(num) {
    var num,
        a = 1,
        b = 1,
        c, i;
    if (num >= 3) {
        for (i = 3; i <= num; i++) {
            c = a + b;
            a = b;
            b = c;
        }
    }
    else {
        c = a;
    }
    res.innerHTML = c;
    return c;
}

var capturing = true;

function btnClicked(e) {
    var n = (prompt("Enter a number"));
   getFibonacci(n); 
}

btn.addEventListener('click', btnClicked, capturing);



