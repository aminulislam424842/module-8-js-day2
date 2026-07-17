let total = 5000;
let isMember = false;

if (total >= 1000) {
  if (isMember) {
    discount = 20;
    discountAmount = (total * discount) / 100;
    finalPrice = total - discountAmount;
    console.log("You pay only: " + finalPrice);
  }
  else {
    discount = 10;
    discountAmount = (total * discount) / 100;
    finalPrice = total - discountAmount;
    console.log("You pay only: " + finalPrice);
  }
}
else {
  console.log("You pay :" + total);
}