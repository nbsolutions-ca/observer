[@nbsolutions/observer - v1.0.1](../README.md) / [Exports](../modules.md) / [ISubject](../modules/isubject.md) / ISubject

# Interface: ISubject<TObserver\>

[ISubject](../modules/isubject.md).ISubject

## Type parameters

| Name |
| :------ |
| `TObserver` |

## Table of contents

### Methods

- [attachObserver](isubject.isubject-1.md#attachobserver)
- [detachObserver](isubject.isubject-1.md#detachobserver)
- [notify](isubject.isubject-1.md#notify)

## Methods

### attachObserver

▸ **attachObserver**(`observer`: TObserver): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | TObserver |

**Returns:** *void*

Defined in: [ISubject.ts:3](https://github.com/nbsolutions-ca/observer/blob/aef25bf/src/ISubject.ts#L3)

___

### detachObserver

▸ **detachObserver**(`observer`: TObserver): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | TObserver |

**Returns:** *boolean*

Defined in: [ISubject.ts:4](https://github.com/nbsolutions-ca/observer/blob/aef25bf/src/ISubject.ts#L4)

___

### notify

▸ **notify**(`observer`: TObserver): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | TObserver |

**Returns:** *void*

Defined in: [ISubject.ts:5](https://github.com/nbsolutions-ca/observer/blob/aef25bf/src/ISubject.ts#L5)
