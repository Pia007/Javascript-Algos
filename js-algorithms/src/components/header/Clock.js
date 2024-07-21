import { useState, useEffect } from 'react';


const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;