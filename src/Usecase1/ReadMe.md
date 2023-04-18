# Date time conversion between different timezones

[👈 Back](../../ReadMe.md)

Lets assume a situation where we are building application and we need to convert time data for different regions. We are receiving time data in `UTC` as per our backend standards and will send data in `UTC` as well.

1. **Scenario 1:** Convert UTC time to respected time data based on timezone
2. **Scenario 2:** Convert current time data to UTC
3. **Scenario 3:** Above scenarios using packages

💻 Pointing yourself at root of the project run `yarn uc1` and you will see the code execution of all three scenarios.

**🤓 Nerd Talks:**
**Javascript** uses `ISO 8601` standard format to handel data but **Go lang** uses `RFC3339` standard format to handel date data which is a profile of `ISO 8601`. Thus we can use `Date.parse` function in ***Javascript*** to parse the date from ***Go lang*** without an issue.

## References

1. [RFC3339 standards docs](https://www.rfc-editor.org/rfc/rfc3339)
2. [ISO 8601 standards docs](https://www.w3.org/TR/NOTE-datetime)
