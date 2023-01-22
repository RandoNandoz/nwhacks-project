class God {
    private static instance: God;
    uid: string;
    private constructor(u: string) {
        this.uid = u;
    }
}