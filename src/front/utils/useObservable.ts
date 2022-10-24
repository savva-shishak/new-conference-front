import { useEffect } from "react";
import { Observable } from "rxjs";

export function useObservable<T>(observable: Observable<T>, onEvent: (data: T) => {}) {
    useEffect(() => {
        const sub = observable.subscribe(onEvent);
        return () => sub.unsubscribe();
    }, [observable])
}