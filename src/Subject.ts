
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
    private $observers: TObserver[];
    private $subject: ISubject<TObserver>;

    /**
     * 
     * @param subject The class that is doing the notifying.
     */
    public constructor(subject: ISubject<TObserver>) {
        this.$observers = [];
        this.$subject = subject;
    }

    /**
     * Attaches the observer to the subject
     * 
     * @param observer
     */
    public attachObserver(observer: TObserver): void {
        this.$observers.push(observer);
    }

    /**
     * Detaches the observer from the subject.
     * @param observer 
     * @returns {boolean} true if an observer was indeed, detached.
     */
    public detachObserver(observer: TObserver): boolean {
        let idx: number = this.$observers.indexOf(observer);
        if (idx > -1) {
            this.$observers.splice(idx, 1);
            return true;
        }

        return false;
    }

    /**
     * Notifies all attached observers
     */
    public notify(): void {
        for (let i: number = 0; i < this.$observers.length; i++) {
            this.$subject.notify(this.$observers[i]);
        }
    }

    /**
     * Disposes references of all observers.
     * This should be used if no more broadcasts will be made.
     */
    public dispose(): void {
        this.$observers = [];
    }
}
