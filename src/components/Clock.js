import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(null);


    useEffect(() => {
        let intervalId = setInterval(() => {
            let newTime = getTime();
            setTime(newTime);
        }, 1000)
        console.log("Start clock")

        return () => {
            clearInterval(intervalId);
            console.log("stop clock")
        }
    }, [] )


    return (
        <div>
            Time is: {time}
        </div>
    )

}

function getTime() {
    let date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


export default Clock;