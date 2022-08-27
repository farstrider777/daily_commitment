console.log("test are we in?")
var x = location.search;
console.log(x)

var visitCount = localStorage.getItem("page_view");
console.log(visitCount)

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}

console.log(visitCount)
