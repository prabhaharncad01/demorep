class BankAccount:
    def __init__(self, account_number, pin, balance=0):
        self.account_number = account_number
        self.pin = pin
        self.balance = balance
        self.transaction_history = []

    def display_details(self):
        print("Account Holder Details:")
        print("Account Number:", self.account_number)
        print("Balance:", self.balance)
        print("Transaction History:")
        for transaction in self.transaction_history:
            print(transaction)

    def deposit(self, amount):
        self.balance += amount
        self.transaction_history.append(f"Credit: +{amount}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            self.transaction_history.append(f"Debit: -{amount}")
        else:
            print("Insufficient funds!")

    def transfer(self, amount, recipient):
        if amount <= self.balance:
            self.balance -= amount
            self.transaction_history.append(f"Transfer to {recipient.account_number}: -{amount}")
            recipient.balance += amount
            recipient.transaction_history.append(f"Transfer from {self.account_number}: +{amount}")
        else:
            print("Insufficient funds!")


def main():
    # Dummy bank account data
    accounts = {
        "1234567890": BankAccount("1234567890", "1234", 1000),
        "0987654321": BankAccount("0987654321", "4321", 500),
    }

    # ATM Interface
    print("Welcome to the ATM")
    while True:
        account_number = input("Enter your account number: ")
        pin = input("Enter your PIN: ")

        if account_number in accounts and pin == accounts[account_number].pin:
            current_account = accounts[account_number]
            print("Login successful.")
            while True:
                print("\n1. Display Account Details")
                print("2. Deposit")
                print("3. Withdraw")
                print("4. Transfer")
                print("5. Quit")
                choice = input("Enter your choice: ")

                if choice == "1":
                    current_account.display_details()
                elif choice == "2":
                    amount = float(input("Enter amount to deposit: "))
                    current_account.deposit(amount)
                elif choice == "3":
                    amount = float(input("Enter amount to withdraw: "))
                    current_account.withdraw(amount)
                elif choice == "4":
                    recipient_account = input("Enter recipient's account number: ")
                    amount = float(input("Enter amount to transfer: "))
                    if recipient_account in accounts:
                        recipient = accounts[recipient_account]
                        current_account.transfer(amount, recipient)
                    else:
                        print("Recipient account not found.")
                elif choice == "5":
                    print("Thank you for using the ATM.")
                    exit()
                else:
                    print("Invalid choice. Please try again.")

        else:
            print("Invalid account number or PIN. Please try again.")


if __name__ == "__main__":
    main()
