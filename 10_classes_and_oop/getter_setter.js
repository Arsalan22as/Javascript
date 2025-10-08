class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}arsalan`
    }

    set password(value){
        this._password = value
    }
}

const arsalan = new User("a@arsalan.ai", "abc")
console.log(arsalan.email);