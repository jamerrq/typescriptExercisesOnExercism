//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}

export class BankAccount {

  private _balance: number = 0;
  private _isOpen: boolean = false;

  constructor() {
    this._balance = 0;
    this._isOpen = false;
  }

  open(): void {
    if (this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = true;
  }

  close(): void {
    if (!this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = false;
    this._balance = 0;
  }

  deposit(q: number): void {
    // no negative deposits
    if (q < 0) {
      throw new ValueError();
    }
    // no deposits to closed accounts
    if (!this._isOpen) {
      throw new ValueError();
    }
    this._balance += q;
  }

  withdraw(q: number): void {
    // no negative withdraws
    if (q < 0) {
      throw new ValueError();
    }
    // no withdraws from closed accounts
    if (!this._isOpen) {
      throw new ValueError();
    }
    // no withdraws that exceed the balance
    if (q > this._balance) {
      throw new ValueError();
    }
    this._balance -= q;
  }

  get balance(): number {
    // no balance from closed accounts
    if (!this._isOpen) {
      throw new ValueError();
    }
    return this._balance;
  }
}
