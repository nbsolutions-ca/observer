
import {ISubject} from '@nbsolutions/interfaces';
import {Broadcaster} from '../src/Broadcaster';

interface IConcreteObserver {
    onConcreteSubjectNotify(subject: ConcreteSubject, data: number): void;
}

class Foo implements IConcreteObserver {
    onConcreteSubjectNotify(subject: ConcreteSubject) {}
}

class ConcreteSubject implements ISubject<IConcreteObserver, number> {
    private $subject: Broadcaster<IConcreteObserver, number>;

    public constructor() {
        this.$subject = new Broadcaster<IConcreteObserver, number>(this);
    }

    public attachObserver(observer: IConcreteObserver): void {
        this.$subject.attachObserver(observer);
    }

    public detachObserver(observer: IConcreteObserver): boolean {
        return this.$subject.detachObserver(observer);
    }

    public notify(observer: IConcreteObserver, data: number): void {
        observer.onConcreteSubjectNotify(this, data);
    }

    public emit(): void {
        this.$subject.notify(123);
    }
}

describe('observers', () => {
    it('onConcreteSubjectNotify is called with subject', () => {
        let subject: ConcreteSubject = new ConcreteSubject();
        let foo: Foo = new Foo();

        subject.attachObserver(foo);

        jest.spyOn(foo, 'onConcreteSubjectNotify');
        subject.emit();

        expect(foo.onConcreteSubjectNotify).toHaveBeenCalledWith(subject, 123);
    });
});
