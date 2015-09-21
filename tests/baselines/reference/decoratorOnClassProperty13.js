//// [decoratorOnClassProperty13.ts]
declare function dec(smt :any): <T>(target: any, propertyKey: string) => void;

class C {
    @dec(C.D) prop;
}

module C {
    export class D {
        
    }
    export class E {
        @dec(D) prop;
    }
}

//// [decoratorOnClassProperty13.js]
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var C = (function () {
    function C() {
    }
    return C;
})();
var C;
(function (C) {
    var D = (function () {
        function D() {
        }
        return D;
    })();
    C.D = D;
    var E = (function () {
        function E() {
        }
        return E;
    })();
    C.E = E;
})(C || (C = {}));
__decorate([
    dec(C.D)
], C.prototype, "prop");
__decorate([
    dec(C.D)
], C.E.prototype, "prop");
