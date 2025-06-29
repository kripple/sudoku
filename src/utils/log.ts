class Log {
  logs = new Set();

  constructor() {}

  once(message: string) {
    if (this.logs.has(message)) return;
    this.logs.add(message);
    console.warn(message);
  }
}

export const log = new Log();
