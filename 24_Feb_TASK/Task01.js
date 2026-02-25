//a=c (isocseles triangle)
//a=b=c (equilateral triangle)
//a<>b<>c (scalene triangle)

function triangle(a, b, c) {
    if (a == b && b == c) {
        console.log("equilateral triangle");
    }
    else if (a == b || b == c || a == c) {
        console.log("isocseles triangle");
    }
    else {
        console.log("scalene triangle");
    }
}
triangle(10, 10, 10);
