import { HttpsProxyAgent } from 'https-proxy-agent';
import { Helper } from '../utils/helper.js';
import a2_0x250ae5 from '../utils/logger.js';
import a2_0x16e2db from 'axios';
export class API {
  constructor(_0x22bc8b, _0x3c22e6, _0x5d29bd, _0xd089af, _0x47d58d, _0x3b36dc) {
    this.ua = Helper.randomUserAgent();
    this.query = _0x22bc8b;
    this.proxy = _0x3c22e6;
    this.url = _0x5d29bd;
    this.origin = _0x47d58d;
    this.host = _0xd089af;
    this.referer = _0x3b36dc;
  }
  ["generateHeaders"](_0x27ebab) {
    const _0x50f50a = {
      'Accept': "application/json, text/plain, */*",
      'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
      'Content-Type': "application/json",
      'Sec-Fetch-Dest': "empty",
      'Sec-Fetch-Site': "same-site",
      'Sec-Fetch-Mode': 'cors',
      'Host': this.host,
      'Origin': this.origin,
      'Referer': this.origin + '/',
      'x-telegram-web-app-init-data': this.query
    };
    if (_0x27ebab) {
      _0x50f50a.Authorization = "Bearer " + _0x27ebab;
    }
    return _0x50f50a;
  }
  async ["fetch"](_0x8774d7, _0x1e071f = "GET", _0x4c46e6, _0x1ffdfc = {}, _0x423ace = {}) {
    try {
      return this.proxy ? await this.fetchAxios(_0x8774d7, _0x1e071f, _0x4c46e6, _0x1ffdfc, _0x423ace) : await this.fetchHttp(_0x8774d7, _0x1e071f, _0x4c46e6, _0x1ffdfc, _0x423ace);
    } catch (_0x2a3a86) {
      throw _0x2a3a86;
    }
  }
  async ['fetchHttp'](_0x2d05c1, _0x55717a, _0x2340a7, _0x448432 = {}, _0x2a5c9f = {}) {
    try {
      const _0x1877b2 = '' + this.url + _0x2d05c1;
      const _0x1bda7e = {
        ..._0x2a5c9f,
        ...this.generateHeaders(_0x2340a7)
      };
      const _0x43c3f1 = {
        'headers': _0x1bda7e,
        'method': _0x55717a
      };
      a2_0x250ae5.info(_0x55717a + " : " + _0x1877b2 + " " + (this.proxy ? this.proxy : ''));
      a2_0x250ae5.info("Request Header : " + JSON.stringify(_0x1bda7e));
      if (_0x55717a !== 'GET') {
        _0x43c3f1.body = '' + JSON.stringify(_0x448432);
        a2_0x250ae5.info("Request Body : " + _0x43c3f1.body);
      }
      const _0x486b46 = await fetch(_0x1877b2, _0x43c3f1);
      a2_0x250ae5.info("Response : " + _0x486b46.status + " " + _0x486b46.statusText);
      if (_0x486b46.ok || _0x486b46.status == 0x190 || _0x486b46.status == 0x193) {
        const _0x20736f = _0x486b46.headers.get('content-type');
        let _0x335226;
        if (_0x20736f && _0x20736f.includes('application/json')) {
          _0x335226 = {
            'status': _0x486b46.status,
            ...(await _0x486b46.json())
          };
        } else {
          _0x335226 = {
            'status': _0x486b46.status,
            ...(await _0x486b46.text())
          };
        }
        if (_0x486b46.ok) {
          _0x335226.status = 0xc8;
        }
        a2_0x250ae5.info("Response Data : " + JSON.stringify(_0x335226));
        return _0x335226;
      } else {
        throw new Error(_0x486b46.status + " - " + _0x486b46.statusText);
      }
    } catch (_0x55f9e6) {
      a2_0x250ae5.error("Error : " + _0x55f9e6.message);
      throw _0x55f9e6;
    }
  }
  async ["fetchAxios"](_0x158d34, _0x48b09d = "GET", _0xbd30a4, _0x278261 = {}, _0x2a6cb9 = {}) {
    try {
      const _0x28ee20 = '' + this.url + _0x158d34;
      const _0x5decd5 = {
        ..._0x2a6cb9,
        ...(await this.generateHeaders(_0xbd30a4))
      };
      this.axiosInstance = a2_0x16e2db.create({
        'baseURL': _0x28ee20,
        'headers': {}
      });
      a2_0x250ae5.info(_0x48b09d + " : " + _0x28ee20 + " " + (this.proxy ? this.proxy : ''));
      a2_0x250ae5.info("Request Header : " + JSON.stringify(_0x5decd5));
      a2_0x250ae5.info("Request Body : " + JSON.stringify(_0x278261));
      const _0xa7f552 = {
        'method': _0x48b09d,
        'url': _0x28ee20,
        'headers': _0x5decd5,
        'httpsAgent': new HttpsProxyAgent(this.proxy),
        'data': _0x278261
      };
      const _0x17750b = await this.axiosInstance.request(_0xa7f552);
      const _0x1b59cd = {
        'status': _0x17750b.status,
        ..._0x17750b.data
      };
      a2_0x250ae5.info("Response : " + _0x17750b.status + " " + _0x17750b.statusText);
      let _0x56741a = JSON.stringify(_0x17750b.data);
      if (_0x56741a.length > 0x96) {
        _0x56741a = _0x56741a.substring(0x0, 0x96) + '...';
      }
      a2_0x250ae5.info("Response Data : " + _0x56741a);
      return _0x1b59cd;
    } catch (_0x5ac7b8) {
      a2_0x250ae5.error("Error : " + _0x5ac7b8.message);
      if (_0x5ac7b8.response && _0x5ac7b8.status === 0x190) {
        const _0x11b1e0 = {
          'status': _0x5ac7b8.status,
          ..._0x5ac7b8.response.data
        };
        return _0x11b1e0;
      } else {
        throw _0x5ac7b8;
      }
    }
  }
}
