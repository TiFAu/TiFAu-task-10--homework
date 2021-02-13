/* Допилить код функции User, дополнив его акцессорами приватного свойства
presence так, чтобы после выполнения скрипта: */

function User (name){
    this.name = name
    var presence = false
// my part starts   
    Object.defineProperty (this, 'presence', {
        enumerable: true,
        get: () => !presence ? `${this.name} is absent` : `${this.name} is present`,
        set: (statusUser) => presence = statusUser,
    })
//my part finished
}

let user = new User ("Ivan")
console.info (user.presence)

/*в консоли было:
"Ivan is absent"
а после выполнения кода:
*/

user.presence = "+"
console.info (user.presence)

/* консоли было:
"Ivan is present"
*/
console.info(user)