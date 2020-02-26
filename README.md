# Replace New Lines

## Motivation

When text from `textarea` are stored into DB, retrieved, and put into `html`, new line symbols does't make new line. Instead, they only make a space, which largely affect the readability. Want to tranform these text into paragraphs.

## Solutions

Two solutions are `<br>` and `<p></p>`.

Replace new line symbols `\n` or `\r\n` with `<br>` or transform them into paragraphs.

## Functions

There are three functions.
`breakWithBreak`: Transform text string with `\r\n` `\n` line breaks into strings with breaks, replace `\r\n` and `\n` with `<br>`

`split`: split text string by `\r\n` or `\n` into a list of strings

`toParagraph`: Transform text string containing `\r\n` or `\n` to a string of many paragraphs, separated with `<p></p>`
