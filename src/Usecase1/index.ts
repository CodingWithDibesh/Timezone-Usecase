import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

console.log(
    "Begin - Usecase 1: Date time conversion between different timezones\n"
);
// Date in UTC but RFC3339 format an example of date from backend
const dateFromBackend = "2023-04-16T12:30:15-05:00";

const UseCase1 = {
    scenario1: () => {
        // NOTE: This Scenario reflects situation where we get date from backend and use it to display time in frontend
        console.log("\tScenario1: UTC time to different timezone\n");
        // NOTE: toLocaleTimeString is used to manipulate time whereas toLocaleDateString is used to manipulate date and time
        const date = new Date(dateFromBackend),
            londonDate = date.toLocaleDateString("en-GB", {
                timeZone: "Europe/London",
                hour: "2-digit",
                hour12: false,
                minute: "2-digit",
                second: "2-digit",
            }),
            japanTime = date.toLocaleTimeString("ja", {
                timeZone: "Japan",
                hour: "2-digit",
                hour12: false,
                minute: "2-digit",
                second: "2-digit",
            }),
            // IF Local is not passed then it refers to my current local and returns result as per my timezone
            toMyTime = date.toLocaleDateString(undefined, {
                hour: "2-digit",
                hour12: false,
                minute: "2-digit",
                second: "2-digit",
            });

        console.log(
            "Original date: ",
            dateFromBackend,
            " to My PC Local: ",
            toMyTime
        );
        console.log(
            "Original date: ",
            dateFromBackend,
            " to London Time: ",
            londonDate
        );
        console.log(
            "Original date: ",
            dateFromBackend,
            "  to Japan Time: ",
            japanTime
        );
    },
    scenario2: () => {
        console.log("\n\tScenario2: Convert current time data to UTC\n");
        // NOTE: .toISOString returns date in ISO8601 format i.e YYYY-MM-DDTHH:mm:ss.sssZ format and by default new Date() also returns date in same format
        const currentTime = new Date();
        console.log(
            "Current Time: ",
            currentTime,
            " to UTC: ",
            currentTime.toLocaleDateString(undefined, {
                hour: "2-digit",
                hour12: false,
                minute: "2-digit",
                second: "2-digit",
            })
        );
    },
    scenario3: () => {
        console.log("\n\tScenario3: Above scenarios with packages\n");
        //  Scenario 1
        dayjs.extend(utc);
        dayjs.extend(timezone);
        const londonDate = dayjs(dateFromBackend)
            .tz("Europe/London")
            .format("MM/DD/YYYY, HH:mm:ss");
        const japanTime = dayjs(dateFromBackend).tz("Japan").format("HH:mm:ss");
        const toMyTime = dayjs(dateFromBackend)
            .tz()
            .format("MM/DD/YYYY, HH:mm:ss");

        console.log(
            "Original date: ",
            dateFromBackend,
            " to My PC Local: ",
            toMyTime
        );
        console.log(
            "Original date: ",
            dateFromBackend,
            " to London Time: ",
            londonDate
        );
        console.log(
            "Original date: ",
            dateFromBackend,
            "  to Japan Time: ",
            japanTime
        );

        //  Scenario 2
        const currentTime = dayjs.utc();
        console.log(
            "\nCurrent Time: ",
            currentTime.toISOString(),
            " to UTC: ",
            currentTime.format("MM/DD/YYYY, hh:mm:ss")
        );
    },
};

UseCase1.scenario1();
UseCase1.scenario2();
UseCase1.scenario3();

console.log(
    "\nEnd - Usecase 1: Date time conversion between different timezones"
);
