/**
 * @description Recursion to execute all the usecase
 */
export function execUsecase(usecase: Object) {
    for (const key in usecase) {
        //    @ts-ignore
        if (typeof usecase[key] === "function") {
            //    @ts-ignore
            usecase[key]();
            //    @ts-ignore
        } else if (typeof usecase[key] === "object") {
            //    @ts-ignore
            execUsecase(usecase[key]);
        }
    }
}

// Date in UTC but RFC3339 format an example of date from backend
export const dateFromBackend = "2023-04-16T12:30:15-05:00";
