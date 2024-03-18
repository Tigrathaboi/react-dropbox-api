export const cutPath = (string) => {
  let parts = string.split("/");
  parts.pop();

  let newString = parts.join("/");

  return newString;
};
