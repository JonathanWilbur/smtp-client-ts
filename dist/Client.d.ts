import { Response } from "./Response";
export declare class Client {
    readonly host: string;
    readonly port: number;
    private connection;
    constructor(host: string, port: number);
    connect(): Promise<Response>;
    disconnect(): void;
    helo(domain: string): Promise<Response>;
    ehlo(domainOrAddressLiteral: string): Promise<Response>;
    mail(address: string): Promise<Response>;
    rcpt(address: string): Promise<Response>;
    data(): Promise<Response>;
    writeData(message: string): Promise<Response>;
    rset(): Promise<Response>;
    vrfy(identifier: string): Promise<Response>;
    expn(identifier: string): Promise<Response>;
    help(topic?: string): Promise<Response>;
    noop(argument: string): Promise<Response>;
    quit(): Promise<Response>;
}
