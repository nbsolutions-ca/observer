
import { ISubject} from './ISubject';

export class Subject<TObserver> {
    private _observers: Array<TObserver>;
    private _subject: ISubject<TObserver>;

    public constructor(subject: ISubject<TObserver>) {
        this._observers = [];
        this._subject = subject;
    }

    public attachObserver(observer: TObserver): void {
        this._observers.push(observer);
    }

    public detachObserver(observer: TObserver): boolean {
        let idx: number = this._observers.indexOf(observer);
        if (idx > -1) {
            this._observers.splice(idx, 1);
            return true;
        }

        return false;
    }

    public notify(): void {
        for (let i: number = 0; i < this._observers.length; i++) {
            this._subject.notify(this._observers[i]);
        }
    }

    public dispose(): void {
        this._observers = [];
    }
}
