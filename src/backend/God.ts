class God {
    private static instance: God;
    private _uid: string;
    private constructor(u: string) {
        this._uid = u;
    }

    get uid(): string {
        return this._uid;
    }
}