class God {
    private static instance: God;
    uid: string;
    private constructor(u: string) {
        this.uid = u;
    }
    static getInstance() {
        if (!God.instance) {
        God.instance = new God();
        }
        return God.instance;
    }
}