const replace_new_lines = require("./index");

a = "a\nb\r\nc\nd";

console.log(replace_new_lines.breakWithBreak(a));
console.log(replace_new_lines.split(a));
console.log(replace_new_lines.toParagraph(a));
