# Storing time-related data in the database and backend data consumption

[👈 Back](../../ReadMe.md)

Storing time-related data in database and backend data consumption could be quite tricky because a ground level of belief is set before you begin working with timezone related data. To bring you in context lets say we have a table that stores created at but here's the catch we have users from different timezone and we use the created at data in our frontend to show users when their account was created. From the users POV we would want to see time when we created the account not when server registered it and definitely not in UTC time.

This is a problem we also talked about on [`Usecase-5`](../Usecase5/ReadMe.md) but there we didn't dive deeper in backend side. Here are the basic rule of thumb that could be followed to assure we are in a good pace while dealing with timezone related data in backend.

1. Store Date and time related data in UTC
    To completely remove timezone related issues from backend we need to keep time in a central format that could be easily transform and its possible using UTC. Select a proper format based on your database thus keeping you in sync.
    - **Oracle:** Use the `TIMESTAMP` WITH TIME ZONE data type as this can store the timezone of UTC.
    - **SQL Server:** Use the `DATETIMEOFFSET` data type, which can store the timezone of UTC.
    - **MySQL:** Use the `TIMESTAMP` data type which can include a timezone component.
    - **PostgreSQL:** Use the `TIMESTAMP` WITH TIME ZONE data type as this can store the timezone of UTC.
  
2. Display Time to user based on their timezone form the UTC data
    While we fetch date data all we need to do is pass the data along with the timezone it was stored at. If the response is in `ISO 8601` or `RFC3339` format then it's easy for frontend to manipulate as we did in [`Usecase-5`](../Usecase5/ReadMe.md). Frontend will convert the UTC time data as per the user's timezone which we have implemented in [`Usecase-1`](../Usecase1/ReadMe.md)

3. Store upcoming and past events in UTC
   Its better to keep data in sync thus storing the past and future events on UTC would make it much easier in terms of internationalization and timezone sync.

## References

- [How to Handle Database Timezones - Databasestar](https://www.databasestar.com/database-timezones)
