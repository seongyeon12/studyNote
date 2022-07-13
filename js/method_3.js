function hello_func() {
  console.log("hello");
}
function hello_func() {
  console.log("hi");
}

let obj = {
  name: "john",
  age: 27,
  func: hello_func,
};

hello_func();
hi_func();
obj_func();
console.log(hello_func == obj_func);

obj_func = hi_func;
obj_func();
console.log(hi_func == obj_func);