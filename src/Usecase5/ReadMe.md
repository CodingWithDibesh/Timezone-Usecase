# Displaying date time data based on local

[👈 Back](../../ReadMe.md)

`Usecase-5` itself is a project thus you might need to install dependencies if you haven't installed. If you already ran `yarn install` on root then the install for this project should also auto trigger.

💻 **How to check:** Pointing yourself at root of the project run `yarn uc5` or simply run `yarn dev` at root of `Usecase5`  and you will see the code execution.

We might come across situations where we need to show time based on user's local instead for having a predefined local as shown in [`Usecase1`](../Usecase1/ReadMe.md).

Lets see a concrete example: Lets imagine where we have `senTime` and `receivedTime` to be stored on backend which will be converted to `UTC+0` by backend and stored in `database` but we need to show the sent time and received time to two different users at different timezone and that we are completely unaware about the user's local and timezone.

**In a nutshell we need following things to happen:**

- Show sent time to **User1** as per their local
- Send the current time data with timezone information to backend
- Receive the received time from backend for User2 (Which might be slightly different because of processing time)
- Show the received time to **User2** as per their local

A short illustration of scenario with example where `User1` is from **Nepal** and `User2` is from **Japan**.

<pre>

    Send and show
    User1:[Nepal Time] -------------|
                                    V
                      Backend:[UTC 0] Retrieve, Send and store
                                    ^
    User2:[Japan Time] -------------|
    Retrieve and Show
</pre>

As you can see the despite twe could simply send UTC but display the sent time as per the users location.
