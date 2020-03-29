export interface ICounter {
  id: number;
  title: string;
}

export class Counter implements ICounter {
  id = 0;
  title = '';

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
