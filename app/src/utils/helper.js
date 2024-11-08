import a5_0x24e5e4 from 'moment-timezone';
import a5_0x2d66bd from 'fs';
import a5_0x163dde from 'path';
import { parse } from 'querystring';
import a5_0x5a4987 from './twist.js';
export class Helper {
  static ["delay"] = (_0x35317e, _0x4c9b93, _0x529e4d, _0x2e8de8) => {
    return new Promise(_0x55f9b4 => {
      let _0x15ccd6 = _0x35317e;
      if (_0x4c9b93 != undefined) {
        a5_0x5a4987.log(_0x529e4d, _0x4c9b93, _0x2e8de8, "Delaying for " + this.msToTime(_0x35317e));
      } else {
        a5_0x5a4987.info((_0x529e4d ?? '') + " - Delaying for " + this.msToTime(_0x35317e));
      }
      const _0x6c8351 = setInterval(() => {
        _0x15ccd6 -= 0x3e8;
        if (_0x4c9b93 != undefined) {
          a5_0x5a4987.log(_0x529e4d, _0x4c9b93, _0x2e8de8, "Delaying for " + this.msToTime(_0x15ccd6));
        } else {
          a5_0x5a4987.info((_0x529e4d ?? '') + " - Delaying for " + this.msToTime(_0x15ccd6));
        }
        if (_0x15ccd6 <= 0x0) {
          clearInterval(_0x6c8351);
          _0x55f9b4();
        }
      }, 0x3e8);
      setTimeout(async () => {
        clearInterval(_0x6c8351);
        await a5_0x5a4987.clearInfo();
        if (_0x4c9b93) {
          a5_0x5a4987.log(_0x529e4d, _0x4c9b93, _0x2e8de8);
        }
        _0x55f9b4();
      }, _0x35317e);
    });
  };
  static ["randomUserAgent"]() {
    const _0x9776c5 = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
    return _0x9776c5[Math.floor(Math.random() * _0x9776c5.length)];
  }
  static ["readTime"](_0x25ebd1) {
    const _0x5d676f = a5_0x24e5e4.unix(_0x25ebd1);
    return _0x5d676f.format("YYYY-MM-DD HH:mm:ss");
  }
  static ['getCurrentTimestamp']() {
    const _0x22109a = a5_0x24e5e4().tz("Asia/Singapore").unix();
    return _0x22109a.toString();
  }
  static ['getSession'](_0x3d74eb) {
    try {
      if (!a5_0x2d66bd.existsSync('accounts')) {
        a5_0x2d66bd.mkdirSync('accounts');
      }
      const _0x536476 = a5_0x2d66bd.readdirSync(a5_0x163dde.resolve(_0x3d74eb));
      const _0xef9597 = [];
      _0x536476.forEach(_0x24b8da => {
        _0xef9597.push(_0x24b8da);
      });
      return _0xef9597;
    } catch (_0x5e0949) {
      throw Error("Error reading sessions directory: " + _0x5e0949 + ',');
    }
  }
  static ["resetAccounts"]() {
    try {
      const _0x21dc6e = a5_0x163dde.resolve("accounts");
      const _0x4ae91a = a5_0x2d66bd.readdirSync(_0x21dc6e);
      console.log("Deleting Accounts...");
      _0x4ae91a.forEach(_0x14372f => {
        const _0x2f9fd0 = a5_0x163dde.join(_0x21dc6e, _0x14372f);
        console.log(_0x2f9fd0);
        a5_0x2d66bd.rm(_0x2f9fd0, {
          'recursive': true,
          'force': true
        }, _0xe3a80f => {
          if (_0xe3a80f) {
            console.error("Error deleting file " + _0x2f9fd0 + ':', _0xe3a80f);
          }
        });
      });
      console.info("Account reset successfully. Please restart the bot.");
    } catch (_0x135b45) {
      console.error("Error deleting accounts: " + _0x135b45);
      throw _0x135b45;
    }
  }
  static ["getTelegramQuery"](_0x799256, _0xb06a3a) {
    const _0x312ad9 = _0x799256.indexOf('#');
    if (_0x312ad9 === -0x1) {
      throw new Error("No query string found in the URL.");
    }
    const _0x128f0d = _0x799256.substring(_0x312ad9 + 0x1);
    const _0x99c2d5 = _0x128f0d.split('&');
    const _0x216128 = _0x99c2d5[0x0].split('&')[0x0].replace("tgWebAppData=", '');
    if (!_0x216128) {
      throw new Error("Param not found in the query string.");
    }
    if (_0xb06a3a == '1') {
      return _0x216128;
    } else {
      if (_0xb06a3a == '2') {
        return this.decodeQueryString(_0x216128);
      } else {
        const _0x2a6cf1 = this.decodeQueryString(_0x216128);
        return this.jsonToInitParam(_0x2a6cf1);
      }
    }
  }
  static ["jsonToInitParam"](_0x8882a3) {
    const _0x1bca42 = parse(_0x8882a3);
    if (_0x1bca42.user) {
      const _0x22d702 = JSON.parse(_0x1bca42.user);
      _0x1bca42.user = encodeURIComponent(JSON.stringify(_0x22d702));
    }
    const _0x2c7c95 = [];
    for (const [_0x9d9b21, _0x5660ed] of Object.entries(_0x1bca42)) {
      _0x2c7c95.push(_0x9d9b21 + '=' + _0x5660ed);
    }
    const _0x2186fd = _0x2c7c95.join('&');
    return _0x2186fd;
  }
  static ["decodeQueryString"](_0x2c4f15) {
    const _0x16123a = decodeURIComponent(_0x2c4f15);
    const _0x310a53 = _0x16123a.split('&');
    const _0xb1d93 = {};
    _0x310a53.forEach(_0x41f7ce => {
      const [_0x10ee4d, _0x1c1577] = _0x41f7ce.split('=');
      if (_0x10ee4d === "user") {
        _0xb1d93[_0x10ee4d] = JSON.parse(decodeURIComponent(_0x1c1577));
      } else {
        _0xb1d93[_0x10ee4d] = _0x1c1577;
      }
    });
    const _0x62990b = [];
    for (const [_0x5121ef, _0x8f1a89] of Object.entries(_0xb1d93)) {
      if (_0x5121ef === 'user') {
        _0x62990b.push(_0x5121ef + '=' + JSON.stringify(_0x8f1a89));
      } else {
        _0x62990b.push(_0x5121ef + '=' + _0x8f1a89);
      }
    }
    return _0x62990b.join('&');
  }
  static ['createDir'](_0x9aa845) {
    try {
      const _0x53321a = a5_0x163dde.join("accounts", _0x9aa845);
      if (!a5_0x2d66bd.existsSync("accounts")) {
        a5_0x2d66bd.mkdirSync("accounts");
      }
      a5_0x2d66bd.mkdirSync(_0x53321a, {
        'recursive': true
      });
      console.log(_0x53321a);
      return _0x53321a;
    } catch (_0x205392) {
      throw new Error("Error creating directory: " + _0x205392);
    }
  }
  static ["saveQueryFile"](_0x4dce23, _0x28d1d2) {
    const _0x340a73 = a5_0x163dde.resolve(_0x4dce23, "query.txt");
    a5_0x2d66bd.writeFile(_0x340a73, _0x28d1d2, 'utf8', _0x50765a => {
      if (_0x50765a) {
        console.error("Error writing file:", _0x50765a);
      } else {
        console.log("Query File Created/Modified Successfully.");
      }
    });
  }
  static ["random"](_0x51b5eb, _0x12236c) {
    const _0x785384 = Math.floor(Math.random() * (_0x12236c - _0x51b5eb + 0x1)) + _0x51b5eb;
    return _0x785384;
  }
  static ["msToTime"](_0x70db93) {
    const _0xe0e7f0 = Math.floor(_0x70db93 / 3600000);
    const _0x3b35bb = _0x70db93 % 3600000;
    const _0x5c6097 = Math.floor(_0x3b35bb / 60000);
    const _0x56fd62 = _0x3b35bb % 60000;
    const _0x4aadc9 = Math.round(_0x56fd62 / 0x3e8);
    return _0xe0e7f0 + " Hours " + _0x5c6097 + " Minutes " + _0x4aadc9 + " Seconds";
  }
  static ['queryToJSON'](_0x3f418a) {
    try {
      const _0x18f955 = {};
      const _0x27da8c = _0x3f418a.split('&');
      _0x27da8c.forEach(_0x44974d => {
        const [_0x2ee9ea, _0x5339a0] = _0x44974d.split('=');
        if (_0x2ee9ea === 'user') {
          _0x18f955[_0x2ee9ea] = JSON.parse(decodeURIComponent(_0x5339a0));
        } else {
          _0x18f955[_0x2ee9ea] = decodeURIComponent(_0x5339a0);
        }
      });
      return _0x18f955;
    } catch (_0x4254b4) {
      throw Error("Invalid Query");
    }
  }
  static ["generateRandomString"](_0x170816) {
    let _0x17931d = '';
    const _0x4578b4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
    for (let _0x1111f8 = 0x0; _0x1111f8 < _0x170816; _0x1111f8++) {
      _0x17931d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x4578b4));
    }
    return _0x17931d;
  }
  static ["readQueryFile"](_0x1af76f) {
    try {
      const _0x1dae22 = a5_0x163dde.resolve(_0x1af76f);
      const _0x37e227 = a5_0x2d66bd.readFileSync(_0x1dae22, "utf8");
      return _0x37e227;
    } catch (_0xbedddb) {
      console.log("No query.txt Files Found");
    }
  }
  static ["showSkelLogo"]() {
    console.log("");
  }
}
