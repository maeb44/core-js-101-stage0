function getCardId(value) {
  let index = 0;
  if (value.endsWith('♦')) index += 13;
  if (value.endsWith('♥')) index += 26;
  if (value.endsWith('♠')) index += 39;
  if (value.startsWith('A')) index += 0;
  if (value.startsWith('J')) index += 10;
  if (value.startsWith('Q')) index += 11;
  if (value.startsWith('K')) index += 12;
  if (+value[0]) index += +value[0] - 1;
  return index;
}

let value = "10♣"

console.log(+value.slice(0, value.length - 1))