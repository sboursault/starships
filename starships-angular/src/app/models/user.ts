/*export class User {
  login!: string;
  password!: string;
}*/


/*export interface User {
  id?: number
  login: string
  password: string
}*/

// class or interface ? There are examples of both ways in different tuturials.

export class User {

  constructor(
    public username: string,
    public password: string,
  ) {  }

}
