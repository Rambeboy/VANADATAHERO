import { proxyList } from './config/proxy_list.js';
import { Core } from './src/core/core.js';
import { Telegram } from './src/core/telegram.js';
import { Helper } from './src/utils/helper.js';
import a1_0x2d4ebb from './src/utils/logger.js';
import a1_0x5e818a from './src/utils/twist.js';
async function operation(_0x1b94ad, _0x33cdc5, _0x5a4860, _0x5d909d) {
  try {
    const _0x527884 = new Core(_0x1b94ad, _0x33cdc5, _0x5a4860, _0x5d909d);
    await _0x527884.login(true);
    await _0x527884.getTask(true);
    const _0x1ea2fa = _0x527884.task.filter(_0x474b60 => _0x474b60.completed.length == 0x0);
    for (const _0x2ca10e of _0x1ea2fa) {
      await _0x527884.completeTask(_0x2ca10e);
    }
    if (_0x1ea2fa.length == 0x0) {
      await Helper.delay(0xbb8, _0x1b94ad, "All Task Completed", _0x527884);
    }
    await _0x527884.getGame();
    if (_0x527884.game && _0x527884.game.status != "completed") {
      while (_0x527884.incorrect != 0xa) {
        await _0x527884.gameChoice();
      }
    }
    await Helper.delay(300000, _0x1b94ad, "Account " + _0x1b94ad.id + " Processing Complete, Restarting in 5 Minutes", _0x527884);
    await operation(_0x1b94ad, _0x33cdc5, _0x5a4860, _0x5d909d);
  } catch (_0x3c48dc) {
    if (_0x3c48dc.message.includes("401") || _0x3c48dc.message.includes("403")) {
      if (_0x1b94ad.type == 'query') {
        await Helper.delay(0x3e8, _0x1b94ad, "Error : " + _0x3c48dc.message + ", Query Is Expired, Please Get New Query");
      } else {
        await Helper.delay(0x1388, _0x1b94ad, "Error : " + _0x3c48dc.message + ", Query Is Expired, Getting New Query in 5 Seconds");
        const _0x5d0670 = new Telegram();
        await _0x5d0670.useSession(_0x1b94ad.accounts, _0x5d909d);
        const _0x324e57 = await _0x5d0670.client.getMe();
        _0x324e57.type = "sessions";
        _0x324e57.accounts = _0x1b94ad.accounts;
        _0x324e57.id = _0x324e57.id.value;
        const _0xd039f7 = await _0x5d0670.resolvePeer().then(async () => {
          return await _0x5d0670.initWebView();
        })["catch"](_0x2f825e => {
          throw _0x2f825e;
        });
        const _0x5f53b4 = Helper.queryToJSON(_0xd039f7);
        await _0x5d0670.disconnect();
        await Helper.delay(0x1388, _0x324e57, "Successfully get new query");
        await operation(_0x324e57, _0xd039f7, _0x5f53b4, _0x5d909d);
      }
    } else {
      await Helper.delay(0x1388, _0x1b94ad, "Error : " + _0x3c48dc.message + ", Retrying after 5 Seconds");
      await operation(_0x1b94ad, _0x33cdc5, _0x5a4860, _0x5d909d);
    }
  }
}
let init = false;
async function startBot() {
  return new Promise(async (_0x27c2ba, _0x28e3eb) => {
    try {
      a1_0x2d4ebb.info("BOT STARTED");
      const _0x5dcddf = await new Telegram();
      if (init == false) {
        await _0x5dcddf.init();
        init = true;
      }
      const _0x4ece33 = Helper.getSession("accounts");
      const _0x57da22 = [];
      if (proxyList.length > 0x0) {
        if (_0x4ece33.length != proxyList.length) {
          _0x28e3eb("You have " + _0x4ece33.length + " Session but you provide " + proxyList.length + " Proxy");
        }
      }
      for (const _0x5b49a0 of _0x4ece33) {
        const _0x36d12a = _0x4ece33.indexOf(_0x5b49a0);
        const _0x39364b = proxyList.length > 0x0 ? proxyList[_0x36d12a] : undefined;
        if (!_0x5b49a0.includes('query')) {
          await _0x5dcddf.useSession("accounts/" + _0x5b49a0, _0x39364b);
          _0x5dcddf.session = _0x5b49a0;
          const _0x2c6c57 = await _0x5dcddf.client.getMe();
          _0x2c6c57.type = "sessions";
          _0x2c6c57.accounts = "accounts/" + _0x5b49a0;
          _0x2c6c57.id = _0x2c6c57.id.value;
          const _0x4edaac = await _0x5dcddf.resolvePeer().then(async () => {
            return await _0x5dcddf.initWebView();
          })["catch"](_0x2c31eb => {
            throw _0x2c31eb;
          });
          const _0x458476 = Helper.queryToJSON(_0x4edaac);
          await _0x5dcddf.disconnect();
          _0x57da22.push([_0x2c6c57, _0x4edaac, _0x458476, _0x39364b]);
        } else {
          const _0x596de2 = Helper.readQueryFile("accounts/" + _0x5b49a0 + "/query.txt");
          const _0x2ef56e = Helper.queryToJSON(_0x596de2);
          const _0x133133 = _0x2ef56e.user;
          _0x133133.firstName = _0x133133.first_name;
          _0x133133.lastName = _0x133133.last_name;
          _0x133133.type = 'query';
          _0x57da22.push([_0x133133, _0x596de2, _0x2ef56e, _0x39364b]);
        }
      }
      const _0x21b247 = _0x57da22.map(async _0xa23da5 => {
        await operation(_0xa23da5[0x0], _0xa23da5[0x1], _0xa23da5[0x2], _0xa23da5[0x3]);
      });
      await Promise.all(_0x21b247);
      _0x27c2ba();
    } catch (_0x413f52) {
      a1_0x2d4ebb.info("BOT STOPPED");
      a1_0x2d4ebb.error(JSON.stringify(_0x413f52));
      _0x28e3eb(_0x413f52);
    }
  });
}
(async () => {
  try {
    a1_0x2d4ebb.clear();
    a1_0x2d4ebb.info('');
    a1_0x2d4ebb.info("Application Started");
    console.log("VANA DATA HERO BOT");
    console.log("Author : Nofan Rambe");
    console.log("Dont forget to run git pull to keep up to date");
    console.log('');
    Helper.showSkelLogo();
    await startBot();
  } catch (_0x60cb2a) {
    await a1_0x5e818a.clear();
    await a1_0x5e818a.clearInfo();
    console.log("Error During executing bot", _0x60cb2a);
    await startBot();
  }
})();
