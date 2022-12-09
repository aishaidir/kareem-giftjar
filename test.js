const arr = [
  { name: "bob", type: "human" },
  { name: "sparkling", type: "water", color: "white" },
  { name: "t-rex", type: "animal" },
];

function arrayObject(arr, key) {
  return arr.reduce((a, b) => {
    return {
      ...a,
      [b[key]]: b,
    };
  }, {});
}
console.log("arrayObject", arrayObject(arr, "name"));
// let result = arr.reduce((a,b) => {
//   return `{${item.name}: ${item.name},type:${item.type}${
//     item.color ? ",color:" + item.color : ""
//   }}`;
// });
// output:
// {
//   bob: { type: "human" },
//   sparkling: { type: "water", color: “white” },
//   t-rex: { type: "animal" }
// }
