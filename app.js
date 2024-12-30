/* Created by Tivotal */

let bill_input = document.querySelector(".bill-amt");
let per_input = document.querySelector(".tip-per");
let btn = document.querySelector(".btn");
let total_txt = document.querySelector(".total");

btn.addEventListener("click", () => {
  let bill_amt = bill_input.value;
  let perc = per_input.value;

  let total = bill_amt * (1 + perc / 100);
  total_txt.innerText = "$" + total.toFixed(2);
});
