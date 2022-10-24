import { v4 } from 'uuid';
import { ControlMediaStatus, MediaStatus } from '../types';

export class WindowModel {
    public id = v4();

    constructor(
        public track: MediaStreamTrack | null,
        public name: string,
        public avatar: 'user' | 'screen' | string,
        public status: MediaStatus,
        public waving = false,
        public audioStatus: ControlMediaStatus = 'not',
    ) {}
}