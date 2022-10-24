import { BehaviorSubject } from 'rxjs';

export class SubjectList<Model> extends BehaviorSubject<Model[]> {

    constructor() { super([]); }

    public unshift(item: Model) {
        this.next([item, ...this.getValue()]);
    }

    public push(item: Model) {
        this.next([...this.getValue(), item]);
    }

    public update(map: (item: Model, index: number, array: Model[]) => Model) {
        this.next(this.getValue().map(map));
    }

    public remove(filter: (item: Model, index: number, array: Model[]) => boolean) {
        this.next(this.getValue().filter(filter));
    }
}