let Home = document.getElementById("home");
let Guest = document.getElementById("guest");
console.log(Home);
let count = 0;
function plus1() {
  count = count + 1;
  Home.innerHTML = count;
}
let count1 = count;
function plus2() {
  count1 = count1 + 2;
  Home.innerHTML = count1;
}
let count2 = count1;
function plus3() {
  count2 = count2 + 3;
  Home.innerHTML = count2;
}
// guest
let guestCount = 0;
function guestPlus1() {
  guestCount = guestCount + 1;
  Guest.innerHTML = guestCount;
}
let guestCount1 = guestCount;
function guestPlus2() {
  guestCount1 = guestCount1 + 2;
  Guest.innerHTML = guestCount1;
}
let guestCount2 = guestCount1;
function guestPlus3() {
  guestCount2 = guestCount2 + 3;
  Guest.innerHTML = guestCount2;
}
