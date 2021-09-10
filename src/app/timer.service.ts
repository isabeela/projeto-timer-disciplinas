import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor(private Logger: LoggerService) {
    this.Logger.add("TimerService constructed");
  }

  /*inicia a contagem em ms a cada n ms o contador é zerado */
  start(ms: number) {
    if (!this.timer) {
      (this.timer = setInterval(() => {
        this.counter++;
      }, ms)),
        this.Logger.add("TimerService started with " + ms + " ms interval");
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.Logger.add("TimerService stopped");
    }
  }

  resetT() {
    if (this.timer != 0) this.counter = 0;
    this.Logger.add("TimerService reseted");
  }

  getCount() {
    return this.counter;
  }
}
