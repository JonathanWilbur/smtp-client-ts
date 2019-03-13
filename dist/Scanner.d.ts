import * as net from "net";
import { Response } from "./Response";
export declare class Scanner {
    readonly socket: net.Socket;
    private static readonly MAXIMUM_LINE_LENGTH;
    private static readonly LINE_TERMINATOR;
    private receivedData;
    private bufferedLines;
    private scanCursor;
    constructor(socket: net.Socket);
    enqueueData(data: Buffer): void;
    private scanLine;
    scanResponse(): Response | null;
}
