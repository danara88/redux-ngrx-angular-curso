/**
 * User model
 */
export class User {
    static fromFirebase(fbaseUser: any) {
        return new User(fbaseUser.uid, fbaseUser.name, fbaseUser.email);
    }
    constructor(public uid: string, public name: string, public email: string) {}
}
