export let userList = [];
export let setData = localStorage.setItem("user", JSON.stringify(userList));
export let data = JSON.parse(localStorage.getItem("user"));
