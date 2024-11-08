let tasks;
let player;
let uncompletedTask;

const getPlayerInfo = async () => {
  try {
    const res = await fetch("https://www.vanadatahero.com/api/player", {
      cache: "default",
      credentials: "include",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        "X-Telegram-Web-App-Init-Data": JSON.parse(
          sessionStorage.getItem("__telegram__initParams")
        ).tgWebAppData,
      },
      method: "GET",
      mode: "cors",
      redirect: "follow",
      referrer: "https://www.vanadatahero.com/home",
      referrerPolicy: "strict-origin-when-cross-origin",
    });
    if (res.ok) {
      console.log(`-> Successfully Get Player Info`);
      const data = await res.json();
      player = data;
    } else if (res.status == 400) {
      const data = await res.json();
      console.log(data.message);
    } else {
      console.log(`-> Error Get Player Info : ${res.status}-${res.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};
const startMining = async () => {
  try {
    const res = await fetch("https://www.vanadatahero.com/api/tasks/1", {
      body: '{"status":"completed","points":100}',
      cache: "default",
      credentials: "include",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        "X-Telegram-Web-App-Init-Data": JSON.parse(
          sessionStorage.getItem("__telegram__initParams")
        ).tgWebAppData,
      },
      method: "POST",
      mode: "cors",
      redirect: "follow",
      referrer: "https://www.vanadatahero.com/home",
      referrerPolicy: "strict-origin-when-cross-origin",
    });
    if (res.ok) {
      console.log(`-> Successfully Start Mining`);
    } else if (res.status == 400) {
      const data = await res.json();
      console.log(data.message);
    } else {
      console.log(`-> Error Start Mining : ${res.status}-${res.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const getTask = async () => {
  try {
    const res = await fetch("https://www.vanadatahero.com/api/tasks", {
      cache: "default",
      credentials: "include",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        "X-Telegram-Web-App-Init-Data": JSON.parse(
          sessionStorage.getItem("__telegram__initParams")
        ).tgWebAppData,
      },
      method: "GET",
      mode: "cors",
      redirect: "follow",
      referrer: "https://www.vanadatahero.com/home",
      referrerPolicy: "strict-origin-when-cross-origin",
    });
    if (res.ok) {
      const data = await res.json();
      console.log(`-> Successfully Get Task`);
      tasks = data.tasks.filter(
        (item) => item.id != 1 && item.id != 17 && item.id != 5
      );
    } else if (res.status == 400) {
      const data = await res.json();
      console.log(data.message);
    } else {
      console.log(`-> Error Get Tasks : ${res.status}-${res.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};
const completeAndClaimTask = async (task) => {
  try {
    console.log(`-> Try to Completing Task ${task.name}`);
    const body = {
      status: "completed",
      points: task.points,
    };
    const res = await fetch("https://www.vanadatahero.com/api/tasks", {
      body: JSON.stringify(body),
      cache: "default",
      credentials: "include",
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        "X-Telegram-Web-App-Init-Data": JSON.parse(
          sessionStorage.getItem("__telegram__initParams")
        ).tgWebAppData,
      },
      method: "POST",
      mode: "cors",
      redirect: "follow",
      referrer: "https://www.vanadatahero.com/home",
      referrerPolicy: "strict-origin-when-cross-origin",
    });
    if (res.ok) {
      console.log(`-> Task ${task.name} Completed`);
    } else if (res.status == 400) {
      const data = await res.json();
      console.log(data.message);
    } else {
      console.log(
        `-> Failed to Complete task ${task.name} : ${res.status}-${res.statusText}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const runScript = async () => {
  console.log("==============================");
  console.log("=     VANA DATA HERO Bot     =");
  console.log("==============================");
  console.log();

  console.log(`-> Getting Player Information`);
  await getPlayerInfo();
  if (player) {
    console.log();
    console.log(`Username         : ${player.tgUsername}`);
    console.log(`Point            : ${player.points}`);
    console.log();
  }
  console.log(`-> Getting Available Task`);
  await getTask();
  if (tasks.length > 0) {
    const uncompletedTask = tasks.filter((item) => item.completed.length == 0);
    for (const task of uncompletedTask) {
      await completeAndClaimTask(task);
    }
    if (uncompletedTask.length == 0) {
      console.log(`-> All Task Completed`);
    }
  }

  const totalTime = 30 * 60 * 1000;
  let elapsedTime = 0;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  startMining();
  while (elapsedTime < totalTime) {
    console.log(`Delaying for 20 Seconds Before Tapping...`);
    await delay(20000);
    startMining();
    elapsedTime += 20000;
  }

  console.log(`Successfully Tapping for 30 Minutes`);
  console.log(`ACCOUNT Process complete`);
  console.log();
};

runScript();

/**
 * 
 * RUN WITH 
 * 
 * fetch(
  ""
)
  .then((response) => response.text())
  .then((script) => eval(script))
  .catch((error) => {
    console.error("Error fetching or executing the script:", error);
  });
 * 
 */
