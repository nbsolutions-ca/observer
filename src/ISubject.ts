
export interface ISubject<TObserver> {
    attachObserver(observer: TObserver): void;
    detachObserver(observer: TObserver): boolean;
    notify(observer: TObserver): void;
}
