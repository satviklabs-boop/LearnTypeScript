//TypeScript provides access modifiers:
//public → accessible everywhere
//private → accessible only inside the class
//protected → accessible inside the class and child classes
//Encapsulation is the process of wrapping data and methods into a single unit and restricting direct access to the data.
class BankAccount {

    private balance = 0;

    deposit(amount: number): void {
        this.balance = this.balance + amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

let account = new BankAccount();

account.deposit(1000);

console.log(account.getBalance());