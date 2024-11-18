import { Twisters } from 'twisters';
import _0x1d0c74 from './logger.js';
import { Core } from '../core/core.js';
import { Helper } from './helper.js';
export class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ['log'](_0x42bec9 = '', _0x1d695d = '', _0x4fdbd3 = new Core(), _0x19f853) {
    if (_0x19f853 == undefined) {
      _0x1d0c74.info(_0x1d695d.id + " - " + _0x42bec9);
      _0x19f853 = '-';
    }
    const _0x5ed601 = _0x4fdbd3.user ?? {};
    const _0x40f05a = _0x5ed601.points ?? '-';
    const _0x2b0ce8 = _0x4fdbd3.tasks ?? [];
    const _0x4b360e = _0x2b0ce8.length ?? '-';
    const _0x222927 = _0x2b0ce8.filter(_0xb7d6e1 => _0xb7d6e1.completed.length != 0x0).length ?? '-';
    let _0x1f0b37 = {
      'msg': _0x42bec9,
      'delay': _0x19f853,
      'acc': _0x1d695d,
      'points': _0x40f05a,
      'availableTask': _0x4b360e,
      'completedTask': _0x222927
    };
    this.twisters.put(_0x1d695d.id, {
      'text': "\n================= Account " + _0x1d695d.id + " =============\n" + Helper.spinnerContent(_0x1f0b37) + "\n=============================================="
    });
  }
  ["info"](_0x261127 = '') {
    this.twisters.put(0x2, {
      'text': "\n============================================================\nInfo : " + _0x261127 + "\n=============================================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  async ["clear"](_0x2ae9a3) {
    await this.twisters.flush();
  }
}
