! function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    "use strict";
    return e.ui.safeBlur = function(n) {
        n && "body" !== n.nodeName.toLowerCase() && e(n).trigger("blur")
    }
}));
//# sourceMappingURL=safe-blur-min.js.map