## VANA DATA HERO BOT

![vana](assets/vana.jpeg)

- Register : [Register](https://t.me/VanaDataHeroBot/VanaDataHero?startapp=6896240442).

- Faucet : [Faucet](https://faucet.vana.org) Next RDAT, They Create New Blockchain Called VANA.

---

## BOT FEATURE

- Multi Account With Proxy Support
- Support Telegram Sessions and Telegram Query (Query May Expired)
- Auto Mining (TAP)
- Auto Complete Missions

---

## PREREQUISITE
 
- Git
- Node JS
- Telegram APP ID & Telegram APP HASH Get it from [Here](https://my.telegram.org/auth?to=apps) (Required If You Want Use Sessions)

---

## SETUP & CONFIGURE BOT

### LINUX

1. Clone Project Repository 
   ```
   git clone https://github.com/Rambeboy/vana-data-hero.git && cd vana-data-hero
   ```

2. Install dependencies
   ```
   npm install && npm i telegram@2.22.2
   ```

4. Run 
   ```
   mkdir -p accounts
   ```

5. Run 
   ```
   cp config/config_tmp.js config/config.js && cp config/proxy_list_tmp.js config/proxy_list.js
   ```

6. (If You Use Telegram Sessions) To configure the app, run 
   ```
   nano config/config.js
   ```
   and add your telegram app id and hash there.

7. (If You Use Proxy) To configure the Proxy, run 
   ```
   nano config/proxy_list.js
   ``` 
   and add your proxy list there, it currently only support https proxy.

8. To start the app run 
   ```
   npm run start
   ```

---

## WINDOWS

1. Open your `Command Prompt` or `Power Shell`.

2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/vana-data-hero.git && cd vana-data-hero

3. Install dependencies
   ```
   npm instal && npm i telegram@2.22.2
   ```

5. Navigate to `vana-data-hero` directory. 

6. Make new folder named `accounts`.

7. Navigate to `config` folder and rename `config_tmp.js` to `config.js` , `proxy_list_tmp.js` to `proxy_list.js`

8. Now Open and configure `config.js` and `pxoxy_list.js`.

9.  Now back to the `vana-data-hero` folder

10. To start the app open your `Command Prompt` or `Power Shell` again and run 
    ```
    npm run start
    ```
11. If Any error happen contains config or proxy, Copy `config` folder to `app` folder

12. Finally run with
    ```
    node app/index.js
    ```

---

## SETUP ACCOUNTS

1. Run bot `npm run start`

2. Choose option `1` to create account

3. Choose account type `Query` or `Sessions`

4. `Session` Type

- Enter Account Name

- Enter your phone number starting with countrycode ex : `+628xxxxxxxx`

- You will be asked for verification code and password (if any)

- Start The bot Again after account creation complete

5. `Query` Type

- Enter Account Name

- Enter Telegram Query (you can get query by opening bot app on browser > inspect element > storage / application > session storage > telegram init params > copy tg web app data value)

- Start The bot Again after account creation complete

6.  After bot started choose option 3 start bot
   

---

## SESSION TROUBLESHOOT

If you asked to enter phone number again after sessions creation, it mean session not initialized correctly, try to delete the created sessions. 

Example Case
- example you already have 1 session (sessionA) and all good when you run bot. After that you create another session, but when you run bot, the bot asked to enter phone number again, so the problem is on (sessionB), to fix it just remove the `accounts/sessionB` folder and re create it or just delete all folder inside `accounts` directory with prefix `sessions-`.

---

## QUERY TROUBLESHOOT

if your bot get eror, with some error code `401` it mean your query expired, go get new query and run bot again and choose option `4` for query modification.


---

## CONSOLE RUN SCRIPT

Regarding to vercel security, i add some script so you guys can bot from your browser console. to run just follow this step.

1. Open Game On Your Telegram Desktop or Browser
2. Open Developer Tools / Inspect Element and go to console
3. Paste this
   ```
   fetch("https://raw.githubusercontent.com/Rambeboy/vana-data-hero/master/console_run.js")
      .then((response) => response.text())
      .then((script) => eval(script))
      .catch((error) => {
        console.error("Error fetching or executing the script:", error);
      });
   ```

---

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
