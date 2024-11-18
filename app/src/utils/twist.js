import { Twisters } from 'twisters';
import _0x1a145c from './logger.js';
import { Core } from '../core/core.js';
import { Helper } from './helper.js';
export class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  ["log"](_0x27e631 = '', _0x12d9ce = '', _0x4efe73 = new Core(), _0x2bbcf9) {
    if (_0x2bbcf9 == undefined) {
      _0x1a145c.info(_0x12d9ce.id + " - " + _0x27e631);
      _0x2bbcf9 = '-';
    }
    const _0x4bee42 = _0x4efe73.user ?? {};
    const _0x2e3042 = _0x4bee42.points ?? '-';
    const _0x4a8b89 = _0x4efe73.tasks ?? [];
    const _0xf411f8 = _0x4a8b89.length ?? '-';
    const _0x8da5be = _0x4a8b89.filter(_0x13fa1b => _0x13fa1b.completed.length != 0x0).length ?? '-';
    let _0x571bf4 = {
      'msg': _0x27e631,
      'delay': _0x2bbcf9,
      'acc': _0x12d9ce,
      'points': _0x2e3042,
      'availableTask': _0xf411f8,
      'completedTask': _0x8da5be
    };
    this.twisters.put(_0x12d9ce.id, {
      'text': "\n================= Account " + _0x12d9ce.id + " =============\n" + Helper.spinnerContent(_0x571bf4) + "\n=============================================="
    });
  }
  ["info"](_0x4cc9f0 = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x4cc9f0 + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  async ["clear"](_0x10895c) {
    await this.twisters.flush();
  }
}
