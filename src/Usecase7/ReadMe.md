# Handling recurring dates and events

[👈 Back](../../ReadMe.md)

🤓 **But first what are recurring dates and events?**
Events that occurs in certain interval of tate and time. If we were to create interval that syncs between different timezone then we would need to approach a middle ground i.e UTC for timezone manipulation.

💻 **How to check:** Pointing yourself at root of the project run `yarn uc7` and you will see the code execution.

🤔 Creating it from the ground needs to solve lots of of moving pieces and would be equal to reinventing the wheel thus we will be using package for this problem which also solves the timezone issue.

`RRule` : Link on [npmjs.com](https://www.npmjs.com/package/rrule) is a light weight package which helps to solve this problem.
