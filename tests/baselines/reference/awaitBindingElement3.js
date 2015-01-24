//// [awaitBindingElement3.ts]
declare class Promise<T> {
    constructor(init: (resolve: (value?: T | IPromise<T>) => void, reject: (reason?: any) => void) => void);
    then<TResult>(onfulfilled?: (value: T) => TResult | IPromise<TResult>, onrejected?: (reason: any) => TResult | IPromise<TResult>): Promise<TResult>;
}
declare var a: number;
declare var o: { x: number; };
declare var pa: Promise<number>;
declare var po: Promise<{x: number;}>;
async function func({ x } = await po): Promise<void> {
}


//// [awaitBindingElement3.js]
function func(_a) {
    return new Promise(function (_resolve) {
        _resolve(__awaiter(__generator(function (_state) {
            switch (_state.label) {
                case 0:
                    if (!(_a === void 0))
                        return [3 /*break*/, 2];
                    return [4 /*yield*/, po];
                case 1:
                    _b = _state.sent;
                    return [3 /*break*/, 3];
                case 2:
                    _b = _a;
                    _state.label = 3;
                case 3:
                    x = _b.x;
                    return [2 /*return*/];
            }
        })));
    });
    var x, _b;
}