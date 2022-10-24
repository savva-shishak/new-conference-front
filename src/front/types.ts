import { TypeOptions, ToastPosition } from 'react-toastify';
import { ReactNode } from "react";

export type MediaStatus = 'not' | 'stop' | 'play';

export type ControlMediaStatus = 'not' | {
    status: 'stop' | 'play',
    onToggle: () => {};
};

export interface ScreenMode {
    name: string,
    icon: string,
    arrows: (position: number) => { step: number, left: boolean, right: boolean },
    width: number,
    height: number,
    x: (index: number) => number,
    y: (index: number) => number,
}

export interface Notify {
    position: ToastPosition,
    type: TypeOptions,
    content: ReactNode,
}