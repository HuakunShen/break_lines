/**
 * Transform text string with \r\n \n line breaks into strings with breaks <br>
 * replace \r\n and \n with <br>
 * @param {*} str
 */
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

/**
 * split text string by \r\n or \n into a list of strings
 * @param {*} str
 */
function split(str) {
  let result = str.split(/\s*[(\n)(\r\n)]\s*/);
  result = result.filter(s => s != "");
  return result;
}

/**
 * Transform text string containing \r\n or \n to a string of many paragraphs
 * separated with <p></p>
 * @param {*} str
 */
function toParagraph(str) {
  const paragraph_list = split(str);
  let paragraphs = "";
  paragraph_list.forEach(paragraph => {
    paragraphs += `<p>${paragraph}</p>`;
  });
  return paragraphs;
}

module.exports = {
  breakWithBreak,
  split,
  toParagraph
};
