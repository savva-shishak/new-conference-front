import { Peer } from "./Peer";

export interface File {
    name: string;
    size: string;
}

export class Message {
    constructor(
        public id: string,
        public text: string,
        public author: Peer,
        public files: File[],
    ) {}
}