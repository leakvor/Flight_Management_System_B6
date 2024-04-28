export class Date{
    constructor(private day: string, private month: string, private year: number, private time: string) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.time = time;
    }

    getDay(): string {
        return this.day;
    }

    getMonth(): string {
        return this.month;
    }

    getYear(): number {
        return this.year;
    }

    getTime(): string {
        return this.time;
    }
}