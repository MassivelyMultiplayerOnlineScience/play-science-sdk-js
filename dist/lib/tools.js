var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function interpolateTemplate(templateString, params) {
    var names = Object.keys(params);
    var vals = Object.values(params);
    // eslint-disable-next-line no-new-func
    return new (Function.bind.apply(Function, __spreadArray(__spreadArray([void 0], names, false), ["return `".concat(templateString, "`;")], false)))().apply(void 0, vals);
}
export { interpolateTemplate };
//# sourceMappingURL=tools.js.map