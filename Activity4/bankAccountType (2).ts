
type bankAccount = {
  balance: number,
  name: string
}

function debit(account: bankAccount, valueDollar: number) {
  // TODO
  // create this code to add valueDollars to the bank account

  account.balance += valueDollar;
}

function credit(account: bankAccount, valueDollar: number) {
   //TODO
   // complete this code to remove valueDollars from the bank account
   
  if (account.balance >= valueDollar) {
    account.balance -= valueDollar;
  } else {
    throw new Error("Insufficient funds");
  }
}