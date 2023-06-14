/** Takes an array with a number what describes the max elements in a row.
 * After that number of elements it inserts a new line.
 * */
export function getFormatedComponentArrayProp(
  array: any[],
  maxElementsInOneRow: number
) {
  let result = '';

  array.forEach((element, index) => {
    const shouldInsert = !((index + 1) % maxElementsInOneRow);
    if (index + 1 === array.length) result += element;
    else if (shouldInsert) result += element + "', " + '\n    ' + "'";
    else result += element + "', '";
  });

  return result;
}

export function capitalizeFirstLetter(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}
