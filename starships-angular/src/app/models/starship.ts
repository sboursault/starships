export class Starship {
  constructor(
    public id: number,
    public userId: number,
    public name: string,
    public size?: number,
    public maxPassengers?: number,
    public quantity?: number
  ) {}
}
