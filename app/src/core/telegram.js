import _0x5c5374 from 'input';
import { Helper } from '../utils/helper.js';
import { Api, TelegramClient } from 'telegram';
import { StoreSession } from 'telegram/sessions/StoreSession.js';
import _0x761eb8 from '../utils/logger.js';
import { FloodWaitError } from 'telegram/errors/RPCErrorList.js';
import { Config } from '../../config/config.js';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { LogLevel } from 'telegram/extensions/Logger.js';
export class Telegram {
  ["storeSession"];
  constructor() {
    this.accountName = "accounts";
    this.url = "https://www.vanadatahero.com/challenges";
    this.bot = 'VanaDataHeroBot';
  }
  async ['init']() {
    try {
      await this.onBoarding();
    } catch (_0x56c712) {
      console.log(_0x56c712);
      _0x761eb8.error('' + JSON.stringify(_0x56c712));
      throw _0x56c712;
    }
  }
  async ['onBoarding']() {
    try {
      let _0x4e8027 = "Welcome to Bot\n\nBy : Nofan Rambe\n \nLet's Getting Started\n \nYour Session List:\n";
      const _0x17c32d = Helper.getSession("accounts");
      if (_0x17c32d.length == 0x0) {
        _0x4e8027 += "<empty>";
      } else {
        for (const _0x3e6475 of _0x17c32d) {
          _0x4e8027 += "- " + _0x3e6475 + "\n";
        }
      }
      _0x4e8027 += "\n \nPlease Choose a menu: \n";
      _0x4e8027 += "\n \n1. Create Account \n2. Reset Account \n3. Start Bot\n4. Query modification\n \nInput your choice :";
      const _0x9a9993 = await _0x5c5374.text(_0x4e8027);
      if (_0x9a9993 == 0x1) {
        await this.accountType();
      } else {
        if (_0x9a9993 == 0x2) {
          Helper.resetAccounts();
          await Helper.delay(0xbb8);
          await this.onBoarding();
        } else {
          if (_0x9a9993 == 0x3) {
            if (Helper.getSession(this.accountName)?.["length"] == 0x0) {
              console.info("You don't have any Accounts, please create first");
              await this.onBoarding();
            }
          } else if (_0x9a9993 == 0x4) {
            await this.queryModificaiton();
          } else {
            console.error("Invalid input, Please try again");
            await this.onBoarding();
          }
        }
      }
    } catch (_0x2ce0ea) {
      throw _0x2ce0ea;
    }
  }
  async ['queryModificaiton']() {
    try {
      const _0x1730a2 = Helper.getSession('accounts');
      const _0x4e9d3e = _0x1730a2.filter(_0x550815 => _0x550815.includes("query"));
      let _0x14120f = "Your Query Account List :\n \n";
      for (const _0x2df1eb of _0x4e9d3e) {
        _0x14120f += _0x1730a2.indexOf(_0x2df1eb) + 0x1 + ". " + _0x2df1eb + "\n";
      }
      if (_0x4e9d3e.length == 0x0) {
        console.log("You dont have any Query Account.");
        await this.onBoarding();
      } else {
        _0x14120f += "\n \nPlease Select Query Account for modification:";
      }
      const _0xed51fa = await _0x5c5374.text(_0x14120f);
      if (_0x4e9d3e[_0xed51fa - 0x1] != undefined) {
        const _0x856c00 = _0x4e9d3e[_0xed51fa - 0x1];
        this.accountName = 'accounts/' + _0x856c00;
        const _0xa4b877 = "Old Query : " + Helper.readQueryFile(this.accountName + "/query.txt") + "\n \nPlease Enter New Query ";
        const _0x1c2eb9 = await _0x5c5374.text(_0xa4b877);
        await Helper.saveQueryFile(this.accountName, _0x1c2eb9);
        await Helper.delay(0xbb8);
        await this.onBoarding();
      } else {
        console.error("Invalid input, Please try again");
        await this.queryModificaiton();
      }
    } catch (_0x21ea65) {
      throw _0x21ea65;
    }
  }
  async ["sessionCreation"]() {
    try {
      if (Config.TELEGRAM_APP_ID == undefined || Config.TELEGRAM_APP_HASH == undefined) {
        throw new Error("Please configure your TELEGRAM_APP_ID and TELEGRAM_APP_HASH first");
      }
      const _0x43fd30 = Helper.getSession("accounts");
      let _0x53d3ee = "Your Account List :\n \n";
      for (const _0x5def9b of _0x43fd30) {
        _0x53d3ee += _0x43fd30.indexOf(_0x5def9b) + 0x1 + ". " + _0x5def9b + "\n";
      }
      if (_0x43fd30.length == 0x0) {
        _0x53d3ee += "<empty> \n \nPlease enter Session Name :";
      } else {
        _0x53d3ee += "\n \nYou already have sessions, cancel(CTRL+C) or create new Session :";
      }
      const _0x1f5acb = await _0x5c5374.text(_0x53d3ee);
      this.accountName = Helper.createDir("sessions-" + _0x1f5acb);
      await this.useSession(this.accountName);
      await this.disconnect();
      _0x761eb8.info("Session " + this.accountName + " - Created");
      console.log("Session " + _0x1f5acb + " - Created, Please Restart The Bot Again");
      this.storeSession.save();
      await Helper.delay(0xbb8);
      process.exit();
    } catch (_0x4247ed) {
      throw _0x4247ed;
    }
  }
  async ["queryCreation"]() {
    try {
      const _0x5c16e6 = Helper.getSession("accounts");
      let _0x3184be = "Your Account List :\n \n";
      for (const _0x3689bb of _0x5c16e6) {
        _0x3184be += _0x5c16e6.indexOf(_0x3689bb) + 0x1 + ". " + _0x3689bb + "\n";
      }
      if (_0x5c16e6.length == 0x0) {
        _0x3184be += "<empty> \n \nPlease enter Account Name :";
      } else {
        _0x3184be += "\n \nYou already have Account, cancel(CTRL+C) or create new Account :";
      }
      const _0x1580db = await _0x5c5374.text(_0x3184be);
      this.accountName = Helper.createDir("query-" + _0x1580db);
      const _0x53ca0f = await _0x5c5374.text("Please Enter Telegram Query : ");
      await Helper.saveQueryFile(this.accountName, _0x53ca0f);
      _0x761eb8.info("Query " + this.accountName + " - Created");
      console.log("Query " + _0x1580db + " - Created, Please Restart The Bot Again");
      await Helper.delay(0xbb8);
      process.exit();
    } catch (_0x19465e) {
      throw _0x19465e;
    }
  }
  async ['accountType']() {
    try {
      const _0x59a2cd = Helper.getSession('accounts');
      let _0x590a0b = "Your Account List :\n \n";
      if (_0x59a2cd.length > 0x0) {
        for (const _0x1f6ce4 of _0x59a2cd) {
          _0x590a0b += _0x59a2cd.indexOf(_0x1f6ce4) + 0x1 + ". " + _0x1f6ce4 + "\n";
        }
      } else {
        _0x590a0b += "<empty>\n";
      }
      _0x590a0b += "\n \nAvailable Account Type: \n1. Session \n2. Query\n \nPlease Entery Your Choice : ";
      const _0x100fac = await _0x5c5374.text(_0x590a0b);
      if (_0x100fac == 0x1) {
        await this.sessionCreation();
      } else if (_0x100fac == 0x2) {
        await this.queryCreation();
      } else {
        console.log("Invalid Input");
        await this.accountType();
      }
    } catch (_0x3d2229) {
      throw _0x3d2229;
    }
  }
  async ["useSession"](_0xe5669c, _0x16b305) {
    try {
      this.proxy = _0x16b305;
      const _0x196e2e = {
        'connectionRetries': 0x5
      };
      if (this.proxy) {
        _0x196e2e.agent = new HttpsProxyAgent(this.proxy);
      }
      this.storeSession = new StoreSession(_0xe5669c);
      this.client = new TelegramClient(this.storeSession, Config.TELEGRAM_APP_ID, Config.TELEGRAM_APP_HASH, _0x196e2e);
      this.client.setLogLevel(LogLevel.ERROR);
      this.storeSession.save();
      await this.client.start({
        'phoneNumber': async () => await _0x5c5374.text("Enter your Telegram Phone Number ?"),
        'password': async () => await _0x5c5374.text("Enter your Telegram Password?"),
        'phoneCode': async () => await _0x5c5374.text("Enter your Telegram Verification Code ?"),
        'onError': _0x112eff => {
          console.log(_0x112eff.message);
        }
      });
    } catch (_0x59c7fa) {
      throw _0x59c7fa;
    }
  }
  async ["resolvePeer"](_0x23142b) {
    try {
      _0x761eb8.info("Session " + this.session + " - Resolving Peer");
      while (this.peer == undefined) {
        try {
          this.peer = await this.client.getEntity(this.bot);
          break;
        } catch (_0x279d70) {
          if (_0x279d70 instanceof FloodWaitError) {
            const _0x4ed025 = _0x279d70.seconds;
            _0x761eb8.warn(this.client.session.serverAddress + " | FloodWait " + _0x279d70);
            _0x761eb8.info(this.client.session.serverAddress + " | Sleep " + _0x4ed025 + 's');
            await Helper.delay(_0x4ed025 * 0x3e8, _0x23142b, this.client.session.serverAddress + " | FloodWait " + _0x279d70);
          } else {
            throw _0x279d70;
          }
        }
      }
    } catch (_0x22254f) {
      throw _0x22254f;
    }
  }
  async ["disconnect"]() {
    await this.client.disconnect();
    await this.client.destroy();
    this.peer = undefined;
    this.accountName = undefined;
  }
  async ["initWebView"](_0x3c5f6a) {
    try {
      const _0x382266 = await this.client.invoke(new Api.messages.RequestAppWebView({
        'peer': this.bot,
        'app': new Api.InputBotAppShortName({
          'botId': await this.client.getInputEntity(this.bot),
          'shortName': 'VanaDataHero'
        }),
        'writeAllowed': true,
        'platform': "android",
        'startParam': Helper.creator,
        'compact': true
      }));
      _0x761eb8.info("Session " + this.session + " - Webview Connected");
      return Helper.getQueryFromUrl(_0x382266.url);
    } catch (_0x670280) {
      throw _0x670280;
    }
  }
}
