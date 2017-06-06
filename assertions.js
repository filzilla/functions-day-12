console.assert(max(200, 58998) === 58998);
console.assert(max(-400, 2) === 2);
console.assert(max(223, 221) === 223);

console.assert(maxOfThree(89, 270, 85) === 270);
console.assert(maxOfThree(27, 25, 26) === 27);
console.assert(maxOfThree(100000, 2, 20924848) === 20924848);

console.assert(sum(3, 700) === 703);
console.assert(sum(20, 98778) === 98798);
console.assert(sum(8778, 1000) === 9778);

console.assert(avg(20, 27, 37) === 28 );
console.assert(avg(75, 28, 5) === 36);
console.assert(avg(200, 500, 20) === 240);

console.assert(getLength("word") === 4);
console.assert(getLength('this is a really short string') === 29);
console.assert(getLength('Lorem ipsum dolor sit amet, consectetur adipisicing elit.') === 57);

console.assert(greaterThan(7, 2) === true);
console.assert(greaterThan(10, 5) === true);
console.assert(greaterThan(50, 2000) === false);

console.assert(greet("Garret") === "Hello, Garret!");
console.assert(greet("Shannon") === "Hello, Shannon!");
console.assert(greet("George") === "Hello, George!");
