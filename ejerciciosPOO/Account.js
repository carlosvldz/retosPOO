class Account{ //star constructor and attributes
    constructor(name, balance){
        this.name = name
        this.balance = balance
    
//if the balance is less than 0 balance stay in 0 
    if(balance < 0) {
        this.balance = 0    
    } else {
        this.balance = balance
        }

        //method get balance
        Account.prototype.getBalance = function(){
            console.log(this.balance)
            }    
        //method set balance
        Account.prototype.setBalance = function(balance){
                this.balance = balance
            }

        //method for deposit money in the account
        Account.prototype.deposit = function(balance){
            if(balance > 0){
                this.balance += balance
            }
        }

        //method for payout 
        Account.prototype.payout = function(balance){
            if (this.balance - balance < 0) {
                alert("Transaction canceled. Insufficient balance.")
            }else {
                this.balance -= balance
            }
        }
        
    }
}