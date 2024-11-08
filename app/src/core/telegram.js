import a4_0x46b57a from 'input';
import { Helper } from '../utils/helper.js';
import { Api, TelegramClient } from 'telegram';
import { StoreSession } from 'telegram/sessions/StoreSession.js';
import a4_0x5ca571 from '../utils/logger.js';
import { FloodWaitError } from 'telegram/errors/RPCErrorList.js';
import { Config } from '../../config/config.js';
import { HttpsProxyAgent } from 'https-proxy-agent';
export class Telegram {
  ["storeSession"];
  constructor() {
    this.accountName = "accounts";
    this.url = 'https://vanadatahero.com/';
    this.bot = 'VanaDataHeroBot';
  }
  async ["init"]() {
    try {
      await this.onBoarding();
    } catch (_0x5289e0) {
      console.log(_0x5289e0);
      a4_0x5ca571.error('' + JSON.stringify(_0x5289e0));
      throw _0x5289e0;
    }
  }
  async ["onBoarding"]() {
    try {
      let _0x186661 = "Welcome to Bot \nBy : Vikitoshi \n \nLets getting started.\n \nYour Session List:\n";
      const _0x273e36 = Helper.getSession("accounts");
      if (_0x273e36.length == 0x0) {
        _0x186661 += "<empty>";
      } else {
        for (const _0x3a11a0 of _0x273e36) {
          _0x186661 += "- " + _0x3a11a0 + "\n";
        }
      }
      _0x186661 += "\n \nPlease Choose a menu: \n";
      _0x186661 += "\n \n1. Create Account \n2. Reset Account \n3. Start Bot\n4. Query modification\n \nInput your choice :";
      const _0x284896 = await a4_0x46b57a.text(_0x186661);
      if (_0x284896 == 0x1) {
        await this.accountType();
      } else {
        if (_0x284896 == 0x2) {
          Helper.resetAccounts();
          await Helper.delay(0xbb8);
          await this.onBoarding();
        } else {
          if (_0x284896 == 0x3) {
            if (Helper.getSession(this.accountName)?.['length'] == 0x0) {
              console.info("You don't have any Accounts, please create first");
              await this.onBoarding();
            }
          } else if (_0x284896 == 0x4) {
            await this.queryModificaiton();
          } else {
            console.error("Invalid input, Please try again");
            await this.onBoarding();
          }
        }
      }
    } catch (_0x337234) {
      throw _0x337234;
    }
  }
  async ["queryModificaiton"]() {
    try {
      const _0x2b2529 = Helper.getSession("accounts");
      const _0x3a0748 = _0x2b2529.filter(_0xde2720 => _0xde2720.includes("query"));
      let _0x4df074 = "Your Query Account List :\n \n";
      for (const _0x11c100 of _0x3a0748) {
        _0x4df074 += _0x2b2529.indexOf(_0x11c100) + 0x1 + ". " + _0x11c100 + "\n";
      }
      if (_0x3a0748.length == 0x0) {
        console.log("You dont have any Query Account.");
        await this.onBoarding();
      } else {
        _0x4df074 += "\n \nPlease Select Query Account for modification:";
      }
      const _0x21ea86 = await a4_0x46b57a.text(_0x4df074);
      if (_0x3a0748[_0x21ea86 - 0x1] != undefined) {
        const _0x54b475 = _0x3a0748[_0x21ea86 - 0x1];
        this.accountName = "accounts/" + _0x54b475;
        const _0x4d1b53 = "Old Query : " + Helper.readQueryFile(this.accountName + "/query.txt") + "\n \nPlease Enter New Query ";
        const _0x119cc8 = await a4_0x46b57a.text(_0x4d1b53);
        await Helper.saveQueryFile(this.accountName, _0x119cc8);
        await Helper.delay(0xbb8);
        await this.onBoarding();
      } else {
        console.error("Invalid input, Please try again");
        await this.queryModificaiton();
      }
    } catch (_0x1552df) {
      throw _0x1552df;
    }
  }
  async ["sessionCreation"]() {
    try {
      if (Config.TELEGRAM_APP_ID == undefined || Config.TELEGRAM_APP_HASH == undefined) {
        throw new Error("Please configure your TELEGRAM_APP_ID and TELEGRAM_APP_HASH first");
      }
      const _0x2bf96e = Helper.getSession("accounts");
      let _0x1b47e1 = "Your Account List :\n \n";
      for (const _0x508f43 of _0x2bf96e) {
        _0x1b47e1 += _0x2bf96e.indexOf(_0x508f43) + 0x1 + ". " + _0x508f43 + "\n";
      }
      if (_0x2bf96e.length == 0x0) {
        _0x1b47e1 += "<empty> \n \nPlease enter Session Name :";
      } else {
        _0x1b47e1 += "\n \nYou already have sessions, cancel(CTRL+C) or create new Session :";
      }
      const _0x2a1a3e = await a4_0x46b57a.text(_0x1b47e1);
      this.accountName = Helper.createDir('sessions-' + _0x2a1a3e);
      await this.useSession(this.accountName);
      await this.disconnect();
      a4_0x5ca571.info("Session " + this.accountName + " - Created");
      console.log("Session " + _0x2a1a3e + " - Created, Please Restart The Bot Again");
      this.storeSession.save();
      await Helper.delay(0xbb8);
      process.exit();
    } catch (_0x37ac06) {
      throw _0x37ac06;
    }
  }
  async ["queryCreation"]() {
    try {
      const _0x54773c = Helper.getSession("accounts");
      let _0x45fe5d = "Your Account List :\n \n";
      for (const _0x155107 of _0x54773c) {
        _0x45fe5d += _0x54773c.indexOf(_0x155107) + 0x1 + ". " + _0x155107 + "\n";
      }
      if (_0x54773c.length == 0x0) {
        _0x45fe5d += "<empty> \n \nPlease enter Account Name :";
      } else {
        _0x45fe5d += "\n \nYou already have Account, cancel(CTRL+C) or create new Account :";
      }
      const _0x1a1089 = await a4_0x46b57a.text(_0x45fe5d);
      this.accountName = Helper.createDir("query-" + _0x1a1089);
      const _0x2607bc = await a4_0x46b57a.text("Please Enter Telegram Query : ");
      await Helper.saveQueryFile(this.accountName, _0x2607bc);
      a4_0x5ca571.info("Query " + this.accountName + " - Created");
      console.log("Query " + _0x1a1089 + " - Created, Please Restart The Bot Again");
      await Helper.delay(0xbb8);
      process.exit();
    } catch (_0x3cb974) {
      throw _0x3cb974;
    }
  }
  async ["accountType"]() {
    try {
      const _0x4792f0 = Helper.getSession('accounts');
      let _0x41fdcb = "Your Account List :\n \n";
      if (_0x4792f0.length > 0x0) {
        for (const _0x499312 of _0x4792f0) {
          _0x41fdcb += _0x4792f0.indexOf(_0x499312) + 0x1 + ". " + _0x499312 + "\n";
        }
      } else {
        _0x41fdcb += "<empty>\n";
      }
      _0x41fdcb += "\n \nAvailable Account Type: \n1. Session \n2. Query\n \nPlease Entery Your Choice : ";
      const _0x572d4c = await a4_0x46b57a.text(_0x41fdcb);
      if (_0x572d4c == 0x1) {
        await this.sessionCreation();
      } else if (_0x572d4c == 0x2) {
        await this.queryCreation();
      } else {
        console.log("Invalid Input");
        await this.accountType();
      }
    } catch (_0x42e489) {
      throw _0x42e489;
    }
  }
  async ["useSession"](_0x47473f, _0x3a13f8) {
    try {
      this.proxy = _0x3a13f8;
      const _0x58c51b = {
        'connectionRetries': 0x5
      };
      if (this.proxy) {
        _0x58c51b.agent = new HttpsProxyAgent(this.proxy);
      }
      this.storeSession = new StoreSession(_0x47473f);
      this.client = new TelegramClient(this.storeSession, Config.TELEGRAM_APP_ID, Config.TELEGRAM_APP_HASH, _0x58c51b);
      this.storeSession.save();
      await this.client.start({
        'phoneNumber': async () => await a4_0x46b57a.text("Enter your Telegram Phone Number ?"),
        'password': async () => await a4_0x46b57a.text("Enter your Telegram Password?"),
        'phoneCode': async () => await a4_0x46b57a.text("Enter your Telegram Verification Code ?"),
        'onError': _0x59b236 => {
          console.log(_0x59b236.message);
        }
      });
      console.log();
    } catch (_0x3d0c65) {
      throw _0x3d0c65;
    }
  }
  async ["resolvePeer"]() {
    try {
      a4_0x5ca571.info("Session " + this.session + " - Resolving Peer");
      while (this.peer == undefined) {
        try {
          this.peer = await this.client.getEntity(this.bot);
          break;
        } catch (_0x976365) {
          if (_0x976365 instanceof FloodWaitError) {
            const _0x20007a = _0x976365.seconds;
            a4_0x5ca571.warn(this.client.session.serverAddress + " | FloodWait " + _0x976365);
            a4_0x5ca571.info(this.client.session.serverAddress + " | Sleep " + _0x20007a + 's');
            await Helper.delay((_0x20007a + 0x3) * 0x3e8);
          } else {
            throw _0x976365;
          }
        }
      }
    } catch (_0x5bfee3) {
      throw _0x5bfee3;
    }
  }
  async ['disconnect']() {
    await this.client.disconnect();
    await this.client.destroy();
    this.peer = undefined;
    this.accountName = undefined;
  }
  async ["initWebView"]() {
    try {
      const _0x1dfcf6 = await this.client.invoke(new Api.messages.RequestWebView({
        'peer': this.peer,
        'bot': this.peer,
        'fromBotMenu': true,
        'url': this.url,
        'platform': "android"
      }));
      a4_0x5ca571.info("Session " + this.session + " - Webview Connected");
      const _0x373bb6 = _0x1dfcf6.url;
      return Helper.getTelegramQuery(_0x373bb6, 0x3);
    } catch (_0x4b109b) {
      throw _0x4b109b;
    }
  }
}
