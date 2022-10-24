import { Consumer } from "mediasoup-client/lib/Consumer";
import { Producer } from "mediasoup-client/lib/Producer";
import { Transport } from "mediasoup-client/lib/Transport";

export class Media {
    public producers: Producer[] = [];
    public consumers: Consumer[] = [];
    public recvTransport!: Transport;
    public sendTransport!: Transport;
}