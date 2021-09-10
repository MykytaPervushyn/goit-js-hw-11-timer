const refs = {
    timer: document.querySelector('.timer'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor({ onTick, targetDate }) {
        this.onTick = onTick;
        this.targetDate = targetDate;

        this.start();
    }

    

        start() {
            setInterval(() => {
            const targetDate = this.targetDate.getTime();
            const currentTime = Date.now();
            console.log(currentTime);
            const deltaTime = targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);

            this.onTick(time);
        }, 1000);
        }

    
    
    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    };
    
    pad(value) {
    return String(value).padStart(2, '0');
    }


}

const timer = new CountdownTimer({
    selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),

    onTick: updateTimer
});

// timer.start();


function updateTimer({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}






