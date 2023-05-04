import { Link } from "react-router-dom";
import ShowOpenSensors from "../../components";
import { FormEvent, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const User1Page = () => {
    const [date, setDate] = useState<Date>(new Date());
    const handelFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!date) {
            alert("Please select a date 😜");
            return;
        }
        const resp = await fetch("http://localhost:2468/send", {
            method: "POST",
            body: JSON.stringify({
                sendDate: date,
            }),
        }).then((resp) => resp.json());
        if (resp.status) {
            setDate(new Date());
            alert("Date sent successfully ✅");
            return;
        }
        alert("Problem sending date ❌");
    };

    return (
        <>
            <div className="bg-gray-200 text-gray-800 shadow-lg rounded-xl m-10 p-10 text-center">
                Hi there, You are 🧙‍♂️ User1. <br />
                Send your current time to backend? <br />
                <Link to="/" className="text-blue-500">
                    Or Navigate 👈 back
                </Link>
            </div>
            <div className="m-10 text-center">
                <p className="mb-4 font-medium text-lg">
                    If you haven't opened sensors follow the steps below!
                </p>
                <ShowOpenSensors />
            </div>
            <div className="m-10 bg-gray-200  text-gray-800 rounded-xl p-5 text-center">
                <form onSubmit={handelFormSubmit}>
                    {date && (
                        <div className="mb-6">
                            <label
                                htmlFor="date"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                As per UTC :{" "}
                                {dayjs
                                    .utc(date)
                                    .format(
                                        "YYYY-MM-DD hh:mm:ss Z - dddd, MMM DD, YYYY"
                                    )}
                                <br />
                                As per sensors :{" "}
                                {dayjs(date).format(
                                    "YYYY-MM-DD hh:mm:ss Z - dddd, MMM DD, YYYY"
                                )}
                            </label>
                        </div>
                    )}
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default User1Page;
