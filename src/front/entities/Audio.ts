import { v4 } from 'uuid';

export class Audio {
    public id = v4()
    constructor(public track: MediaStreamTrack) {}
}