import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({ deadline }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function calculateTimeRemaining() {
        const now = new Date().getTime();
        const deadlineTime = new Date(deadline).getTime();
        const timeDifference = deadlineTime - now;

        if (timeDifference <= 0) {
            // If the deadline has passed, set timeRemaining to zero
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <div>
            <p>{`${timeRemaining.days}d:${timeRemaining.hours}h:${timeRemaining.minutes}m:${timeRemaining.seconds}s`}</p>
        </div>
    );
};

CountdownTimer.propTypes = {
    deadline : PropTypes.string
};

export default CountdownTimer;