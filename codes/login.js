//class for user
class User{
    constructor(fullnames, email, phone, pwd) {
        this.fullnames = fullnames;
        this.email = email;
        this.phone = phone;
        this.pass = pass;
    }
}

//class for the entire application
class LocalApp {
    constructor() {
        this.users = [];
        this.isUserOnline = false;
    }

    addUser(fullnames, email, phone, pass, pass2) {
        //check if the inputs are filled
        if (fullnames === "" || email === "" || phone === "" || pass === "" || pass2 ==="") {
            //fields are empty
            alert("Please fill in all the required fields");
        } else {
            //user is already registered
            let flag = false;

            for (let i = 0; i < this.users.length; i++) {
                if (email === this.users[i].email || phone === this.users[i].phone) {
                    //user already exist
                    flag = true;
                    break;
                }
            }

            //check if user is registered
            if(flag) {
                //user is registered
                alert(fullnames + " User is already registered");
            } else {
                //check if passwords match
                if (pass === pass2) {
                    //register the user
                    let newUser = new User(fullnames, email, phone, pwd);
                    this.users.push(newUser);
                    alert(fullnames + " successfully registered!");
                } else {
                    //password does not match
                    alert("Passwords does not match");
                }
            }
        }
    }

    loginUser(uid, pass) {
        //check if the user exist
        let flag = false;
        let user;
        for (let i=0;i<this.users.length;i++) {
            if (uid === this.users[i].email || uid === this.users[i].phone) {
                flag = true;
                user = this.users[i];
                break;
            }
        }

        if (uid === "" || pass === "") {
            alert("Please fill in the required inputs");
            return false;
        }

        //if user exist
        if(flag) {
            //check if the password is correct
            if(pass === user.pass) {
                alert("User logged in");
                this.isUserOnline = true;
                return true;
            } else {
                alert("Password incorrect");
                return false;
            }
        } else {
            alert("User not registered please register");
            return false;
        }

    }

    logoutUser () {
        this.isUserOnline = false;
    }
}

