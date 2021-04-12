/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const array = names;
  for (let i = 0; i < array.length; i++) {
    let count = 1;
    let index = array.indexOf(array[i], i + 1);
    while (index !== -1) {
      array[index] = `${array[index]}(${count})`;
      index = array.indexOf(array[i], index + 1);
      count++;
    }
  }
  return array;
}

module.exports = renameFiles;
