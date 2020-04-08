export interface IJedi {
  id: number;
  name: string;
}

export class Jedi implements IJedi {
  id = 0;
  name = '';

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
