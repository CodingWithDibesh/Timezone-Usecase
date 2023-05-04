const ShowOpenSensors = () => {
    return (
        <div className="grid-flow-col gap-4">
            <i>Open dev tools</i> <br /> and navigate to sensors or use{" "}
            <div className="mt-2 mb-2">
                <span className="bg-blue-500 rounded-lg p-2">COMMAND</span>{" "}
                <span>+</span>{" "}
                <span className="bg-blue-500 rounded-lg p-2">SHIFT</span>{" "}
                <span>+</span>{" "}
                <span className="bg-blue-500 rounded-lg p-2">P</span>{" "}
            </div>
            <div className="mt-4 mb-2">
                and type{" "}
                <span className="bg-yellow-500 rounded-lg p-2">sensors</span>{" "}
                and hit{" "}
            </div>
            <div className="mt-2 mb-2">
                <span className="bg-blue-500 rounded-lg p-2">enter</span> on
                show sensors.
            </div>
            <div>
                Change the Location from No Override to any as per your choice.{" "}
                <br />
                This will affect only selected tab to and will change the
                timezone for the selected tab.
            </div>
        </div>
    );
};

export default ShowOpenSensors;
