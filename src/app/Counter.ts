import { observable, Service } from "feret";

@Service
export class Counter {
  @observable current = 0;

  increment() {
    this.current += 1;
  }
}
