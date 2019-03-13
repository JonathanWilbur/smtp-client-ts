import * as net from "net";
import { Response } from "./Response";
export declare class Connection {
    readonly socket: net.Socket;
    private readonly scanner;
    constructor(socket: net.Socket);
    writeCommand(command: string, args?: string): void;
    writeData(message: string): void;
    readResponse(): Promise<Response>;
    ignorePreviousData(): void;
    disconnect(): void;
}
