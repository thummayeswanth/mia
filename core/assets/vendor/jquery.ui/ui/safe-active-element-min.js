! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    "use strict";
    return e.ui.safeActiveElement = function(e) {
        var n;
        try {
            n = e.activeElement
        } catch (t) {
            n = e.body
        }
        return n || (n = e.body), n.nodeName || (n = e.body), n
    }
}));
//# sourceMappingURL=safe-active-element-min.js.map