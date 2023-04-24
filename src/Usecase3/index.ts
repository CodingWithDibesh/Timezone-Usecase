import { execUsecase, dateFromBackend } from "../utils";

// #region -> Human readable date time without using package
const TIME_DATA = [
    { units: "seconds", value: 60 },
    { units: "minutes", value: 60 },
    { units: "hours", value: 24 },
    { units: "days", value: 7 },
    { units: "weeks", value: 4.34524 },
    { units: "months", value: 12 },
    { units: "years", value: Number.POSITIVE_INFINITY },
];

const fromNow = (
    date: Date = new Date(),
    // @ts-ignore
    fmt: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat(undefined, {
        numeric: "auto",
    })
): string | undefined => {
    // Current TimeStamp
    const cDate = new Date() as any;
    // Getting time differences in milliseconds
    let inMs: number = ((date as any) - cDate) / 1e3;
    for (const interval of TIME_DATA) {
        if (Math.abs(inMs) < interval.value) {
            return fmt.format(
                Math.round(inMs),
                // @ts-ignore
                interval.units as Intl.RelativeTimeFormatUnit
            );
        }
        inMs /= interval.value;
    }
};
//#endregion

const Usecase3 = {
    scenario1: () => {
        console.log(
            "\t Scenario 1: To get human readable time of events (Past event of Future Event)\n"
        );
        const time = fromNow(new Date(dateFromBackend));
        console.log(
            "Original date: ",
            dateFromBackend,
            " to human readable format: ",
            time
        );
        return time;
    },
    scenario2: (
        inputTime: Date = new Date(dateFromBackend),
        showLogs: boolean = true
    ) => {
        if (showLogs)
            console.log(
                "\t Scenario 2: To get time differences which could be used in different comparison\n"
            );
        const tmpTime = inputTime as any;
        const currentTime = new Date() as any;
        //    Actual Comparison
        const msAgo = currentTime - tmpTime;
        const secsAgo = Number(Math.round(msAgo / 1e3).toFixed(1));
        const minAgo = Number(Math.round(msAgo / 6e4).toFixed(1));
        const hrAgo = Number(Math.round(msAgo / 36e5).toFixed(1));
        const dayAgo = Number(Math.round(msAgo / 864e5).toFixed(1));
        const weeksAgo = Number(Math.round(dayAgo / 7).toFixed(2));
        const yearAgo = new Date().getFullYear() - inputTime.getFullYear();
        const monthsAgo =
            yearAgo <= 1
                ? new Date().getMonth() - inputTime.getMonth()
                : Math.round(
                      yearAgo * 12 -
                          (new Date().getMonth() - inputTime.getMonth())
                  );

        const differences = {
            msAgo,
            secsAgo,
            minAgo,
            hrAgo,
            dayAgo,
            weeksAgo,
            monthsAgo,
            yearAgo,
        };
        if (showLogs)
            console.log(
                "Original date: ",
                dateFromBackend,
                " to differences in time: ",
                differences
            );
        return differences;
    },
    scenario3: () => {
        console.log(
            "\t Scenario 3: To calculate difference between times without time zone\n"
        );
        // Date value in Epoch without timezone
        const inputDate = 1381446215;
        // For calculation we can use Scenario 2
        const differences = Usecase3.scenario2(new Date(inputDate), false);
        console.log(
            "Original date: ",
            dateFromBackend,
            " to differences in time without timezone: ",
            differences
        );
    },
    scenario4: () => {
        console.log("\t Scenario 4: All above scenarios with package\n");
    },
};

console.log(
    "Begin - Usecase 3: Date time calculations to get the difference in time; with/without timezone\n"
);
execUsecase(Usecase3);
console.log(
    "\nEnd - Usecase 3: Date time calculations to get the difference in time; with/without timezone"
);
