[@nbsolutions/observer - v1.0.1](../README.md) / [Exports](../modules.md) / [Subject](../modules/subject.md) / Subject

# Class: Subject<TObserver\>

[Subject](../modules/subject.md).Subject

Helper class that helps keeps track of observers.

Generally you will create an instance for a class that
wants to broadcast to observers.

The observer can be any interface, therefore a `notify` method
should be implemented, which will receive a concrete observer which
can be invoked.

## Type parameters

| Name |
| :------ |
| `TObserver` |

## Table of contents

### Constructors

- [constructor](subject.subject-1.md#constructor)

### Methods

- [attachObserver](subject.subject-1.md#attachobserver)
- [detachObserver](subject.subject-1.md#detachobserver)
- [dispose](subject.subject-1.md#dispose)
- [notify](subject.subject-1.md#notify)

## Constructors

### constructor

\+ **new Subject**<TObserver\>(`subject`: [*ISubject*](../interfaces/isubject.isubject-1.md)<TObserver\>): [*Subject*](subject.subject-1.md)<TObserver\>

#### Type parameters

| Name |
| :------ |
| `TObserver` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subject` | [*ISubject*](../interfaces/isubject.isubject-1.md)<TObserver\> | The class that is doing the notifying. |

**Returns:** [*Subject*](subject.subject-1.md)<TObserver\>

Defined in: [Subject.ts:16](https://github.com/nbsolutions-ca/observer/blob/aef25bf/src/Subject.ts#L16)

## Methods

### attachObserver

▸ **attachObserver**(`observer`: TObserver): *void*

Attaches the observer to the subject

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | TObserver |

**Returns:** *void*

Defined in: [Subject.ts:32](https://github.com/nbsolutions-ca/observer/blob/aef25bf/src/Subject.ts#L32)

___

### detachObserver

▸ **detachObserver**(`observer`: TObserver): *boolean*

Detaches the observer from the subject.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | TObserver |

**Returns:** *boolean*

true if an observer was indeed, detached.

Defined in: [Subject.ts:41](https://github.com/nbsolutions-ca/observer/blob/aef25bf/src/Subject.ts#L41)

___

### dispose

▸ **dispose**(): *void*

Disposes references of all observers.
This should be used if no more broadcasts will be made.

**Returns:** *void*

Defined in: [Subject.ts:64](https://github.com/nbsolutions-ca/observer/blob/aef25bf/src/Subject.ts#L64)

___

### notify

▸ **notify**(): *void*

Notifies all attached observers

**Returns:** *void*

Defined in: [Subject.ts:54](https://github.com/nbsolutions-ca/observer/blob/aef25bf/src/Subject.ts#L54)
