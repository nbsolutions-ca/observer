[@nbsolutions/observer - v0.0.1](../README.md) / [Exports](../modules.md) / [Broadcaster](../modules/broadcaster.md) / Broadcaster

# Class: Broadcaster<TObserver, T\>

[Broadcaster](../modules/broadcaster.md).Broadcaster

Helper class that helps keeps track of observers.

Generally you will create an instance for a class that
wants to broadcast to observers.

The observer can be any interface, therefore a `notify` method
should be implemented, which will receive a concrete observer which
can be invoked.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TObserver` | `TObserver` |
| `T` | `T` = `void` |

## Hierarchy

- `NBSObject`

  ↳ **Broadcaster**

## Implements

- `IBroadcast`<TObserver, T\>

## Table of contents

### Constructors

- [constructor](broadcaster.broadcaster-1.md#constructor)

### Methods

- [\_excludeNBSObjectAutoBindingsFor](broadcaster.broadcaster-1.md#_excludenbsobjectautobindingsfor)
- [\_skipNBSObjectAutoBind](broadcaster.broadcaster-1.md#_skipnbsobjectautobind)
- [attachObserver](broadcaster.broadcaster-1.md#attachobserver)
- [detachObserver](broadcaster.broadcaster-1.md#detachobserver)
- [dispose](broadcaster.broadcaster-1.md#dispose)
- [getClassName](broadcaster.broadcaster-1.md#getclassname)
- [notify](broadcaster.broadcaster-1.md#notify)
- [getClassName](broadcaster.broadcaster-1.md#getclassname)
- [isVoid](broadcaster.broadcaster-1.md#isvoid)

## Constructors

### constructor

• **new Broadcaster**<TObserver, T\>(`subject`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TObserver` | `TObserver` |
| `T` | `T` = `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subject` | `ISubject`<TObserver, T\> | The class that is doing the notifying. |

#### Overrides

NBSObject.constructor

#### Defined in

[src/Broadcaster.ts:17](https://github.com/nbsolutions-ca/observer/blob/ebdd229/src/Broadcaster.ts#L17)

## Methods

### \_excludeNBSObjectAutoBindingsFor

▸ `Protected` **_excludeNBSObjectAutoBindingsFor**(): `string`[]

#### Returns

`string`[]

#### Inherited from

NBSObject.\_excludeNBSObjectAutoBindingsFor

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:36

___

### \_skipNBSObjectAutoBind

▸ `Protected` **_skipNBSObjectAutoBind**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NBSObject.\_skipNBSObjectAutoBind

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:34

___

### attachObserver

▸ **attachObserver**(`observer`): `void`

Attaches the observer to the subject

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | `TObserver` |

#### Returns

`void`

#### Implementation of

IBroadcast.attachObserver

#### Defined in

[src/Broadcaster.ts:34](https://github.com/nbsolutions-ca/observer/blob/ebdd229/src/Broadcaster.ts#L34)

___

### detachObserver

▸ **detachObserver**(`observer`): `boolean`

Detaches the observer from the subject.

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | `TObserver` |

#### Returns

`boolean`

true if an observer was indeed, detached.

#### Implementation of

IBroadcast.detachObserver

#### Defined in

[src/Broadcaster.ts:43](https://github.com/nbsolutions-ca/observer/blob/ebdd229/src/Broadcaster.ts#L43)

___

### dispose

▸ **dispose**(): `void`

Disposes references of all observers.
This should be used if no more broadcasts will be made.

#### Returns

`void`

#### Defined in

[src/Broadcaster.ts:66](https://github.com/nbsolutions-ca/observer/blob/ebdd229/src/Broadcaster.ts#L66)

___

### getClassName

▸ **getClassName**(): `string`

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:26

___

### notify

▸ **notify**(`data`): `void`

Notifies all attached observers

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`void`

#### Implementation of

IBroadcast.notify

#### Defined in

[src/Broadcaster.ts:56](https://github.com/nbsolutions-ca/observer/blob/ebdd229/src/Broadcaster.ts#L56)

___

### getClassName

▸ `Static` **getClassName**(`o`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `any` |

#### Returns

`string`

#### Inherited from

NBSObject.getClassName

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:37

___

### isVoid

▸ `Static` **isVoid**<T\>(`o`): `boolean`

Returns true if the given value is `null` or `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` = `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `T` | Any value |

#### Returns

`boolean`

#### Inherited from

NBSObject.isVoid

#### Defined in

node_modules/@nbsolutions/object/types/NBSObject.d.ts:33
