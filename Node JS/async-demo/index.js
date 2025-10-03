console.log("yelle");
getUser(1, (user) => {
  console.log(user);
});
console.log("yelle 2");

function getUser(id, callbackFU) {
  setTimeout(() => {
    console.log("reading bhai-chara");
    callbackFU({ id: id, name: "asim" });
  }, 2000);
}
