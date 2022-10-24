import { BehaviorSubject } from "rxjs";
import { Message } from "./entities/Message";
import { Peer } from "./entities/Peer";

export class Room {
    public participants: Peer[] = [];
    public messages: Message[] = [];
    public wavings = new BehaviorSubject<string[]>([]);
}