
import {NBSObject} from '@nbsolutions/object';
import { IBroadcast, ISubject } from '@nbsolutions/interfaces';

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
export class Broadcaster<TObserver, T = void> extends NBSObject implements IBroadcast<TObserver, T> {
    private $observers: TObserver[];
    private $subject: ISubject<TObserver, T>;

    /**
     * 
     * @param subject The class that is doing the notifying.
     */
    public constructor(subject: ISubject<TObserver, T>) {
        super();
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
    public notify(data: T): void {
        for (let i: number = 0; i < this.$observers.length; i++) {
            this.$subject.notify(this.$observers[i], data);
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
