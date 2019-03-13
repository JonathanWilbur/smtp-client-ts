# TypeScript SMTP Client

Author: [Jonathan M. Wilbur](https://jonathan.wilbur.space) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
Copyright Year: 2019
License: [MIT License](https://mit-license.org/)

## Usage

```typescript
import { Client } from "../source/Client";
import { Response } from "../source/Response";

// I am using port 26 here, because my ISP blocks ports 25.
// I specifically added a listener on port 26 on my email server for the
// purposes of testing this.
const client : Client = new Client("email.wilbur.space", 26);
(async () => {
    const connectResponse : Response = await client.connect();
    console.log(`${connectResponse.code} ${connectResponse.lines.toString()}`);

    const ehloResponse : Response = await client.ehlo("bigboiiii.com");
    console.log(`${ehloResponse.code} ${ehloResponse.lines.map((line) => line.toString()).join("\r\n")}`);

    console.log("MAIL");
    const mailResponse : Response = await client.mail("bigboi@wuuut.com");
    console.log(`${mailResponse.code} ${mailResponse.lines.toString()}`);

    console.log("RCPT");
    const rcptResponse : Response = await client.rcpt("jonathan@wilbur.space");
    console.log(`${rcptResponse.code} ${rcptResponse.lines.toString()}`);

    console.log("DATA");
    const dataResponse : Response = await client.data();
    console.log(`${dataResponse.code} ${dataResponse.lines.toString()}`);

    console.log("writing data...");
    const writeResponse : Response = await client.writeData("WHO WANTS A BODY MASSAGE?");
    console.log(`${writeResponse.code} ${writeResponse.lines.toString()}`);

    console.log("QUIT");
    const quitResponse : Response = await client.quit();
    console.log(`${quitResponse.code} ${quitResponse.lines.toString()}`);

})();
```

## Notes

For testing, I had to change my test email server to listen on port 26, because
my ISP blocks outbound port 25 traffic.

In my testing, it appears that the `RCPT` command hangs for tens of seconds.
This might only be specific to my testing environment, which was testing
against Postfix via plaintext SMTP on port 26 (not a typo).