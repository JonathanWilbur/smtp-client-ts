# Wildboar SMTP Client

Author: [Jonathan M. Wilbur](https://jonathan.wilbur.space) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
Copyright Year: 2019
License: [MIT License](https://mit-license.org/)

# Notes

For testing, I had to change my test email server to listen on port 26, because
my ISP blocks outbound port 25 traffic.

In my testing, it appears that the `RCPT` command hangs for tens of seconds.
This might only be specific to my testing environment, which was testing
against Postfix via plaintext SMTP on port 26 (not a typo).