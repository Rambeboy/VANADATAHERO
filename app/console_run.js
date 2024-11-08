let tasks;
let player;
const getPlayerInfo = async () => {
  try {
    const _0x2e2dc3 = await fetch('https://www.vanadatahero.com/api/player', {
      'cache': 'default',
      'credentials': "include",
      'headers': {
        'Accept': "*/*",
        'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
        'Content-Type': 'application/json',
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        'X-Telegram-Web-App-Init-Data': JSON.parse(sessionStorage.getItem("__telegram__initParams")).tgWebAppData
      },
      'method': 'GET',
      'mode': 'cors',
      'redirect': "follow",
      'referrer': "https://www.vanadatahero.com/home",
      'referrerPolicy': "strict-origin-when-cross-origin"
    });
    if (_0x2e2dc3.ok) {
      console.log("-> Successfully Get Player Info");
      const _0x124d29 = await _0x2e2dc3.json();
      player = _0x124d29;
    } else {
      if (_0x2e2dc3.status == 0x190) {
        const _0x2df63b = await _0x2e2dc3.json();
        console.log(_0x2df63b.message);
      } else {
        console.log("-> Error Get Player Info : " + _0x2e2dc3.status + '-' + _0x2e2dc3.statusText);
      }
    }
  } catch (_0x4769a9) {
    console.log(_0x4769a9);
  }
};
const startMining = async () => {
  try {
    const _0x2247e8 = await fetch('https://www.vanadatahero.com/api/tasks/1', {
      'body': "{\"status\":\"completed\",\"points\":100}",
      'cache': "default",
      'credentials': "include",
      'headers': {
        'Accept': "*/*",
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'Content-Type': 'application/json',
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        'X-Telegram-Web-App-Init-Data': JSON.parse(sessionStorage.getItem('__telegram__initParams')).tgWebAppData
      },
      'method': "POST",
      'mode': 'cors',
      'redirect': 'follow',
      'referrer': "https://www.vanadatahero.com/home",
      'referrerPolicy': "strict-origin-when-cross-origin"
    });
    if (_0x2247e8.ok) {
      console.log("-> Successfully Start Mining");
    } else {
      if (_0x2247e8.status == 0x190) {
        const _0x5359b7 = await _0x2247e8.json();
        console.log(_0x5359b7.message);
      } else {
        console.log("-> Error Start Mining : " + _0x2247e8.status + '-' + _0x2247e8.statusText);
      }
    }
  } catch (_0x53ec01) {
    console.log(_0x53ec01);
  }
};
const getTask = async () => {
  try {
    const _0x197fd9 = await fetch("https://www.vanadatahero.com/api/tasks", {
      'cache': 'default',
      'credentials': "include",
      'headers': {
        'Accept': "*/*",
        'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
        'Content-Type': 'application/json',
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        'X-Telegram-Web-App-Init-Data': JSON.parse(sessionStorage.getItem("__telegram__initParams")).tgWebAppData
      },
      'method': "GET",
      'mode': "cors",
      'redirect': 'follow',
      'referrer': "https://www.vanadatahero.com/home",
      'referrerPolicy': "strict-origin-when-cross-origin"
    });
    if (_0x197fd9.ok) {
      const _0x400895 = await _0x197fd9.json();
      console.log("-> Successfully Get Task");
      tasks = _0x400895.tasks.filter(_0x113d6a => _0x113d6a.id != 0x1 && _0x113d6a.id != 0x11 && _0x113d6a.id != 0x5);
    } else {
      if (_0x197fd9.status == 0x190) {
        const _0x3e2661 = await _0x197fd9.json();
        console.log(_0x3e2661.message);
      } else {
        console.log("-> Error Get Tasks : " + _0x197fd9.status + '-' + _0x197fd9.statusText);
      }
    }
  } catch (_0x1f7c68) {
    console.log(_0x1f7c68);
  }
};
const completeAndClaimTask = async _0x1c51e4 => {
  try {
    console.log("-> Try to Completing Task " + _0x1c51e4.name);
    const _0xbb162f = {
      'status': "completed",
      'points': _0x1c51e4.points
    };
    const _0x395448 = await fetch('https://www.vanadatahero.com/api/tasks', {
      'body': JSON.stringify(_0xbb162f),
      'cache': "default",
      'credentials': "include",
      'headers': {
        'Accept': "*/*",
        'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
        'Content-Type': 'application/json',
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        'X-Telegram-Web-App-Init-Data': JSON.parse(sessionStorage.getItem("__telegram__initParams")).tgWebAppData
      },
      'method': "POST",
      'mode': "cors",
      'redirect': "follow",
      'referrer': "https://www.vanadatahero.com/home",
      'referrerPolicy': "strict-origin-when-cross-origin"
    });
    if (_0x395448.ok) {
      console.log("-> Task " + _0x1c51e4.name + " Completed");
    } else {
      if (_0x395448.status == 0x190) {
        const _0x3185ab = await _0x395448.json();
        console.log(_0x3185ab.message);
      } else {
        console.log("-> Failed to Complete task " + _0x1c51e4.name + " : " + _0x395448.status + '-' + _0x395448.statusText);
      }
    }
  } catch (_0x4bccbf) {
    console.log(_0x4bccbf);
  }
};
const runScript = async () => {
  console.log("==============================");
  console.log("=     VANA DATA HERO Bot     =");
  console.log("=         VIKITOSHI          =");
  console.log("==============================");
  console.log("-> Getting Player Information");
  await getPlayerInfo();
  if (player) {
    console.log();
    console.log("Username         : " + player.tgUsername);
    console.log("Point            : " + player.points);
    console.log();
  }
  console.log("-> Getting Available Task");
  await getTask();
  if (tasks.length > 0x0) {
    const _0x44fd2c = tasks.filter(_0x1e8f7c => _0x1e8f7c.completed.length == 0x0);
    for (const _0x3bef33 of _0x44fd2c) {
      await completeAndClaimTask(_0x3bef33);
    }
    if (_0x44fd2c.length == 0x0) {
      console.log("-> All Task Completed");
    }
  }
  let _0x1c1f25 = 0x0;
  const _0x3b8441 = _0x7091b1 => new Promise(_0xe974af => setTimeout(_0xe974af, _0x7091b1));
  startMining();
  while (_0x1c1f25 < 1800000) {
    console.log("Delaying for 20 Seconds Before Tapping...");
    await _0x3b8441(0x4e20);
    startMining();
    _0x1c1f25 += 0x4e20;
  }
  console.log("Successfully Tapping for 30 Minutes");
  console.log("ACCOUNT Process complete");
  console.log();
};
runScript();
