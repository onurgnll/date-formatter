class PrettierDate {
    padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    static pretty(date) {
        const recDate = new Date(date || Date.now()); // Varsayılan olarak şimdiki zamanı kullan
        return `${this.padZero(recDate.getDate())}/${this.padZero(recDate.getMonth() + 1)}/${recDate.getFullYear()} ${this.padZero(recDate.getHours())}:${this.padZero(recDate.getMinutes())}`;
    }
    static prettyWithDots(date) {
        const recDate = new Date(date || Date.now()); // Varsayılan olarak şimdiki zamanı kullan
        return `${this.padZero(recDate.getDate())}.${this.padZero(recDate.getMonth() + 1)}.${recDate.getFullYear()} ${this.padZero(recDate.getHours())}:${this.padZero(recDate.getMinutes())}`;
    }
    static prettyNow() {
        const recDate = new Date(Date.now());
        return `${this.padZero(recDate.getDate())}/${this.padZero(recDate.getMonth() + 1)}/${recDate.getFullYear()} ${this.padZero(recDate.getHours())}:${this.padZero(recDate.getMinutes())}`;
    }
    static prettyHour(date) {
        const recDate = new Date(date || Date.now()); // Varsayılan olarak şimdiki zamanı kullan
        return `${this.padZero(recDate.getHours())}:${this.padZero(recDate.getMinutes())}`;
    }
    static prettyDate(date) {
        const recDate = new Date(date || Date.now()); // Varsayılan olarak şimdiki zamanı kullan
        return `${this.padZero(recDate.getDate())}/${this.padZero(recDate.getMonth() + 1)}/${recDate.getFullYear()}`;
    }
    static prettyDateWithDots(date) {
        const recDate = new Date(date || Date.now()); // Varsayılan olarak şimdiki zamanı kullan
        return `${this.padZero(recDate.getDate())}.${this.padZero(recDate.getMonth() + 1)}.${recDate.getFullYear()}`;
    }
}

module.exports = PrettierDate;
