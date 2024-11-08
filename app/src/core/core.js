import { API } from '../api/api.js';
import { Helper } from '../utils/helper.js';
export class Core extends API {
  constructor(_0x5801f4, _0x4d4efb, _0x1aa7f1, _0x2df045) {
    super(_0x4d4efb, _0x2df045, 'https://www.vanadatahero.com', "www.vanadatahero.com", "https://www.vanadatahero.com", "https://www.vanadatahero.com/home");
    this.account = _0x5801f4;
    this.query = _0x4d4efb;
    this.queryObj = _0x1aa7f1;
    this.correct = 0x0;
    this.incorrect = 0x0;
  }
  async ["login"](_0xc3ef8b = false) {
    try {
      if (_0xc3ef8b) {
        await Helper.delay(0x3e8, this.account, "Try to Login...", this);
      }
      const _0x9849b = {
        'initData': this.query
      };
      const _0x1ca725 = await this.fetch("/api/player", "GET", undefined, _0x9849b);
      if (_0x1ca725.status == 0xc8) {
        if (_0xc3ef8b) {
          await Helper.delay(0x3e8, this.account, "Successfully Login", this);
        }
        this.user = _0x1ca725;
      } else {
        throw Error("Failed To Login - " + _0x1ca725.status);
      }
    } catch (_0x50f623) {
      throw _0x50f623;
    }
  }
  async ["getTask"](_0x181b62 = false) {
    try {
      if (_0x181b62) {
        await Helper.delay(0x3e8, this.account, "Getting Available Task...", this);
      }
      const _0x12348f = await this.fetch("/api/tasks", 'GET');
      if (_0x12348f.status == 0xc8) {
        this.task = _0x12348f.tasks.filter(_0x398625 => _0x398625.id != 0x1 && _0x398625.id != 0x11 && _0x398625.id != 0x5);
        if (_0x181b62) {
          await Helper.delay(0x7d0, this.account, "Successfully Get Task", this);
        }
      } else {
        await Helper.delay(0x3e8, this.account, "Failed To Get Task", this);
      }
    } catch (_0x1ed6f6) {
      throw _0x1ed6f6;
    }
  }
  async ["getGame"]() {
    try {
      await Helper.delay(0x1f4, this.account, "Getting Game Info...", this);
      const _0xb73305 = await this.fetch('/api/face-detection/game', "GET", undefined);
      if (_0xb73305.status == 0xc8) {
        this.game = _0xb73305.game;
        await Helper.delay(0x7d0, this.account, "Successfully Get Game", this);
      } else {
        await Helper.delay(0x3e8, this.account, "Failed To Get Game", this);
      }
    } catch (_0xe24f8f) {
      throw _0xe24f8f;
    }
  }
  async ["gameChoice"]() {
    try {
      await Helper.delay(0x1f4, this.account, "Loading Game Image...", this);
      const _0xae2be0 = await this.fetch("/api/face-detection/image?gameId=" + this.game.id, "GET", undefined);
      if (_0xae2be0.status == 0xc8) {
        const _0x382bcb = {
          'isReal': true,
          'gameId': this.game.id,
          'key': _0xae2be0.key
        };
        await Helper.delay(0x7d0, this.account, "Answering Face Recognition ", this);
        const _0x13dbed = await this.fetch("/api/face-detection/image?gameId=" + this.game.id, "POST", undefined, _0x382bcb);
        if (_0x13dbed.status == 0xc8) {
          await Helper.delay(0x7d0, this.account, "Answer Success, Score : " + _0x13dbed.game.score + ", Lives : " + _0x13dbed.game.lives + " ", this);
          if (_0x13dbed.isCorrect == true) {
            this.correct += 0x1;
            const _0x4989ee = {
              'status': "completed",
              'points': 0x64 * Number(_0x13dbed.game.streak)
            };
            await Helper.delay(0x7d0, this.account, "Submitting Score...", this);
            await this.fetch("/api/tasks/1", "POST", undefined, _0x4989ee);
          } else {
            this.incorrect += 0x1;
          }
          await this.login();
        }
      } else {
        await Helper.delay(0x3e8, this.account, "Failed To Answer", this);
      }
    } catch (_0x14e1f9) {
      await Helper.delay(0x3e8, this.account, "Game Completed", this);
    }
  }
  async ['completeTask'](_0xfcb470) {
    try {
      await Helper.delay(0x3e8, this.account, "Completing Task " + _0xfcb470.name + "...", this);
      const _0x364390 = {
        'status': "completed",
        'points': _0xfcb470.points
      };
      const _0x57b9d1 = await this.fetch("/api/tasks/" + _0xfcb470.id, "POST", undefined, _0x364390);
      if (_0x57b9d1.status == 0xc8) {
        await Helper.delay(0x3e8, this.account, "Task " + _0xfcb470.name + " Completed, Got " + _0xfcb470.points + " Points", this);
        await this.getTask();
        await this.login();
      } else {
        await Helper.delay(0x3e8, this.account, "Failed To Complete Task " + _0xfcb470.name + " - " + _0x57b9d1.message, this);
      }
    } catch (_0x1adac3) {
      await Helper.delay(0x3e8, this.account, "Failed To Complete Task " + _0xfcb470.name, this);
    }
  }
}
