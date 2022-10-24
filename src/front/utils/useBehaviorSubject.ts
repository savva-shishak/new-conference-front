import { useState, useEffect } from 'react';
import { BehaviorSubject } from 'rxjs';

export function useBehaviorSubject<T>(subject: BehaviorSubject<T>) {
    const [value, setValue] = useState(subject.getValue());

    useEffect(() => {
        const sub = subject.subscribe(setValue);
        return () => sub.unsubscribe();
    }, [subject]);

    return value;
}