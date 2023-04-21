export class AccountRegex {
    accountRegex: RegExp = /^[_a-z0-9]{6,}$/;

    validate(regex: string): boolean {
        return this.accountRegex.test(regex);
    }
}