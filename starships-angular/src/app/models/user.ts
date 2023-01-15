/*export interface User {
  id?: number
  login: string
  password: string
}*/

// class or interface ? There are examples of both ways in different tuturials.

export class User {
  constructor(
    public id: number | null,
    public username: string,
    public password: string
  ) {}
}
