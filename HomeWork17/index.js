'use strict'

class Person{
    constructor(name){
        this.name = name
    }

    get name(){
        return this._name
    }
    set name(value){
        if(typeof value === 'string'){
            this._name = value
            return
        }
        throw new Error('The')
    }
}

let user = new Person('asf')