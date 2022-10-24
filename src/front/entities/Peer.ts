import { ControlMediaStatus } from "../types";

export class Peer {
    constructor(
        public id: string,
        public displayName: string,
        public avatar: string,
        public video: ControlMediaStatus = 'not',
        public audio: ControlMediaStatus = 'not',
        public screen: ControlMediaStatus = 'not',
    ) {}
}