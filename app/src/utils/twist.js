import { Twisters } from 'twisters';
import _0x3e9198 from './logger.js';
import { Core } from '../core/core.js';
import { Helper } from './helper.js';
export class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ['log'](_0x1c1f9d = '', _0x5cf96e = '', _0x397f8f = new Core(), _0x31cf11) {
    if (_0x31cf11 == undefined) {
      _0x3e9198.info(_0x5cf96e.id + " - " + _0x1c1f9d);
      _0x31cf11 = '-';
    }
    const _0x378897 = _0x397f8f.user ?? {};
    const _0x206aa1 = _0x378897.points ?? '-';
    const _0x452c50 = _0x397f8f.tasks ?? [];
    const _0x5175c3 = _0x452c50.length ?? '-';
    const _0x1f9277 = _0x452c50.filter(_0xedbd1b => _0xedbd1b.completed.length != 0x0).length ?? '-';
    let _0x3902a0 = {
      'msg': _0x1c1f9d,
      'delay': _0x31cf11,
      'acc': _0x5cf96e,
      'points': _0x206aa1,
      'availableTask': _0x5175c3,
      'completedTask': _0x1f9277
    };
    this.twisters.put(_0x5cf96e.id, {
      'text': "\n================= Account " + _0x5cf96e.id + " =============\n" + Helper.spinnerContent(_0x3902a0) + "\n=============================================="
    });
  }
  ["info"](_0xeabf5e = '') {
    this.twisters.put(0x2, {
      'text': "\n==================================================\nInfo : " + _0xeabf5e + "\n=============================================="
    });
    return;
  }
  ['clearInfo']() {
    this.twisters.remove(0x2);
  }
  async ["clear"](_0x2d720b) {
    await this.twisters.flush();
  }
}
