
//********method 1)ove riding 2)over loading
//over riding
//same class,same method name,different signature
//over loading
//different class ,same method , same singature


class cal {
    //INCORRECT WAYS
    add(x) {
        console.log(`please provide correct output`)
    }
    add(x, y) {
        console.log(x + y)
    }
    add(x, y, z) {
        console.log(x + y + z)
    }
    addition(x, y, z) {
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
let v = new cal()
console.log(v)

v.addition(1, 2, 3)
v.addition(3, 4)
v.addition(5)
console.log("-----------------------")

//******over loading */
//same class,same method name,diffrenet signature
//overriding

class Worldbank {
    constructor(si, li) {
        this.si = si
        this.li = li
    }
    save() {
        console.log(`the saving interest is${this.si}`)
    }
    loan() {
        console.log(`the loan interest is${this.li}`)
    }

}
class bankofmaharastra extends Worldbank {
    constructor(si, li) {
        super(si, li)
        this.si = si
        this.li = li
    }
    save() {
        console.log(`the saving interest is${this.si}`)
    }
    loan() {
        console.log(`the loan interest is${this.li}`)
    }
}

let s = new bankofmaharastra(12, 7)
console.log(s.si)
console.log(s.li)
s.save()
s.loan()
console.log("-----------------------")

let m = new Worldbank(4, 7)
console.log(m.si)
console.log(m.li)
m.save()
m.loan()
console.log("----------------------------")

class Bank{
    constructor(accHolder,bal){
        this.accHolderName=accHolder
        this.balance=bal
this.transaction=[]
    }
    deposit(amount){          //1000
        if(amount>0){            //(1000>0)
            this.transaction.push(amount)    //2000
            this.balance=this.balance+amount //  1000+2000
        }
    }
        withdrawl(amount){             //12000
            if(amount<this.balance){     //12000<10000
                this.transaction.push(-amount)   //6000
                this.balance=this.balance-amount    //12000-6000
            
        }else{
            console.log(`insufficient balance`)
        }
    }

    last5transation(){
        return this.transaction.slice(-5)   
    }
    
    }
let sana= new Bank("sana",10000)
console.log(sana)

sana.deposit(2000)
console.log(sana)

sana.withdrawl(6000)
console.log(sana)


sana.deposit(50000)
sana.withdrawl(200)
sana.deposit(2000)
sana.withdrawl(11000)
sana.deposit(12000)
console.log(sana)


let last5= sana.last5transation()
console.log(last5)
















































