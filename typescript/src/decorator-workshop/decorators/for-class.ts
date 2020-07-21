export function forClass<TFunction extends Function>(target: TFunction): TFunction {
    console.log(target);
    // Object.seal(constructor);
    // Object.seal(constructor.prototype);

    let newConstructor: Function = function(name: string) {
        console.log("Creating new instance");
        this.name = name;
    //     this.age = 23;
    //     this.print = function():void{
    //         console.log(this.name, this.age);
    //     }
    }

    return <TFunction>newConstructor;
}

class NewConstructor {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
