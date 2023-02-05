
//class used for object create
//class--->design
// polymorphism---->many 
// inheritance
// encapsulation
// abstraction

// class Worldbank {
//     constructor(savingi, loani) {
//         this.savingi = savingi
//         this.loani = loani
//     }

//     saveWorld() {
//         console.log(`this.saving interest is ${this.savingi}`)
//     }

//     loanWorld() {
//         console.log(`this.loan interest is ${this.loani}`)
//     }
// }
// class BOI extends Worldbank {
//     saveBOI() {
//         console.log(`BOI saved method called`)
//     }
// }
// class SBI extends Worldbank {
//     saveSBI() {
//         console.log(`SBI saved method called`)
//     }
// }
// let a = new BOI(23, 56)

// console.log(a.savingi)
// console.log(a.loani)
// a.loanWorld()
// a.saveWorld()
// a.saveBOI()

// let b = new SBI(34, 78)

// console.log(b.savingi)
// console.log(b.loani)
// b.loanWorld()
// b.saveWorld()
// b.saveSBI()


// console.log("------------------------")

class Addition {
    AdditionB(x, y, z) {
        // console.log(x)
        // console.log(y)
        // console.log(z)
        if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
        else {
            console.log(`incorrect output`)
        }
   }
 }
let c = new Addition()
console.log(c)
c.AdditionB(1, 2, 3)
c.AdditionB(1, 2)
 c.AdditionB(1)






