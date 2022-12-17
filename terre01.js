let path = process.argv;
let slash = path[1].lastIndexOf('/');
let title = path[1].substring(slash + 1);

console.log(title);

