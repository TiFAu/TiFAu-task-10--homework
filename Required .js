var getkey = () => {
    let key = new Date().toLocaleTimeString(), x = 0
    while (log[`${key}[${x}]`]) {x++}
    return `${key}[${x}]`
}

var handler = message => {
    Object.defineProperty(log, getkey(), {value: message})
}

let messages = [
    "backspasce",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"    
]
var log = {}

var sendMessage = (message, callback) =>
    setTimeout (
        () => callback (message),
        Math.random () * 7000
    )
messages.forEach(
    message => sendMessage (message, handler)
)