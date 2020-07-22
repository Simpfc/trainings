"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forClass = void 0;
function forClass(target) {
    console.log(target);
    // Object.seal(constructor);
    // Object.seal(constructor.prototype);
    var newConstructor = function (name) {
        console.log("Creating new instance");
        //     this.name = name;
        //     this.age = 23;
        //     this.print = function():void{
        //         console.log(this.name, this.age);
        //     }
    };
    return newConstructor;
}
exports.forClass = forClass;
//# sourceMappingURL=for-class.js.map