module.exports = function(where = this, opt = {}) {
	if (typeof opt !== "object") {
		throw new Error("Improper Options");
	}

	const handle = (options) => {
		let {
			fn, ctx, rpl
		} = options;

		let clone = Object.assign({}, {
			fn: ctx[fn]
		});

		ctx[fn] = function(...args) {
			let rtnv = clone.fn.apply(ctx, args);
			args = [rtnv, ...args];

			let rplv = rpl.apply(where, args);
			if (rplv !== undefined) {
				return rplv;
			}

			return rtnv;
		};
	}
	
	if (!Array.isArray(opt)) {
		handle(opt)
		return;
	}

	opt.forEach(f => handle(f));
}