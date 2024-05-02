const covert = require('./convert');

const preCsvString = `
title,description,snippet
first,line,"
  multi
  line
  input
"`

const postCsvString = `
title,description,snippet
first,line,<br>  multi<br>  line<br>  input<br>`.trim()

test('returns a new csv with newlines replaced with <br>', () => {
  expect(covert(preCsvString, '<br>')).toStrictEqual(postCsvString);
});