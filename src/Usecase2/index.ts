import dayjs from "dayjs";
import { dateFromBackend, execUsecase } from "../utils";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

const Usecase2 = {
    withoutPackage: {
        // Common formats
        commonFormats: {
            ISO8601: () => {
                console.log("\tWithout Package - Common Format - [ISO8601]\n");
                const time = new Date(dateFromBackend).toISOString();
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to ISO8601: ",
                    time
                );
                return time;
            },
            American: () => {
                console.log(
                    "\n\tWithout Package - American Format - [MM/DD/YYYY or MM/DD/YY]\n"
                );
                const format1 = new Date(dateFromBackend).toLocaleDateString(
                    "en-US"
                );
                const format2 = new Date(dateFromBackend).toLocaleDateString(
                    "en-US",
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to American Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            European: () => {
                console.log(
                    "\n\tWithout Package - European Format - [DD/MM/YYYY or DD/MM/YY]\n"
                );
                const format1 = new Date(dateFromBackend).toLocaleDateString(
                    "CA"
                );
                const format2 = new Date(dateFromBackend).toLocaleDateString(
                    "CA",
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to European Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            WrittenOut: () => {
                console.log(
                    "\n\tWithout Package - Written Out Format - [Month DD, YYYY]\n"
                );
                const result = new Date(dateFromBackend).toLocaleDateString(
                    undefined,
                    {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Written Out Format: ",
                    result
                );
                return result;
            },
            UnixTimestamp: () => {
                console.log(
                    "\n\tWithout Package - Common Format - [UnixTimestamp]\n"
                );
                const time = Date.parse(dateFromBackend);
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to UnixTimestamp: ",
                    time
                );
                return time;
            },
            "24Hours": () => {
                console.log(
                    "\n\tWithout Package - 24Hours Format - [HH:MM:SS]\n"
                );
                const time = new Date(dateFromBackend).toLocaleTimeString(
                    undefined,
                    {
                        hour12: false,
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to 24Hours format: ",
                    time
                );
                return time;
            },
            RFC2822: () => {
                console.log(
                    "\n\tWithout Package - RFC2822 Format - [Day, DD Mon YYYY HH:MM:SS +ZZZZ]\n"
                );
                const inpDate = new Date(dateFromBackend);
                const timeFormat = ` ${inpDate.toLocaleDateString("en-GB", {
                    month: "short",
                    day: "2-digit",
                    weekday: "short",
                })} ${inpDate.getFullYear()} ${inpDate.toLocaleTimeString(
                    "en-GB",
                    {
                        hour12: false,
                    }
                )} ${inpDate.getTimezoneOffset()}`;
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to RFC2822 format: ",
                    timeFormat
                );
                return timeFormat;
            },
            LongDate: () => {
                console.log(
                    "\n\tWithout Package - Long Date Format - [Day, Month DD, YYYY]\n"
                );
                const time = new Date(dateFromBackend).toLocaleDateString(
                    undefined,
                    {
                        day: "2-digit",
                        weekday: "short",
                        month: "long",
                        year: "numeric",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to RFC2822 format: ",
                    time
                );
                return time;
            },
        },
        // Based on nationalities
        nationalities: {
            UnitedStates: () => {
                console.log(
                    "\n\tWithout Package - United States Format - [MM/DD/YYYY or MM/DD/YY]\n"
                );
                const format1 = new Date(dateFromBackend).toLocaleDateString(
                    "en-US"
                );
                const format2 = new Date(dateFromBackend).toLocaleDateString(
                    "en-US",
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to United States Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            UnitedKingdom: () => {
                console.log(
                    "\n\tWithout Package - United Kingdom Format - [DD/MM/YYYY or DD/MM/YY]\n"
                );
                const format1 = new Date(dateFromBackend).toLocaleDateString(
                    "en-GB"
                );
                const format2 = new Date(dateFromBackend).toLocaleDateString(
                    "en-GB",
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to United Kingdom Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            Canada: () => {
                console.log(
                    "\n\tWithout Package - Canada Format - [MM/DD/YYYY or DD/MM/YYYY]\n"
                );
                const format1 = new Date(dateFromBackend).toLocaleDateString(
                    "en"
                );
                const format2 = new Date(dateFromBackend).toLocaleDateString(
                    "CA",
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Canada Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            Australia: () => {
                console.log(
                    "\n\tWithout Package - Australia Format - [DD/MM/YYYY or DD/MM/YY]\n"
                );
                const format1 = new Date(dateFromBackend).toLocaleDateString(
                    "AU"
                );
                const format2 = new Date(dateFromBackend).toLocaleDateString(
                    "AU",
                    {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Australia Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            Japan: () => {
                console.log(
                    "\n\tWithout Package - Japan Format - [YYYY年MM月DD日]\n"
                );
                const time = new Date(dateFromBackend).toLocaleDateString(
                    "ja-JP",
                    {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        weekday: "long",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Japan Format: ",
                    time
                );
                return {
                    time,
                };
            },
            China: () => {
                console.log(
                    "\n\tWithout Package - China Format - [YYYY年MM月DD日]\n"
                );
                const time = new Date(dateFromBackend).toLocaleDateString(
                    "zh-CH",
                    {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        weekday: "long",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to China Format: ",
                    time
                );
                return {
                    time,
                };
            },
            Germany: () => {
                console.log(
                    "\n\tWithout Package - Germany Format - [DD.MM.YYYY]\n"
                );
                const time = new Date(dateFromBackend).toLocaleDateString(
                    "de-DE",
                    {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                        // weekday: "long",
                        hour12: false,
                        // hour: "numeric",
                        // minute: "numeric",
                        // timeZone: "Europe/Berlin",
                    }
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Germany Format: ",
                    time
                );
                return {
                    time,
                };
            },
        },
    },
    withPackage: {
        // Common formats
        commonFormats: {
            ISO8601: () => {
                console.log("\n\tWith Package - Common Format - [ISO8601]\n");
                const time = dayjs(dateFromBackend).toISOString();
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to ISO8601: ",
                    time
                );
                return time;
            },
            American: () => {
                console.log(
                    "\n\tWith Package - American Format - [MM/DD/YYYY or MM/DD/YY]\n"
                );
                const format1 = dayjs(dateFromBackend).format("MM/DD/YYYY");
                const format2 = dayjs(dateFromBackend).format("MM/DD/YY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to American Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            European: () => {
                console.log(
                    "\n\tWith Package - European Format - [DD/MM/YYYY or DD/MM/YY]\n"
                );
                const format1 = dayjs(dateFromBackend).format("DD/MM/YYYY");
                const format2 = dayjs(dateFromBackend).format("DD/MM/YY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to European Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            WrittenOut: () => {
                console.log(
                    "\n\tWith Package - Written Out Format - [Month DD, YYYY]\n"
                );
                const result = dayjs(dateFromBackend).format("MMMM DD, YYYY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Written Out Format: ",
                    result
                );
                return result;
            },
            UnixTimestamp: () => {
                console.log(
                    "\n\tWith Package - Common Format - [UnixTimestamp]\n"
                );
                const time = dayjs(dateFromBackend).unix();
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to UnixTimestamp: ",
                    time
                );
                return time;
            },
            "24Hours": () => {
                console.log("\n\tWith Package - 24Hours Format - [HH:MM:SS]\n");
                const time = dayjs(dateFromBackend).format("HH:MM:SS");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to 24Hours format: ",
                    time
                );
                return time;
            },
            RFC2822: () => {
                console.log(
                    "\n\tWith Package - RFC2822 Format - [Day, DD Mon YYYY HH:MM:SS +ZZZZ]\n"
                );
                const time = dayjs(dateFromBackend).format(
                    "ddd, DD MMM YYYY HH:mm:ss ZZ"
                );
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to RFC2822 format: ",
                    time
                );
                return time;
            },
            LongDate: () => {
                console.log(
                    "\n\tWith Package - Long Date Format - [Day, Month DD, YYYY]\n"
                );
                const time = dayjs(dateFromBackend).format("ddd, MMM DD, YYYY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to RFC2822 format: ",
                    time
                );
                return time;
            },
        },
        // Based on nationalities
        nationalities: {
            UnitedStates: () => {
                console.log(
                    "\n\tWith Package - United States Format - [MM/DD/YYYY or MM/DD/YY]\n"
                );
                const format1 = dayjs(dateFromBackend)
                    .tz("America/New_York")
                    .format("MM/DD/YYYY");
                const format2 = dayjs(dateFromBackend)
                    .tz("America/New_York")
                    .format("MM/DD/YY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to United States Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            UnitedKingdom: () => {
                console.log(
                    "\n\tWith Package - United Kingdom Format - [DD/MM/YYYY or DD/MM/YY]\n"
                );
                const format1 = dayjs(dateFromBackend).format("DD/MM/YYYY");
                const format2 = dayjs(dateFromBackend).format("DD/MM/YY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to United Kingdom Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            Canada: () => {
                console.log(
                    "\n\tWith Package - Canada Format - [MM/DD/YYYY or DD/MM/YYYY]\n"
                );
                const format1 = dayjs(dateFromBackend).format("MM/DD/YYYY");
                const format2 = dayjs(dateFromBackend).format("DD/MM/YYYY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Canada Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            Australia: () => {
                console.log(
                    "\n\tWith Package - Australia Format - [DD/MM/YYYY or DD/MM/YY]\n"
                );
                const format1 = dayjs(dateFromBackend).format("DD/MM/YYYY");
                const format2 = dayjs(dateFromBackend).format("DD/MM/YY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Australia Format: ",
                    format1,
                    " or ",
                    format2
                );
                return {
                    format1,
                    format2,
                };
            },
            Japan: () => {
                console.log(
                    "\n\tWith Package - Japan Format - [YYYY年MM月DD日]\n"
                );
                const time =
                    dayjs(dateFromBackend).format("YYYY年MM月DD日 HH:mm");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Japan Format: ",
                    time
                );
                return {
                    time,
                };
            },
            China: () => {
                console.log(
                    "\n\tWith Package - China Format - [YYYY年MM月DD日]\n"
                );
                const time =
                    dayjs(dateFromBackend).format("YYYY年MM月DD日 HH:mm");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to China Format: ",
                    time
                );
                return {
                    time,
                };
            },
            Germany: () => {
                console.log(
                    "\n\tWith Package - Germany Format - [DD.MM.YYYY]\n"
                );
                const time = dayjs(dateFromBackend).format("DD.MM.YYYY");
                console.log(
                    "Original date: ",
                    dateFromBackend,
                    " to Germany Format: ",
                    time
                );
                return {
                    time,
                };
            },
        },
    },
};

console.log("Begin - Usecase 2: Date conversion between different formats\n");
execUsecase(Usecase2);
console.log("\nEnd - Usecase 2: Date conversion between different formats");
