// @target: ES5
// @experimentaldecorators: true
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