var name = window.prompt("Enter your name");
if (name === "") {
	var name = "world";
}
function hello(name) {
    window.alert("Hello " + name + "!");
}

hello(name);