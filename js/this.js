let user = {
  name: "john"
};
let admin = {
  name: "admin"
};

function hello_func() {
  console.log("Hello " + this.name);
}

user.func = hello_func;
admin.func = hello_func;

user.func();
admin.func();

user["func"]();
admin["func"]();