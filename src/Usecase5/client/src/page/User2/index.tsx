import { Link } from "react-router-dom";
import ShowOpenSensors from "../../components";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const User2Page = () => {
    const [date, setDate] = useState();
    const fetchData = async()=>{
        const resp = await fetch("http://localhost:2468/receive").then(
            (resp) => resp.json()
        );
        if (resp.status) {
            setDate(resp.data);
        } else alert(resp.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className="bg-gray-200 text-gray-800 shadow-lg rounded-xl m-10 p-10 text-center">
                Hi there, You are 🧑🏻‍💻 User2. <br />
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
            {date && (
                <div className="m-10 bg-gray-200 text-gray-800 rounded-xl p-5 text-center">
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
                    <button
                    onClick={fetchData}
                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Reload
                    </button>
                </div>
            )}
        </>
    );
};

export default User2Page;
