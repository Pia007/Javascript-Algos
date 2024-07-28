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
        <div className="hd-clock">
            <span >{time.toLocaleTimeString()}</span>
        </div>
    );
}

export default Clock;