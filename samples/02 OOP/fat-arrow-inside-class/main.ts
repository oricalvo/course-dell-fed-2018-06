class Timer {
    id: number;

    constructor() {
        this.id = 123;
    }

    start() {
        setInterval(this.onTick, 1500);
    }

    onTick = () => {
        console.log("tick", this.id);
    }
}

const t = new Timer();
t.start();

