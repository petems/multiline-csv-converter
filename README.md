# multiline-csv-converter

A simple javascript library that allows you to replace any newlines in csv file filed. 

## Usage

```
const { parseCsv } = require("multiline-csv-converter")

const preCsvString = `
title,description,snippet
first,line,"
  multi
  line
  input
"`

let newCsv = parseCsv(preCsvString, '<br>')

console.log(newCsv)
```