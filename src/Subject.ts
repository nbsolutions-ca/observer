
import { ISubject} from './ISubject';

/**
 * Helper class that helps keeps track of observers.
 * 
 * Generally you will create an instance for a class that
 * wants to broadcast to observers.
 * 
 * The observer can be any interface, therefore a `notify` method
 * should be implemented, which will receive a concrete observer which
 * can be invoked.
 */
export class Subject<TObserver> {
    private _observers: Array<TObserver>;
    private _subject: ISubject<TObserver>;

    /**
     * 
     * @param subject The class that is doing the notifying.
     */
    public constructor(subject: ISubject<TObserver>) {
        this._observers = [];
        this._subject = subject;
    }

    /**
     * Attaches the observer to the subject
     * 
     * @param observer
     */
    public attachObserver(observer: TObserver): void {
        this._observers.push(observer);
    }

    /**
     * Detaches the observer from the subject.
     * @param observer 
     * @returns {boolean} true if an observer was indeed, detached.
     */
    public detachObserver(observer: TObserver): boolean {
        let idx: number = this._observers.indexOf(observer);
        if (idx > -1) {
            this._observers.splice(idx, 1);
            return true;
        }

        return false;
    }

    /**
     * Notifies all attached observers
     */
    public notify(): void {
        for (let i: number = 0; i < this._observers.length; i++) {
            this._subject.notify(this._observers[i]);
        }
    }

    /**
     * Disposes references of all observers.
     * This should be used if no more broadcasts will be made.
     */
    public dispose(): void {
        this._observers = [];
    }
}
