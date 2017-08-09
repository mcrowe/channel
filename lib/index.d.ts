export interface IListener<T> {
    (val: T): void;
}
export default class Channel<T> {
    listeners: IListener<T>[];
    subscribe(fn: IListener<T>): () => void;
    publish(val: T): void;
}
