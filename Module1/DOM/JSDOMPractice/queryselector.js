// Get the element with an ID of 'first' using querySelector
const first = document.querySelector("#first");
console.log(first);

// Get the elements with a class of 'second' with querySelector

const second = document.querySelector(".second");
console.log(second.textContent);
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?

const secondAll = document.querySelectorAll(".second");
console.log(secondAll);

secondAll.forEach((el) => (el.style.backgroundColor = "red"));
//we got both of our elements with the class of second - shows all od rhe classes - still returns a nodelist

// Get the span element using querySelector
const getSpan = document.querySelector("span");
console.log(getSpan);
// Get multiple span elements using querySelectorAll

const getSpanAll = document.querySelectorAll("span");
console.log(getSpanAll[0].textContent);
// Select only "a" tags *directly inside* of a div (no grandchildren).

const onlyA = document.querySelectorAll("div > a");
console.log(onlyA[0].textContent);

// Select all elements that contain a "data-target" attribute
const dataTargetEls = document.querySelectorAll("[href]");
console.log(dataTargetEls);

// Select all elements where the data-target attribute equals "#false"
const falseDataTarget = document.querySelectorAll("[data-target='#false']");
console.log(falseDataTarget[0].textContent);
