export const sortAlphabet = (array) => {
  array.sort((a, b) => {
    if (
      (a[".tag"] === "folder" || b[".tag"] === "folder") &&
      !(a[".tag"] === b[".tag"])
    ) {
      return a[".tag"] === "folder" ? -1 : 1;
    } else {
      return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1;
    }
  });
  return array;
};
