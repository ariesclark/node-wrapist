# node-wrapist
Cleanly and effectively wrap functions, with full control.

##### Installation
```
npm install wrapist
```

##### Usage & Examples
```javascript
const wrapist = require("wrapist");

// function (context, options || array<options>);

// Wrap single function.
wrapist(this, {
	fn: "get",
  ctx: this.util,
  rpl: function (rtnv, options) {
  	// rtnv, refers to the original return value.
	  return rtnv;
  }
});
```