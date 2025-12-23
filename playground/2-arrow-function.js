// const square = function(x){
//     return x * x
// }


// const square = (x) => {
//     return x * x
// }

// const square = x => x * x
// console.log(square(6)) // 25

const event = {
    name: 'Birthday Party',
    guests: ['Sijo', 'Siva', 'Sathish'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guests.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()