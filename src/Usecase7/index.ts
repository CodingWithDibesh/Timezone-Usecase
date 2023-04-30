import { execUsecase } from "../utils";
import { RRule, datetime } from "rrule";

const Usecase7 = {
    fromAndUntil: () => {
        console.log("\t Scenario 1: From x date until y date\n");
        const startingDate = datetime(2023, 4, 30);
        const endingDate = datetime(2023, 7, 30);
        const rule = new RRule({
            freq: RRule.WEEKLY,
            interval: 1,
            byweekday: [RRule.FR],
            // Any Date in UTC
            dtstart: startingDate,
            // Any Date in UTC but same as starting
            until: endingDate,
        });
        console.log(
            `Iteration of every friday from ${startingDate} till ${endingDate}:`,
            rule.all()
        );
        console.log(
            "For more examples visit: https://www.npmjs.com/package/rrule"
        );
        return rule.all();
    },
};

console.log("Begin - Usecase 7: Handling recurring dates and events\n");
execUsecase(Usecase7);
console.log("\nEnd - Usecase 7: Handling recurring dates and events");
