// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendDriver(name){
    return drivers.push(`${name}`)
}

function destructivelyRemoveLastDriver(){
    return drivers.pop()
}

function destructivelyPrependDriver(name){
    return drivers.unshift(`${name}`)
}

function destructivelyRemoveFirstDriver(){
    return drivers.shift()
}

function appendDriver(name){
    return [...drivers, `${name}`]
}

function prependDriver(name){
    return [`${name}`, ...drivers]
}

function removeLastDriver(){
    return drivers.splice(2)
}
// function destructivelyAppendDriver(name) {
//     drivers.push(`${name}`)
// }

// function destructivelyPrependDriver(name) {
//     drivers.unshift(`${name}`)
// }

// function destructivelyRemoveLastDriver() {
//     drivers.pop()
// }

// function destructivelyRemoveFirstDriver() {
//     drivers.shift()
// }

// function appendDriver(name) {
//     return [...drivers, name]
// }

// function prependDriver(name) {
//     return [name, ...drivers]
// }

// function removeLastDriver() {
//     let new_drivers = drivers.slice(0, -1)
//     return new_drivers
// }

// function removeFirstDriver() {
//     let new_drivers = drivers.slice(1)
//     return new_drivers
// }