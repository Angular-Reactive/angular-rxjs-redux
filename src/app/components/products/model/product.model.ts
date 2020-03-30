export interface IProduct {
  name: string;
}

export class Product implements IProduct {
  name = '';

  constructor(name: string) {
    this.name = name;
  }
}
