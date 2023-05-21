

import protobuf from 'protobufjs'
import WebSocket from 'ws'

export default class Socket {
    wsUrl: string;
    token: string;
    protobufRoot: null | any;
    ws: WebSocket|null;
    constructor(feedUrl: string, token: string) {
        this.wsUrl = feedUrl;
        this.token = token;
        this.protobufRoot = null;
        this.initProtobuf();
        this.ws=null ;
    }

    async initProtobuf() {
        this.protobufRoot = await protobuf.load('./MarketDataFeed.proto');
        console.log("Protobuf part initialization complete");
    }

    decodeProfobuf(buffer: Buffer) {
        if (this.protobufRoot == null) {
            console.warn("Protobuf part not initialized yet!");
            return null;
        }

        const FeedResponse = this.protobufRoot.lookupType("com.upstox.marketdatafeeder.rpc.proto.FeedResponse");
        return FeedResponse.decode(buffer);
    }

    run() {
        try {
            this.ws = new WebSocket(this.wsUrl, {
                headers: {
                    "Api-Version": "2.0",
                    "Authorization": "Bearer " + this.token
                },
                followRedirects: true
            })
        } catch (e) {
            console.log(e);
        }
    }

}