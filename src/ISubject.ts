
export interface ISubject<TObserver, T = void> {
    attachObserver(observer: TObserver): void;
    detachObserver(observer: TObserver): boolean;
    notify(observer: TObserver, data: T): void;
}
