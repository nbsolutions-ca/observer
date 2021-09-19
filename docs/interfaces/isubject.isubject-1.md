[@nbsolutions/observer - v0.0.0](../README.md) / [Exports](../modules.md) / [ISubject](../modules/isubject.md) / ISubject

# Interface: ISubject<TObserver, T\>

[ISubject](../modules/isubject.md).ISubject

## Type parameters

| Name | Type |
| :------ | :------ |
| `TObserver` | `TObserver` |
| `T` | `T` = `void` |

## Table of contents

### Methods

- [attachObserver](isubject.isubject-1.md#attachobserver)
- [detachObserver](isubject.isubject-1.md#detachobserver)
- [notify](isubject.isubject-1.md#notify)

## Methods

### attachObserver

▸ **attachObserver**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | `TObserver` |

#### Returns

`void`

#### Defined in

[src/ISubject.ts:3](https://github.com/nbsolutions-ca/observer/blob/6bdbe67/src/ISubject.ts#L3)

___

### detachObserver

▸ **detachObserver**(`observer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | `TObserver` |

#### Returns

`boolean`

#### Defined in

[src/ISubject.ts:4](https://github.com/nbsolutions-ca/observer/blob/6bdbe67/src/ISubject.ts#L4)

___

### notify

▸ **notify**(`observer`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | `TObserver` |
| `data` | `T` |

#### Returns

`void`

#### Defined in

[src/ISubject.ts:5](https://github.com/nbsolutions-ca/observer/blob/6bdbe67/src/ISubject.ts#L5)
