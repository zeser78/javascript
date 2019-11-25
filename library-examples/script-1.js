//Creating HTML element, we have to defined attrs and children

// createElement (type, attrs= {}, children = [] ) {
// We can create HTML elemnts without children or atrributes
// createElement (type, opts) {
// Using destructuring
function createElement(type, { attrs = {}, children = [] }) {
  if (type == null || typeof type !== "string") {
    throw Error("The element type must be a string");
  }
  if (
    arguments[1] !== undefined &&
    Object.prototype.toString.call(opts) !== "[Obejct Object]"
  ) {
    throw Error("The element type must be an object");
  }
  const { attrs = {}, children = [] } = opts || {};

  return {
    // Initial statement
    // type: type,
    // attrs: attrs,
    // children: children
    //Without children and attrs
    // attrs: opts.attrs,
    // children: opts.children
    // Using destructuring
    // attrs: opts.attrs,
    // children: opts.children
    type,
    attrs,
    children
  };
}

createElement("div", []);
createElement("div", function() {});
createElement("div", false);
createElement("div", new Date());
createElement("div", 4);

createElement("div", null);
createElement("div", undefined);
