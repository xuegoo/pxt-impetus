/*
    MIT License

    Copyright (c) 2018 MuddyTummy Software LLC
*/

type _Map<K, V> = Map<K, V>;

namespace rt {
    export type ObjId = number | string | null;

    export interface IObjectWithId {
        readonly id: ObjId;
    }

    export interface IObjectWithUserData {
        readonly userData: any;
    }

    export interface INameableObject {
        name: string;
    }

    export interface IDisposableObject {
        dispose(): void;
    }

    export interface ICloneableObject {
        clone(recursive?: boolean): this;
        copy(source: this, recursive?: boolean): this;
    }

    export interface INameableObjectWithId extends IObjectWithId, INameableObject {
    }

    export function getUserData<T>(object: rt.IObjectWithUserData, key: string): T | undefined {
        // tslint:disable-next-line:no-string-literal
        return object.userData[key] as T;
    }

    export function setUserData<T>(object: rt.IObjectWithUserData, key: string, data?: T) {
        // tslint:disable-next-line:no-string-literal
        object.userData[key] = data;
    }

    export type ObjectConstructor<T = {}> = new (...args: any[]) => T;

    export type ObjectCreator<T> = (parameters?: any) => T;

    export abstract class DisposableObject {
        private _isDisposed = false;

        public dispose() {
            if (!this._isDisposed) {
                this._onDispose();
                this._isDisposed = true;
            }
        }

        protected abstract _onDispose(): void;
    }

    export abstract class ProxyObject<T> extends DisposableObject {
        private _reference: T;

        public get reference(): T { return this._reference; }

        constructor(reference: T) {
            super();

            this._reference = reference;
        }
    }

    export class ObjectFactory<T> {
        public static forgetAllInstances() {
            ObjectFactory._factories.forEach(factory => factory.forgetAllInstances());
        }

        private static _factories = new Array<ObjectFactory<any>>();

        private _creator: ObjectCreator<T>;
        private _objectcache = new Map<ObjId, T>();

        constructor(creator: ObjectCreator<T>) {
            this._creator = creator;
            ObjectFactory._factories.push(this);
        }

        public instantiate(parameters?: any): T {
            return this._creator(parameters);
        }

        public instantiateWithCache(parameters?: any): T {
            const hash = objectHash(parameters || {}, { algorithm: 'md5', encoding: 'hex', respectType: false } as any);

            let instance = this._objectcache.get(hash);
            if (!instance) {
                this._objectcache.set(hash, instance = this.instantiate(parameters));
            }

            return instance;
        }

        public forgetAllInstances() {
            this._objectcache.clear();
        }
    }
}
