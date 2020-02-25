function breakWithBreak(str) {
  // filter \r\n
  while (str.includes("\r\n")) {
    str = str.replace("\r\n", "<br>");
  }
  // filter \n
  while (str.includes("\n")) {
    str = str.replace("\n", "<br>");
  }
  return str;
}

exports.breakWithBreak = breakWithBreak;
