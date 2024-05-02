//convert.js
const { parseCsv } = require("@jjkavalam/csv-parse")

function convert(csvString, replacement) {
  let csvrows = parseCsv(csvString)

  // remove empty elements
  csvrows = csvrows.filter(e => e.length);

  // replace newlines
  csvrows = csvrows.map(function(subarray) {
    return subarray.map(function(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, replacement);
    })
  })

  // convert back to csv file
  var csvstring = csvrows.map(function(d){
    return d.join();
  }).join('\n');

  return csvstring
}
  
module.exports = convert