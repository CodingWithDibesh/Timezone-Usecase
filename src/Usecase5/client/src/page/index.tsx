import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import ShowOpenSensors from "../components";

const IndexPage = () => {
    return (
        <>
            <div className="bg-gray-200 text-gray-800 shadow-lg rounded-xl m-10 p-10">
                <code className="m-10">
                    💻 This is a demo project where we can use browser's sensor
                    to change the timezone and test the app
                </code>
            </div>
            <div className="m-10 text-center">
                <p className="mb-4 font-medium text-lg">
                    Lets navigate to different pages
                </p>
                <div className="flex gap-4 justify-center">
                    <Link to="/User1" target="_blank">
                        <Button pill>🧙‍♂️ User1</Button>
                    </Link>
                    <Link to="/User2" target="_blank">
                        <Button pill color="gray">
                            🧑🏻‍💻 User2
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="m-10 text-center">
                <div className="m-10 text-center">
                    Navigate to <b>User1</b> and <b>User2</b> &
                    <ShowOpenSensors />
                </div>
            </div>
        </>
    );
};

export default IndexPage;
