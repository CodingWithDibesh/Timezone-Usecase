# Date conversion between different formats

[👈 Back](../../ReadMe.md)

💻 **How to check:** Pointing yourself at root of the project run `yarn uc2` and you will see the code execution of all the formats with and without library.

Here are some of the commonly used formats.

1. **ISO 8601 format:** `YYYY-MM-DDTHH:MM:SSZ` -> `2023-04-22T09:30:00Z`
2. **American format:** `MM/DD/YYYY` or `MM/DD/YY` -> `04/22/2023` or `04/22/23`
3. **European format:** `DD/MM/YYYY` or `DD/MM/YY` -> `22/04/2023` or `22/04/23`
4. **Written-out format:** `Month DD, YYYY` -> `April 22, 2023`
5. **Unix timestamp:** `Number of seconds since January 1, 1970, at 00:00:00 UTC` -> `1,768,167,600`
6. **24-hour clock:** `HH:MM:SS` -> `09:30:00`
7. **RFC 2822 format:** `Day, DD Mon YYYY HH:MM:SS +ZZZZ` -> `Fri, 22 Apr 2023 09:30:00 +0000`
8. **Long date format:** `Day, Month DD, YYYY` -> `Friday, April 22, 2023`

Formats based on nationalities.

1. **United States:** `MM/DD/YYYY` or `MM/DD/YY` (for example, 04/22/2023 or 04/22/23)
The United States also uses a 12-hour clock format with AM and PM, such as 9:30 AM or 2:45 PM.

2. **United Kingdom:** `DD/MM/YYYY` or `DD/MM/YY` (for example, 22/04/2023 or 22/04/23)
The United Kingdom typically uses a 24-hour clock format, such as 09:30 or 14:45.

3. **Canada:** `MM/DD/YYYY` or `DD/MM/YYYY` (both formats are used depending on the region)
Canada also typically uses a 12-hour clock format with AM and PM, such as 9:30 AM or 2:45 PM.

4. **Australia:** `DD/MM/YYYY` or `DD/MM/YY` (for example, 22/04/2023 or 22/04/23)
Australia typically uses a 24-hour clock format, such as 09:30 or 14:45.

5. **Japan:** `YYYY年MM月DD日` (for example, 2023年04月22日)
Japan typically uses a 24-hour clock format, such as 09:30 or 14:45.

6. **China:** `YYYY年MM月DD日` (for example, 2023年04月22日)
China typically uses a 24-hour clock format, such as 09:30 or 14:45.

7. **Germany:** `DD.MM.YYYY` (for example, 22.04.2023)
Germany typically uses a 24-hour clock format, such as 09:30 or 14:45.

## References

1. [RFC3339 standards docs](https://www.rfc-editor.org/rfc/rfc3339)
2. [ISO 8601 standards docs](https://www.w3.org/TR/NOTE-datetime)
3. [MDN - toLocaleDateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
