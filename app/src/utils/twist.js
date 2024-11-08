import { Twisters } from 'twisters';
import a7_0x3a9b7d from './logger.js';
import { Core } from '../core/core.js';
class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x5766a6 = '', _0x58b319 = '', _0x3f1900 = new Core(), _0xb8f4d5) {
    if (_0xb8f4d5 == undefined) {
      a7_0x3a9b7d.info(_0x58b319.id + " - " + _0x5766a6);
      _0xb8f4d5 = '-';
    }
    const _0x28a034 = _0x3f1900.user ?? {};
    const _0x3cd275 = _0x28a034.points ?? '-';
    const _0x1a6892 = _0x3f1900.task ?? [];
    const _0x598c63 = _0x1a6892.filter(_0x13bc43 => _0x13bc43.completed.length > 0x0) ?? [];
    const _0x56215f = _0x598c63.length ?? 0x0;
    const _0x5cce1c = _0x1a6892.filter(_0x68463e => _0x68463e.completed.length == 0x0) ?? [];
    const _0x3ae48f = _0x5cce1c.length ?? 0x0;
    this.twisters.put(_0x58b319.id, {
      'text': "\n================= Account " + _0x58b319.id + " =============\nName         : " + (_0x58b319.firstName ?? "Unamed") + " " + (_0x58b319.lastName ?? '') + " \nPoint        : " + _0x3cd275 + "\nTask         : Completed : " + _0x56215f + " | Uncompleted : " + _0x3ae48f + "\n\nStatus : " + _0x5766a6 + "\nDelay : " + _0xb8f4d5 + "\n=============================================="
    });
  }
  ["info"](_0x3a9d00 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x3a9d00 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  async ["clear"](_0x3e311f) {
    await this.twisters.flush();
  }
}
export default new Twist();
