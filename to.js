let text = document.getElementById("text");
let btn = document.getElementById("btn");
let cont=document.getElementById("content");
const arr = [];
var curr=0;
btn.addEventListener("click", () => {
  if (text.value != "") {
    addtask(text.value);
    text.value = "";
  } else alert("ENTER SOME TASK");
});
text.addEventListener("keypress", (v) => {
  if (v.key === "Enter" && text.value != "") {
    addtask(text.value);
    text.value = "";
  }
});

function addtask(val) {
  let div = document.createElement("div");
  div.className = "list";
  let span = document.createElement("span");
  span.className = "inspan";
  let cross = document.createElement("button");
  cross.id="cross";
  cross.innerHTML = "&cross;";
  let check = document.createElement("button");
  check.id="check";
  check.innerHTML = "&check;";
  span.innerHTML = val;
  arr.push(val);
  document.body.append(div);
  div.append(check, span, cross);
  cont.append(div);
  check.addEventListener("click", () => {
    if (span.style.textDecoration != "line-through") {
      span.style.textDecoration = "line-through";
      span.style.color = "red";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  });
  cross.addEventListener("click", (event) => {
    event.target.parentElement.remove();
    let index = arr.indexOf(span.innerHTML);
    arr.splice(index, 1);
    localStorage.setItem("user1", JSON.stringify(arr));
  });
    localStorage.setItem("user1", JSON.stringify(arr));
}
let data = localStorage.getItem("user1");
let getarr = JSON.parse(data);
// window.onload=function(){z
getarr.forEach((v) => {
  addtask(v);
});

// }
