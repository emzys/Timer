class Timer {
    constructor(durationImput, startButton, pauseButton, callbacks) {
        this.durationImput = durationImput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }


        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)

    }
    
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
    };

    pause = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        } 
    }

    get timeRemaining() {
        return parseFloat(this.durationImput.value)
    }

    set timeRemaining(time) {
        this.durationImput.value = time.toFixed(2);
    }

};