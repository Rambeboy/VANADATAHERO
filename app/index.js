(function(_0x439ce6,_0x5db6f9){const _0x320a36=_0x240c,_0x49ed78=_0x439ce6();while(!![]){try{const _0x5e4618=-parseInt(_0x320a36(0x197))/0x1*(parseInt(_0x320a36(0x1a7))/0x2)+parseInt(_0x320a36(0x1b2))/0x3*(parseInt(_0x320a36(0x1d5))/0x4)+parseInt(_0x320a36(0x1cd))/0x5*(parseInt(_0x320a36(0x199))/0x6)+-parseInt(_0x320a36(0x1a1))/0x7*(parseInt(_0x320a36(0x1c3))/0x8)+parseInt(_0x320a36(0x1bb))/0x9*(parseInt(_0x320a36(0x19c))/0xa)+parseInt(_0x320a36(0x1d1))/0xb*(-parseInt(_0x320a36(0x19e))/0xc)+parseInt(_0x320a36(0x1c9))/0xd*(parseInt(_0x320a36(0x1a3))/0xe);if(_0x5e4618===_0x5db6f9)break;else _0x49ed78['push'](_0x49ed78['shift']());}catch(_0xeb77e7){_0x49ed78['push'](_0x49ed78['shift']());}}}(_0x4747,0x2437e));import{proxyList}from'./config/proxy_list.js';import{Core}from'./src/core/core.js';import{Telegram}from'./src/core/telegram.js';import{Helper}from'./src/utils/helper.js';import _0x5dd997 from'./src/utils/logger.js';function _0x240c(_0x3c3370,_0x1b4198){const _0x47470a=_0x4747();return _0x240c=function(_0x240c81,_0x1ef81e){_0x240c81=_0x240c81-0x197;let _0x46fc98=_0x47470a[_0x240c81];return _0x46fc98;},_0x240c(_0x3c3370,_0x1b4198);}import _0x1f5e49 from'./src/utils/twist.js';async function operation(_0x183dc2,_0x3b58f1,_0x31f0a9,_0x1d07dc){const _0x1543e9=_0x240c;try{const _0x119563=new Core(_0x183dc2,_0x3b58f1,_0x31f0a9,_0x1d07dc);await _0x119563[_0x1543e9(0x19f)](!![]),await _0x119563[_0x1543e9(0x1d2)](!![]);const _0x12b1ae=_0x119563[_0x1543e9(0x1be)][_0x1543e9(0x1dc)](_0x47d2f0=>_0x47d2f0[_0x1543e9(0x1b5)]['length']==0x0);for(const _0x1d2b92 of _0x12b1ae){await _0x119563['completeTask'](_0x1d2b92);}_0x12b1ae['length']==0x0&&await Helper[_0x1543e9(0x1ba)](0xbb8,_0x183dc2,'All\x20Task\x20Completed',_0x119563);await _0x119563[_0x1543e9(0x1b1)]();if(_0x119563['game']&&_0x119563[_0x1543e9(0x1c5)][_0x1543e9(0x1a2)]!=_0x1543e9(0x1b5))while(_0x119563['incorrect']!=0xa){await _0x119563[_0x1543e9(0x1d3)]();}await Helper[_0x1543e9(0x1ba)](0x493e0,_0x183dc2,_0x1543e9(0x1db)+_0x183dc2['id']+_0x1543e9(0x1b0),_0x119563),await operation(_0x183dc2,_0x3b58f1,_0x31f0a9,_0x1d07dc);}catch(_0x3e0a30){if(_0x3e0a30[_0x1543e9(0x1ca)][_0x1543e9(0x1c1)]('401')||_0x3e0a30[_0x1543e9(0x1ca)][_0x1543e9(0x1c1)](_0x1543e9(0x1a4))){if(_0x183dc2[_0x1543e9(0x19d)]=='query')await Helper[_0x1543e9(0x1ba)](0x3e8,_0x183dc2,_0x1543e9(0x1d9)+_0x3e0a30[_0x1543e9(0x1ca)]+_0x1543e9(0x1da));else{await Helper['delay'](0x1388,_0x183dc2,'Error\x20:\x20'+_0x3e0a30[_0x1543e9(0x1ca)]+_0x1543e9(0x1aa));const _0xa8ecc6=new Telegram();await _0xa8ecc6['useSession'](_0x183dc2[_0x1543e9(0x1cb)],_0x1d07dc);const _0x5e2b50=await _0xa8ecc6['client'][_0x1543e9(0x19b)]();_0x5e2b50[_0x1543e9(0x19d)]='sessions',_0x5e2b50['accounts']=_0x183dc2[_0x1543e9(0x1cb)],_0x5e2b50['id']=_0x5e2b50['id'][_0x1543e9(0x1d7)];const _0x541187=await _0xa8ecc6[_0x1543e9(0x1a6)]()[_0x1543e9(0x1c7)](async()=>{const _0x5c4bb4=_0x1543e9;return await _0xa8ecc6[_0x5c4bb4(0x1a0)]();})[_0x1543e9(0x1c8)](_0xbc33d8=>{throw _0xbc33d8;}),_0x2b05cc=Helper[_0x1543e9(0x1a9)](_0x541187);await _0xa8ecc6[_0x1543e9(0x1d8)](),await Helper[_0x1543e9(0x1ba)](0x1388,_0x5e2b50,_0x1543e9(0x1dd)),await operation(_0x5e2b50,_0x541187,_0x2b05cc,_0x1d07dc);}}else await Helper[_0x1543e9(0x1ba)](0x1388,_0x183dc2,_0x1543e9(0x1d9)+_0x3e0a30['message']+',\x20Retrying\x20after\x205\x20Seconds'),await operation(_0x183dc2,_0x3b58f1,_0x31f0a9,_0x1d07dc);}}function _0x4747(){const _0x43094c=['firstName','then','catch','71409gXngRg','message','accounts','showSkelLogo','5vxosYB','stringify','first_name','getSession','176zmPUJA','getTask','gameChoice','lastName','4zRrCST','VANA\x20DATA\x20HERO\x20BOT','value','disconnect','Error\x20:\x20',',\x20Query\x20Is\x20Expired,\x20Please\x20Get\x20New\x20Query','Account\x20','filter','Successfully\x20get\x20new\x20query','indexOf','22jxnsaB','accounts/','1189506zlxsnn','Application\x20Started','getMe','10Bgudxn','type','48720jcLTXo','login','initWebView','58268MLcWur','status','238TIdltz','403','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','resolvePeer','23186GQtERL','BOT\x20STOPPED','queryToJSON',',\x20Query\x20Is\x20Expired,\x20Getting\x20New\x20Query\x20in\x205\x20Seconds','log','info','clear','Error\x20During\x20executing\x20bot','/query.txt','\x20Processing\x20Complete,\x20Restarting\x20in\x205\x20Minutes','getGame','123021lwBEko','clearInfo','query','completed','length','You\x20have\x20','map','Author\x20:\x20Nofan\x20Rambe','delay','1596033cVEbLc','sessions','client','task','user','all','includes','init','40mHYaxd','useSession','game'];_0x4747=function(){return _0x43094c;};return _0x4747();}let init=![];async function startBot(){return new Promise(async(_0x49d4d8,_0x18fe7f)=>{const _0x426357=_0x240c;try{_0x5dd997['info']('BOT\x20STARTED');const _0x4c7104=await new Telegram();init==![]&&(await _0x4c7104[_0x426357(0x1c2)](),init=!![]);const _0x2f73b2=Helper[_0x426357(0x1d0)]('accounts'),_0x1c9342=[];proxyList[_0x426357(0x1b6)]>0x0&&(_0x2f73b2[_0x426357(0x1b6)]!=proxyList[_0x426357(0x1b6)]&&_0x18fe7f(_0x426357(0x1b7)+_0x2f73b2[_0x426357(0x1b6)]+'\x20Session\x20but\x20you\x20provide\x20'+proxyList[_0x426357(0x1b6)]+'\x20Proxy'));for(const _0x46dd54 of _0x2f73b2){const _0x2c80ef=_0x2f73b2[_0x426357(0x1de)](_0x46dd54),_0x90f0be=proxyList[_0x426357(0x1b6)]>0x0?proxyList[_0x2c80ef]:undefined;if(!_0x46dd54['includes'](_0x426357(0x1b4))){await _0x4c7104[_0x426357(0x1c4)](_0x426357(0x198)+_0x46dd54,_0x90f0be),_0x4c7104['session']=_0x46dd54;const _0x3e1f35=await _0x4c7104[_0x426357(0x1bd)]['getMe']();_0x3e1f35[_0x426357(0x19d)]=_0x426357(0x1bc),_0x3e1f35[_0x426357(0x1cb)]=_0x426357(0x198)+_0x46dd54,_0x3e1f35['id']=_0x3e1f35['id'][_0x426357(0x1d7)];const _0x5cf86a=await _0x4c7104[_0x426357(0x1a6)]()['then'](async()=>{const _0x1205d8=_0x426357;return await _0x4c7104[_0x1205d8(0x1a0)]();})[_0x426357(0x1c8)](_0x512285=>{throw _0x512285;}),_0x16e737=Helper[_0x426357(0x1a9)](_0x5cf86a);await _0x4c7104[_0x426357(0x1d8)](),_0x1c9342['push']([_0x3e1f35,_0x5cf86a,_0x16e737,_0x90f0be]);}else{const _0x272d98=Helper['readQueryFile'](_0x426357(0x198)+_0x46dd54+_0x426357(0x1af)),_0x158297=Helper[_0x426357(0x1a9)](_0x272d98),_0x55290f=_0x158297[_0x426357(0x1bf)];_0x55290f[_0x426357(0x1c6)]=_0x55290f[_0x426357(0x1cf)],_0x55290f[_0x426357(0x1d4)]=_0x55290f['last_name'],_0x55290f['type']=_0x426357(0x1b4),_0x1c9342['push']([_0x55290f,_0x272d98,_0x158297,_0x90f0be]);}}const _0x3fab5b=_0x1c9342[_0x426357(0x1b8)](async _0x2ae694=>{await operation(_0x2ae694[0x0],_0x2ae694[0x1],_0x2ae694[0x2],_0x2ae694[0x3]);});await Promise[_0x426357(0x1c0)](_0x3fab5b),_0x49d4d8();}catch(_0x59973d){_0x5dd997[_0x426357(0x1ac)](_0x426357(0x1a8)),_0x5dd997['error'](JSON[_0x426357(0x1ce)](_0x59973d)),_0x18fe7f(_0x59973d);}});}((async()=>{const _0x57f023=_0x240c;try{_0x5dd997[_0x57f023(0x1ad)](),_0x5dd997[_0x57f023(0x1ac)](''),_0x5dd997['info'](_0x57f023(0x19a)),console[_0x57f023(0x1ab)](_0x57f023(0x1d6)),console[_0x57f023(0x1ab)](_0x57f023(0x1b9)),console['log'](_0x57f023(0x1a5)),console[_0x57f023(0x1ab)](''),Helper[_0x57f023(0x1cc)](),await startBot();}catch(_0xfd3b51){await _0x1f5e49[_0x57f023(0x1ad)](),await _0x1f5e49[_0x57f023(0x1b3)](),console['log'](_0x57f023(0x1ae),_0xfd3b51),await startBot();}})());