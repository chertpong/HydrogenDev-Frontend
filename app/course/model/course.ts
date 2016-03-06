export class Course {
    private _id: number;
    private _name: string;
    private _duration : number;
    private _price : number;
    private _description : string;
    private _thumbnail : string;
    private _tags : string[];

    constructor(id:number, name:string, duration:number, price:number, description:string, thumbnail:string, tags:string[]) {
        this._id = id;
        this._name = name;
        this._duration = duration;
        this._price = price;
        this._description = description;
        this._thumbnail = thumbnail;
        this._tags = tags;
    }

    get id():number {
        return this._id;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get duration():number {
        return this._duration;
    }

    set duration(value:number) {
        this._duration = value;
    }

    get price():number {
        return this._price;
    }

    set price(value:number) {
        this._price = value;
    }

    get description():string {
        return this._description;
    }

    set description(value:string) {
        this._description = value;
    }

    get thumbnail():string {
        return this._thumbnail;
    }

    set thumbnail(value:string) {
        this._thumbnail = value;
    }

    get tags():string[] {
        return this._tags;
    }

    set tags(value:string[]) {
        this._tags = value;
    }
}