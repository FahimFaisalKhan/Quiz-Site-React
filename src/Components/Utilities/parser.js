let parse = function (str) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

export { parse };
