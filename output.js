//Tue Jul 23 2024 18:05:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x133685 = new _0x33562f("福田e家"),
  _0x59cb9e = require("fs");
let _0x19697a, _0xf4fcb7, _0x2dedf4;
const _0x9311a1 = "ftej.txt",
  _0xc546ef = "Fukuda";
let _0xb06669 = [];
try {
  _0xb06669 = _0xb06669.concat(_0x59cb9e.readFileSync("./" + _0x9311a1, "utf-8").split("\n") || []);
  console.log("ck文件[ " + _0x9311a1 + " ]加载成功");
  this.mxr = true;
} catch (_0xd8c6c6) {
  console.log("未发现本地文件 调用青龙环境变量");
  this.mxr = false;
}
if (this.mxr == false) try {
  _0xb06669 = _0xb06669.concat(((_0x133685.isNode() ? process.env[_0xc546ef] : _0x133685.getdata(_0xc546ef)) || "")?.["split"]("&") || []);
  console.log("环境变量[ " + _0xc546ef + " ]加载成功");
} catch (_0x12a203) {}
let _0x55cc26 = [],
  _0x3aedf2 = 0,
  _0xf50ecf = 0;
class _0x2d5de3 {
  constructor(_0x365ad5) {
    this.index = ++_0x3aedf2;
    this.valid = false;
    try {
      this.ck = _0x365ad5.split("#");
      this.user = _0x4ccfc6("" + this.ck[0]);
      this.ckValid = true;
    } catch (_0x4fa0d6) {}
  }
  async ["cashck"]() {
    try {
      let _0x39dd3e = "https://czyl.foton.com.cn/ehomes-new/homeManager/getLoginMember",
        _0x3231db = "{\"password\":\"" + this.ck[1] + "\",\"version_name\":\"\",\"version_auth\":\"\",\"device_id\":\"\",\"device_model\":\"\",\"ip\":\"\",\"name\":\"" + this.ck[0] + "\",\"version_code\":\"180\",\"deviceSystemVersion\":\"\",\"device_type\":\"0\"}",
        _0x22777b = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8"
        },
        _0xc45175 = _0x329f9e(_0x39dd3e, _0x22777b, _0x3231db);
      await _0x3e0692("post", _0xc45175);
      let _0x523537 = _0x19697a;
      _0x523537.code == 200 ? (console.log("账号 " + this.user + " 登录成功    "), this.token = _0x523537.data.token, this.memberComplexCode = _0x523537.data.memberComplexCode, this.uid = _0x523537.data.uid, this.memberID = _0x523537.data.memberID, _0x523537.data.signIn == "未签到" && (await this.sign()), await this.getTaskList(), await this.grxx()) : console.log("账号 " + this.user + " 登录失败 ");
    } catch (_0x2b2777) {
      console.log(_0x2b2777);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["getTaskList"]() {
    let _0x57e76c = Math.round(Date.now());
    try {
      let _0x21edc5 = "https://czyl.foton.com.cn/ehomes-new/homeManager/api/Member/getTaskList",
        _0x11ff2b = "{\"memberId\":\"" + this.memberID + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0x57e76c - 20220000) + ",\"businessId\":1}",
        _0x2575f3 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x65fc04 = _0x329f9e(_0x21edc5, _0x2575f3, _0x11ff2b);
      await _0x3e0692("post", _0x65fc04);
      let _0x50b25c = _0x19697a;
      if (_0x50b25c.code == 200) {
        if (_0x50b25c.data[4].completeNum == 0) {
          await this.sign();
        } else _0x50b25c.data[4].completeNum == 1 && console.log("账号 " + this.user + " " + _0x50b25c.data[4].ruleName + " 已完成 ");
        if (_0x50b25c.data[5].completeNum == 0) await this.fx();else _0x50b25c.data[5].completeNum == 1 && console.log("账号 " + this.user + " " + _0x50b25c.data[6].ruleName + " 已完成 ");
        if (_0x50b25c.data[6].completeNum == 0) {
          await this.topicList();
        } else {
          if (_0x50b25c.data[6].completeNum == 1) {
            console.log("账号 " + this.user + " " + _0x50b25c.data[6].ruleName + " 已完成 ");
          }
        }
        if (_0x50b25c.data[8].completeNum == 0) await this.follow2nd();else {
          if (_0x50b25c.data[8].completeNum == 1) {
            console.log("账号 " + this.user + " " + _0x50b25c.data[8].ruleName + " 已完成 ");
          }
        }
        if (_0x50b25c.data[7].completeNum == 0) await this.comment2nd();else _0x50b25c.data[7].completeNum == 1 && console.log("账号 " + this.user + " " + _0x50b25c.data[7].ruleName + " 已完成 ");
      }
    } catch (_0x26520c) {
      console.log(_0x26520c);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["sign"]() {
    let _0x48068f = Math.round(Date.now());
    try {
      let _0x1b86f9 = "https://czyl.foton.com.cn/ehomes-new/homeManager/api/bonus/signActivity2nd",
        _0xcfaa71 = "{\"memberId\":\"" + this.memberComplexCode + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0x48068f - 20220000) + ",\"businessId\":1}",
        _0x25167e = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8",
          "token": ""
        },
        _0x56c5c1 = _0x329f9e(_0x1b86f9, _0x25167e, _0xcfaa71);
      await _0x3e0692("post", _0x56c5c1);
      let _0x137e09 = _0x19697a;
      if (_0x137e09.code == 200) console.log("账号 " + this.user + " 签到成功获得积分 " + _0x137e09.data.data.integral + " ");else _0x137e09.code == 500 && console.log("账号 " + this.user + " 今日已经签到");
    } catch (_0x735a20) {
      console.log(_0x735a20);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["postList"]() {
    let _0x24dc61 = Math.round(Date.now());
    try {
      let _0xcbf771 = "https://czyl.foton.com.cn/ehomes-new/ehomesCommunity/api/post/nowPostList",
        _0x367e8c = " {\"memberId\":\"" + this.memberID + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0x24dc61 - 20220000) + ",\"businessId\":1,\"pageNumber\":1,\"pageSize\":30,\"follow\":\"1\"}",
        _0x126236 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x3fe3ca = _0x329f9e(_0xcbf771, _0x126236, _0x367e8c);
      await _0x3e0692("post", _0x3fe3ca);
      let _0xef4fb1 = _0x19697a;
      if (_0xef4fb1.code == 200) for (let _0x561360 = 1; _0x561360 < _0xef4fb1.data.length; _0x561360++) {
        let _0x25b006 = _0x392457(_0xef4fb1.data);
        this.b = _0x25b006.memberId;
      }
    } catch (_0x2c1381) {
      console.log(_0x2c1381);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["comment2nd"]() {
    await this.postList();
    let _0xae65c2 = Math.round(Date.now());
    await this.wyy();
    try {
      let _0x430c28 = "https://czyl.foton.com.cn/ehomes-new/ehomesCommunity/api/post/comment2nd",
        _0x5d33af = "  {\"memberId\":\"" + this.memberComplexCode + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0xae65c2 - 20220000) + ",\"businessId\":1,\"commentContent\":\"" + this.content + "\",\"commentId\":\"\",\"postId\":\"" + this.b + "\",\"type\":\"1\"}",
        _0x3220b4 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x84ab25 = _0x329f9e(_0x430c28, _0x3220b4, _0x5d33af);
      await _0x3e0692("post", _0x84ab25);
      let _0x40fff5 = _0x19697a;
      _0x40fff5.code == 200 && console.log("账号 " + this.user + " 评论成功 ");
    } catch (_0x48277c) {
      console.log(_0x48277c);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["follow2nd"]() {
    await this.postList();
    let _0x174562 = Math.round(Date.now());
    try {
      let _0x1abe07 = "https://czyl.foton.com.cn/ehomes-new/ehomesCommunity/api/post/follow2nd",
        _0x438930 = "{\"memberId\":\"" + this.memberComplexCode + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0x174562 - 20220000) + ",\"businessId\":1,\"behavior\":\"1\",\"memberIdeds\":\"" + this.b + "\",\"navyId\":\"null\"}",
        _0x10c8a6 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x32aed2 = _0x329f9e(_0x1abe07, _0x10c8a6, _0x438930);
      await _0x3e0692("post", _0x32aed2);
      let _0x51e563 = _0x19697a;
      _0x51e563.code == 200 && (console.log("账号 " + this.user + " 关注成功 "), await this.follow2n());
    } catch (_0x58503e) {
      console.log(_0x58503e);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["follow2n"]() {
    let _0x591140 = Math.round(Date.now());
    try {
      let _0x393518 = "https://czyl.foton.com.cn/ehomes-new/ehomesCommunity/api/post/follow2nd",
        _0x2bd8bd = "{\"memberId\":\"" + this.memberComplexCode + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0x591140 - 20220000) + ",\"businessId\":1,\"behavior\":\"2\",\"memberIdeds\":\"" + this.b + "\",\"navyId\":\"null\"}",
        _0x41d514 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x2dcf40 = _0x329f9e(_0x393518, _0x41d514, _0x2bd8bd);
      await _0x3e0692("post", _0x2dcf40);
      let _0x350abb = _0x19697a;
      _0x350abb.code == 200 && console.log("账号 " + this.user + " 取消关注 ");
    } catch (_0xa33deb) {
      console.log(_0xa33deb);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["topicList"]() {
    await this.postList();
    let _0x1cd058 = Math.round(Date.now());
    try {
      let _0x10a42b = "https://czyl.foton.com.cn/ehomes-new/ehomesCommunity/api/post/topicList",
        _0x551a45 = " {\"memberId\":\"" + this.memberID + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0x1cd058 - 20220000) + ",\"businessId\":1}",
        _0x4f3df5 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x501e0f = _0x329f9e(_0x10a42b, _0x4f3df5, _0x551a45);
      await _0x3e0692("post", _0x501e0f);
      let _0x4da350 = _0x19697a;
      if (_0x4da350.code == 200) {
        for (let _0x443c14 = 1; _0x443c14 < _0x4da350.data.top.length; _0x443c14++) {
          let _0x36985f = _0x392457(_0x4da350.data.top);
          this.a = _0x36985f.topicId;
        }
        await this.ft();
      }
    } catch (_0x41b6ef) {
      console.log(_0x41b6ef);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["ft"]() {
    let _0x5914ca = Math.round(Date.now());
    await this.wyy();
    try {
      let _0x150e23 = "https://czyl.foton.com.cn/ehomes-new/ehomesCommunity/api/post/addJson2nd",
        _0x5046fc = "{\"memberId\":\"" + this.memberComplexCode + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0x5914ca - 20220000) + ",\"businessId\":1,\"content\":\"" + this.content + "\",\"postType\":1,\"topicIdList\":[" + this.a + "],\"uploadFlag\":3,\"title\":\"\",\"urlList\":[]}",
        _0x2d7a81 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x192255 = _0x329f9e(_0x150e23, _0x2d7a81, _0x5046fc);
      await _0x3e0692("post", _0x192255);
      let _0x511236 = _0x19697a;
      _0x511236.code == 200 && console.log("账号 " + this.user + " 发帖成功 ");
    } catch (_0x6fbd08) {
      console.log(_0x6fbd08);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["grxx"]() {
    let _0x2e9486 = Math.round(Date.now());
    try {
      let _0x455855 = "https://czyl.foton.com.cn/ehomes-new/homeManager/api/Member/findMemberPointsInfo",
        _0x8e93d2 = "{\"memberId\":\"" + this.memberID + "\",\"userId\":\"" + this.uid + "\",\"userType\":\"61\",\"uid\":\"" + this.uid + "\",\"mobile\":\"" + this.ck[0] + "\",\"tel\":\"" + this.ck[0] + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + (_0x2e9486 - 20220000) + ",\"businessId\":1}",
        _0x16c100 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x36b1d1 = _0x329f9e(_0x455855, _0x16c100, _0x8e93d2);
      await _0x3e0692("post", _0x36b1d1);
      let _0x4628ea = _0x19697a;
      if (_0x4628ea.code == 200) {
        console.log("账号 " + this.ck[0] + " 总积分 " + _0x4628ea.data.pointValue + " ");
      }
    } catch (_0xfc8536) {
      console.log(_0xfc8536);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["kclogin"]() {
    try {
      let _0x3a931e = "https://czyl.foton.com.cn/ehomes-new/pkHome/api/user/getLoginMember",
        _0x196082 = "{\"name\":\"" + this.ck[0] + "\",\"password\":\"" + this.ck[1] + "\"}",
        _0xea160c = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8"
        },
        _0x7c7600 = _0x329f9e(_0x3a931e, _0xea160c, _0x196082);
      await _0x3e0692("post", _0x7c7600);
      let _0x19b6fe = _0x19697a;
      _0x19b6fe.code == 200 ? (console.log("账号 " + this.user + " 登录成功    "), this.pktoken = _0x19b6fe.data.token, this.pkmemberComplexCode = _0x19b6fe.data.memberComplexCode, this.pkmemberNo = _0x19b6fe.data.user.memberNo, await this.pksignInfo(), await this.pkfollow2nd(), await this.pkcomment2nd(), await this.grxx()) : console.log("账号 " + this.user + " 登录失败 ");
    } catch (_0x5c69f0) {
      console.log(_0x5c69f0);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["pksignInfo"]() {
    let _0x327221 = Math.round(Date.now());
    try {
      let _0x56216e = "https://czyl.foton.com.cn/ehomes-new/pkHome/api/bonus/findMemberSignInfo",
        _0x139eec = "{\"memberId\":\"" + this.pkmemberNo + "\",\"mobile\":\"" + this.ck[0] + "\",\"token\":\"7fe186bb15ff4426ae84f300f05d9c8d\",\"vin\":\"\",\"safeEnc\":" + (_0x327221 - 10110000) + "}",
        _0x5a8b95 = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8",
          "token": "" + this.pktoken
        },
        _0x370335 = _0x329f9e(_0x56216e, _0x5a8b95, _0x139eec);
      await _0x3e0692("post", _0x370335);
      let _0x3eaaff = _0x19697a;
      if (_0x3eaaff.data.signFlag == "未签到") {
        await this.pksign();
      } else console.log("账号 " + this.user + " 今日已经签到");
    } catch (_0x313032) {
      console.log(_0x313032);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["pksign"]() {
    let _0x495fb5 = Math.round(Date.now());
    try {
      let _0x23d186 = "https://czyl.foton.com.cn/ehomes-new/pkHome/api/bonus/signActivity2nd",
        _0x231251 = "{\"memberId\":\"" + this.pkmemberComplexCode + "\",\"mobile\":\"" + this.ck[0] + "\",\"token\":\"7fe186bb15ff4426ae84f300f05d9c8d\",\"vin\":\"\",\"safeEnc\":" + (_0x495fb5 - 10110000) + "}",
        _0x1a111d = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8",
          "token": "" + this.pktoken
        },
        _0x5c908a = _0x329f9e(_0x23d186, _0x1a111d, _0x231251);
      await _0x3e0692("post", _0x5c908a);
      let _0x4f8407 = _0x19697a;
      _0x4f8407.code == 200 ? console.log("账号 " + this.user + " 签到成功获得积分 " + _0x4f8407.data.integral) : console.log("账号 " + this.user + _0x4f8407.data.msg + " ");
    } catch (_0x11fc1a) {
      console.log(_0x11fc1a);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["pkcurrentPostList"]() {
    let _0x49fb6f = Math.round(Date.now());
    try {
      let _0x12fda3 = "https://czyl.foton.com.cn/ehomes-new/pkHomeForum/api/post/currentPostList",
        _0x5ac2d2 = "{\"memberId\":\"" + this.pkmemberNo + "\",\"mobile\":\"" + this.ck[0] + "\",\"token\":\"7fe186bb15ff4426ae84f300f05d9c8d\",\"vin\":\"\",\"safeEnc\":" + (_0x49fb6f - 10110000) + ",\"pageNum\":1,\"pageSize\":10}",
        _0x4246bd = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8",
          "token": "" + this.pktoken
        },
        _0x435992 = _0x329f9e(_0x12fda3, _0x4246bd, _0x5ac2d2);
      await _0x3e0692("post", _0x435992);
      let _0x4b1196 = _0x19697a;
      if (_0x4b1196.code == 200) for (let _0x3b1dd9 = 0; _0x3b1dd9 < _0x4b1196.data.length; _0x3b1dd9++) {
        let _0x39dc28 = _0x392457(_0x4b1196.data);
        this.bb = _0x39dc28.memberId;
        this.bn = _0x39dc28.postId;
      } else {
        console.log("账号 " + this.user + _0x4b1196.data.msg + " ");
      }
    } catch (_0xa8c47f) {
      console.log(_0xa8c47f);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["pkfollow2nd"]() {
    await this.pkcurrentPostList();
    let _0x145328 = Math.round(Date.now());
    try {
      let _0x53997a = "https://czyl.foton.com.cn/ehomes-new/pkHomeForum/api/post/follow2nd",
        _0x46b588 = "  {\"memberId\":\"" + this.pkmemberComplexCode + "\",\"mobile\":\"" + this.ck[0] + "\",\"token\":\"7fe186bb15ff4426ae84f300f05d9c8d\",\"vin\":\"\",\"safeEnc\":" + (_0x145328 - 10110000) + ",\"memberIded\":\"" + this.bb + "\",\"navyId\":null}",
        _0x5b1b69 = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8",
          "token": "" + this.pktoken
        },
        _0x2016ed = _0x329f9e(_0x53997a, _0x5b1b69, _0x46b588);
      await _0x3e0692("post", _0x2016ed);
      let _0x369af4 = _0x19697a;
      _0x369af4.code == 200 ? (console.log("账号 " + this.user + " 关注成功"), this.followId = _0x369af4.data.followId, await this.pknotFollow()) : console.log("账号 " + this.user + _0x369af4.data.msg + " ");
    } catch (_0x5995a2) {
      console.log(_0x5995a2);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["pknotFollow"]() {
    let _0x349b89 = Math.round(Date.now());
    try {
      let _0xd4e4ed = "https://czyl.foton.com.cn/ehomes-new/pkHomeForum/api/post/notFollow",
        _0xc51b18 = " {\"memberId\":\"" + this.bb + "\",\"mobile\":\"" + this.ck[0] + "\",\"token\":\"7fe186bb15ff4426ae84f300f05d9c8d\",\"vin\":\"\",\"safeEnc\":" + (_0x349b89 - 10110000) + ",\"followId\":" + this.followId + "}",
        _0x238f17 = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8",
          "token": "" + this.pktoken
        },
        _0x5bd27c = _0x329f9e(_0xd4e4ed, _0x238f17, _0xc51b18);
      await _0x3e0692("post", _0x5bd27c);
      let _0x984059 = _0x19697a;
      _0x984059.code == 200 ? console.log("账号 " + this.user + " 取消关注") : console.log("账号 " + this.user + _0x984059.data.msg + " ");
    } catch (_0x24211c) {
      console.log(_0x24211c);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["pkcomment2nd"]() {
    await this.pkcurrentPostList();
    await this.wyy();
    let _0xbb602 = Math.round(Date.now());
    try {
      let _0x594b7b = "https://czyl.foton.com.cn/ehomes-new/pkHomeForum/api/post/comment2nd",
        _0x25d627 = "  {\"memberId\":\"" + this.pkmemberComplexCode + "\",\"mobile\":\"" + this.ck[0] + "\",\"token\":\"7fe186bb15ff4426ae84f300f05d9c8d\",\"vin\":\"\",\"safeEnc\":" + (_0xbb602 - 10110000) + ",\"postId\":\"" + this.bn + "\",\"commentContent\":\"" + this.content + "\",\"level\":1}",
        _0x4dd1ec = {
          "Host": "czyl.foton.com.cn",
          "Content-Type": "application/json;charset=utf-8",
          "token": "" + this.pktoken
        },
        _0x44f500 = _0x329f9e(_0x594b7b, _0x4dd1ec, _0x25d627);
      await _0x3e0692("post", _0x44f500);
      let _0xcacf08 = _0x19697a;
      _0xcacf08.code == 200 ? console.log("账号 " + this.user + " 评论成功") : console.log("账号 " + this.user + _0xcacf08.data.msg + " ");
    } catch (_0x34b38b) {
      console.log(_0x34b38b);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["fx"]() {
    let _0x1507dd = Math.round(Date.now());
    try {
      let _0x45d3fe = "https://czyl.foton.com.cn/ehomes-new/homeManager/api/bonus/addIntegralForShare",
        _0x5f26aa = "{\"safeEnc\":" + (_0x1507dd - 20220000) + ",\"activity\":\"\",\"tel\":\"" + this.ck[0] + "\",\"id\":\"33\",\"source\":\"APP\",\"memberId\":\"" + this.memberComplexCode + "\"}",
        _0x4701e3 = {
          "user-agent": "web",
          "Content-Type": "application/json; charset=utf-8",
          "token": "",
          "host": "czyl.foton.com.cn"
        },
        _0x34b9c9 = _0x329f9e(_0x45d3fe, _0x4701e3, _0x5f26aa);
      await _0x3e0692("post", _0x34b9c9);
      let _0x2d0a93 = _0x19697a;
      if (_0x2d0a93.code == 200) {
        console.log("账号 " + this.user + " 分享获得" + _0x2d0a93.data.data.integral + " ");
      }
    } catch (_0x16c1f4) {
      console.log(_0x16c1f4);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["wyy"]() {
    try {
      let _0x2bc864 = "https://v1.jinrishici.com/all",
        _0x56a1bf = "",
        _0x11fdd6 = {},
        _0xc6221a = _0x329f9e(_0x2bc864, _0x11fdd6, _0x56a1bf);
      await _0x3e0692("get", _0xc6221a);
      let _0x469b9c = _0x19697a;
      if (_0x469b9c.code == 200) {} else this.content = _0x469b9c.content;
    } catch (_0x5093c8) {
      console.log(_0x5093c8);
    } finally {
      return Promise.resolve(1);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x58306c();
  } else {
    if (!(await _0x4e7368())) return;
    if (_0x55cc26.length > 0) {
      console.log("\n------- 福田e家-------\n");
      taskall = [];
      for (let _0xd1aa06 of _0x55cc26) {
        taskall.push(_0xd1aa06.cashck());
      }
      await Promise.all(taskall);
      console.log("\n------- 卡车生活-------\n");
      taskall = [];
      for (let _0x808eec of _0x55cc26) {
        taskall.push(_0x808eec.kclogin());
      }
      await Promise.all(taskall);
    }
  }
})().catch(_0x2d7c4f => console.log(_0x2d7c4f)).finally(() => _0x133685.done());
async function _0x58306c() {}
function _0x4e7368() {
  if (_0xb06669) {
    for (let _0x45acb4 of _0xb06669) {
      let _0x24430f = atob(_0x45acb4);
      if (_0x24430f) _0x55cc26.push(new _0x2d5de3(_0x24430f));
    }
    _0xf50ecf = _0x55cc26.length;
  } else return console.log("未找到CK"), false;
  return console.log("\n共找到" + _0xf50ecf + "个账号"), true;
}
function _0x329f9e(_0x2fcd49, _0x302689, _0x5d5e33 = "") {
  let _0x1b96c2 = {
    "url": _0x2fcd49,
    "headers": _0x302689,
    "timeout": 5000
  };
  return _0x5d5e33 && (_0x1b96c2.body = _0x5d5e33), _0x1b96c2;
}
async function _0x3e0692(_0x763526, _0x18a686) {
  return _0x19697a = null, _0xf4fcb7 = null, _0x2dedf4 = null, new Promise(_0x223f31 => {
    _0x133685.send(_0x763526, _0x18a686, async (_0x4aaf0d, _0x1d400e, _0x51b1a7) => {
      try {
        _0xf4fcb7 = _0x1d400e;
        _0x2dedf4 = _0x51b1a7;
        if (_0x4aaf0d) {} else {
          if (_0x51b1a7.body) {
            if (typeof _0x51b1a7.body == "object") _0x19697a = _0x51b1a7.body;else {
              try {
                _0x19697a = JSON.parse(_0x51b1a7.body);
              } catch (_0x8e01e) {
                _0x19697a = _0x51b1a7.body;
              }
            }
          }
        }
      } catch (_0x37a256) {
        console.log(_0x37a256);
      } finally {
        _0x223f31();
      }
    });
  });
}
function _0x392457(_0x5291f1) {
  return _0x5291f1[parseInt(Math.random() * _0x5291f1.length, 10)];
}
function _0x4ccfc6(_0x358194) {
  if (_0x358194.length == 11) {
    let _0x1cacb9 = _0x358194.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x1cacb9;
  } else {
    return _0x358194;
  }
}
function _0x1e45e8(_0x197fff) {
  function _0x41775a(_0x4a8f31, _0x20486c) {
    return _0x4a8f31 << _0x20486c | _0x4a8f31 >>> 32 - _0x20486c;
  }
  function _0x314609(_0x2ed358, _0x2cc792) {
    var _0x298e95, _0x390761, _0x2cddf4, _0x3b1aa7, _0x1358f0;
    return _0x2cddf4 = 2147483648 & _0x2ed358, _0x3b1aa7 = 2147483648 & _0x2cc792, _0x298e95 = 1073741824 & _0x2ed358, _0x390761 = 1073741824 & _0x2cc792, _0x1358f0 = (1073741823 & _0x2ed358) + (1073741823 & _0x2cc792), _0x298e95 & _0x390761 ? 2147483648 ^ _0x1358f0 ^ _0x2cddf4 ^ _0x3b1aa7 : _0x298e95 | _0x390761 ? 1073741824 & _0x1358f0 ? 3221225472 ^ _0x1358f0 ^ _0x2cddf4 ^ _0x3b1aa7 : 1073741824 ^ _0x1358f0 ^ _0x2cddf4 ^ _0x3b1aa7 : _0x1358f0 ^ _0x2cddf4 ^ _0x3b1aa7;
  }
  function _0x4c86a4(_0x10db7a, _0x143c3b, _0x3540e2) {
    return _0x10db7a & _0x143c3b | ~_0x10db7a & _0x3540e2;
  }
  function _0x4fe6c3(_0x4c6a37, _0x5ee833, _0x1037bb) {
    return _0x4c6a37 & _0x1037bb | _0x5ee833 & ~_0x1037bb;
  }
  function _0xf1e245(_0x54b2c6, _0x4e50b4, _0x3666ee) {
    return _0x54b2c6 ^ _0x4e50b4 ^ _0x3666ee;
  }
  function _0x1ae77a(_0x20ac21, _0x566280, _0x407f5d) {
    return _0x566280 ^ (_0x20ac21 | ~_0x407f5d);
  }
  function _0x11a619(_0x40d85d, _0x3c0946, _0x1beb8f, _0x33463c, _0x5b0d40, _0x45cc7f, _0x70ddd2) {
    return _0x40d85d = _0x314609(_0x40d85d, _0x314609(_0x314609(_0x4c86a4(_0x3c0946, _0x1beb8f, _0x33463c), _0x5b0d40), _0x70ddd2)), _0x314609(_0x41775a(_0x40d85d, _0x45cc7f), _0x3c0946);
  }
  function _0x5aeecd(_0x32e629, _0x344c00, _0xb71b83, _0x2a65ac, _0x32dc8d, _0x26ccb8, _0x1ce8f2) {
    return _0x32e629 = _0x314609(_0x32e629, _0x314609(_0x314609(_0x4fe6c3(_0x344c00, _0xb71b83, _0x2a65ac), _0x32dc8d), _0x1ce8f2)), _0x314609(_0x41775a(_0x32e629, _0x26ccb8), _0x344c00);
  }
  function _0x45149f(_0x5146ad, _0x1d2e85, _0xefb141, _0x348566, _0x434ab4, _0x330e62, _0x19993d) {
    return _0x5146ad = _0x314609(_0x5146ad, _0x314609(_0x314609(_0xf1e245(_0x1d2e85, _0xefb141, _0x348566), _0x434ab4), _0x19993d)), _0x314609(_0x41775a(_0x5146ad, _0x330e62), _0x1d2e85);
  }
  function _0x346970(_0x2645b5, _0x432a28, _0x504bb9, _0x9a3217, _0x4e9aba, _0x9e00f8, _0x266460) {
    return _0x2645b5 = _0x314609(_0x2645b5, _0x314609(_0x314609(_0x1ae77a(_0x432a28, _0x504bb9, _0x9a3217), _0x4e9aba), _0x266460)), _0x314609(_0x41775a(_0x2645b5, _0x9e00f8), _0x432a28);
  }
  function _0x40ffbb(_0x3767ff) {
    for (var _0x39bdec, _0x54d35a = _0x3767ff.length, _0x5558f9 = _0x54d35a + 8, _0xd7929a = (_0x5558f9 - _0x5558f9 % 64) / 64, _0x595390 = 16 * (_0xd7929a + 1), _0x509756 = new Array(_0x595390 - 1), _0x51ec5f = 0, _0x13b159 = 0; _0x54d35a > _0x13b159;) _0x39bdec = (_0x13b159 - _0x13b159 % 4) / 4, _0x51ec5f = _0x13b159 % 4 * 8, _0x509756[_0x39bdec] = _0x509756[_0x39bdec] | _0x3767ff.charCodeAt(_0x13b159) << _0x51ec5f, _0x13b159++;
    return _0x39bdec = (_0x13b159 - _0x13b159 % 4) / 4, _0x51ec5f = _0x13b159 % 4 * 8, _0x509756[_0x39bdec] = _0x509756[_0x39bdec] | 128 << _0x51ec5f, _0x509756[_0x595390 - 2] = _0x54d35a << 3, _0x509756[_0x595390 - 1] = _0x54d35a >>> 29, _0x509756;
  }
  function _0x15818a(_0x227c18) {
    var _0x16b59e,
      _0xfdfba7,
      _0x7b5490 = "",
      _0x41c975 = "";
    for (_0xfdfba7 = 0; 3 >= _0xfdfba7; _0xfdfba7++) _0x16b59e = _0x227c18 >>> 8 * _0xfdfba7 & 255, _0x41c975 = "0" + _0x16b59e.toString(16), _0x7b5490 += _0x41c975.substr(_0x41c975.length - 2, 2);
    return _0x7b5490;
  }
  function _0x125011(_0x509ec2) {
    _0x509ec2 = _0x509ec2.replace(/\r\n/g, "\n");
    for (var _0x4de05e = "", _0x254ef = 0; _0x254ef < _0x509ec2.length; _0x254ef++) {
      var _0xab48d3 = _0x509ec2.charCodeAt(_0x254ef);
      128 > _0xab48d3 ? _0x4de05e += String.fromCharCode(_0xab48d3) : _0xab48d3 > 127 && 2048 > _0xab48d3 ? (_0x4de05e += String.fromCharCode(_0xab48d3 >> 6 | 192), _0x4de05e += String.fromCharCode(63 & _0xab48d3 | 128)) : (_0x4de05e += String.fromCharCode(_0xab48d3 >> 12 | 224), _0x4de05e += String.fromCharCode(_0xab48d3 >> 6 & 63 | 128), _0x4de05e += String.fromCharCode(63 & _0xab48d3 | 128));
    }
    return _0x4de05e;
  }
  var _0x300214,
    _0x469e6c,
    _0x207922,
    _0x1f3215,
    _0x23c89d,
    _0x4c357c,
    _0x284cb9,
    _0x343891,
    _0x493bb5,
    _0x527f6f = [],
    _0x3c5dd3 = 7,
    _0x4e37bd = 12,
    _0x4981f5 = 17,
    _0x3a3f7b = 22,
    _0x2cfc00 = 5,
    _0x11248c = 9,
    _0x1d7e23 = 14,
    _0xe2858c = 20,
    _0x178192 = 4,
    _0x55f3b7 = 11,
    _0x1652c1 = 16,
    _0x43d856 = 23,
    _0x206199 = 6,
    _0x365cc4 = 10,
    _0x5a194b = 15,
    _0x366cd6 = 21;
  for (_0x197fff = _0x125011(_0x197fff), _0x527f6f = _0x40ffbb(_0x197fff), _0x4c357c = 1732584193, _0x284cb9 = 4023233417, _0x343891 = 2562383102, _0x493bb5 = 271733878, _0x300214 = 0; _0x300214 < _0x527f6f.length; _0x300214 += 16) _0x469e6c = _0x4c357c, _0x207922 = _0x284cb9, _0x1f3215 = _0x343891, _0x23c89d = _0x493bb5, _0x4c357c = _0x11a619(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 0], _0x3c5dd3, 3614090360), _0x493bb5 = _0x11a619(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 1], _0x4e37bd, 3905402710), _0x343891 = _0x11a619(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 2], _0x4981f5, 606105819), _0x284cb9 = _0x11a619(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 3], _0x3a3f7b, 3250441966), _0x4c357c = _0x11a619(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 4], _0x3c5dd3, 4118548399), _0x493bb5 = _0x11a619(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 5], _0x4e37bd, 1200080426), _0x343891 = _0x11a619(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 6], _0x4981f5, 2821735955), _0x284cb9 = _0x11a619(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 7], _0x3a3f7b, 4249261313), _0x4c357c = _0x11a619(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 8], _0x3c5dd3, 1770035416), _0x493bb5 = _0x11a619(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 9], _0x4e37bd, 2336552879), _0x343891 = _0x11a619(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 10], _0x4981f5, 4294925233), _0x284cb9 = _0x11a619(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 11], _0x3a3f7b, 2304563134), _0x4c357c = _0x11a619(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 12], _0x3c5dd3, 1804603682), _0x493bb5 = _0x11a619(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 13], _0x4e37bd, 4254626195), _0x343891 = _0x11a619(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 14], _0x4981f5, 2792965006), _0x284cb9 = _0x11a619(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 15], _0x3a3f7b, 1236535329), _0x4c357c = _0x5aeecd(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 1], _0x2cfc00, 4129170786), _0x493bb5 = _0x5aeecd(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 6], _0x11248c, 3225465664), _0x343891 = _0x5aeecd(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 11], _0x1d7e23, 643717713), _0x284cb9 = _0x5aeecd(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 0], _0xe2858c, 3921069994), _0x4c357c = _0x5aeecd(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 5], _0x2cfc00, 3593408605), _0x493bb5 = _0x5aeecd(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 10], _0x11248c, 38016083), _0x343891 = _0x5aeecd(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 15], _0x1d7e23, 3634488961), _0x284cb9 = _0x5aeecd(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 4], _0xe2858c, 3889429448), _0x4c357c = _0x5aeecd(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 9], _0x2cfc00, 568446438), _0x493bb5 = _0x5aeecd(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 14], _0x11248c, 3275163606), _0x343891 = _0x5aeecd(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 3], _0x1d7e23, 4107603335), _0x284cb9 = _0x5aeecd(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 8], _0xe2858c, 1163531501), _0x4c357c = _0x5aeecd(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 13], _0x2cfc00, 2850285829), _0x493bb5 = _0x5aeecd(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 2], _0x11248c, 4243563512), _0x343891 = _0x5aeecd(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 7], _0x1d7e23, 1735328473), _0x284cb9 = _0x5aeecd(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 12], _0xe2858c, 2368359562), _0x4c357c = _0x45149f(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 5], _0x178192, 4294588738), _0x493bb5 = _0x45149f(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 8], _0x55f3b7, 2272392833), _0x343891 = _0x45149f(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 11], _0x1652c1, 1839030562), _0x284cb9 = _0x45149f(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 14], _0x43d856, 4259657740), _0x4c357c = _0x45149f(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 1], _0x178192, 2763975236), _0x493bb5 = _0x45149f(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 4], _0x55f3b7, 1272893353), _0x343891 = _0x45149f(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 7], _0x1652c1, 4139469664), _0x284cb9 = _0x45149f(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 10], _0x43d856, 3200236656), _0x4c357c = _0x45149f(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 13], _0x178192, 681279174), _0x493bb5 = _0x45149f(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 0], _0x55f3b7, 3936430074), _0x343891 = _0x45149f(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 3], _0x1652c1, 3572445317), _0x284cb9 = _0x45149f(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 6], _0x43d856, 76029189), _0x4c357c = _0x45149f(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 9], _0x178192, 3654602809), _0x493bb5 = _0x45149f(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 12], _0x55f3b7, 3873151461), _0x343891 = _0x45149f(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 15], _0x1652c1, 530742520), _0x284cb9 = _0x45149f(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 2], _0x43d856, 3299628645), _0x4c357c = _0x346970(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 0], _0x206199, 4096336452), _0x493bb5 = _0x346970(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 7], _0x365cc4, 1126891415), _0x343891 = _0x346970(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 14], _0x5a194b, 2878612391), _0x284cb9 = _0x346970(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 5], _0x366cd6, 4237533241), _0x4c357c = _0x346970(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 12], _0x206199, 1700485571), _0x493bb5 = _0x346970(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 3], _0x365cc4, 2399980690), _0x343891 = _0x346970(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 10], _0x5a194b, 4293915773), _0x284cb9 = _0x346970(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 1], _0x366cd6, 2240044497), _0x4c357c = _0x346970(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 8], _0x206199, 1873313359), _0x493bb5 = _0x346970(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 15], _0x365cc4, 4264355552), _0x343891 = _0x346970(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 6], _0x5a194b, 2734768916), _0x284cb9 = _0x346970(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 13], _0x366cd6, 1309151649), _0x4c357c = _0x346970(_0x4c357c, _0x284cb9, _0x343891, _0x493bb5, _0x527f6f[_0x300214 + 4], _0x206199, 4149444226), _0x493bb5 = _0x346970(_0x493bb5, _0x4c357c, _0x284cb9, _0x343891, _0x527f6f[_0x300214 + 11], _0x365cc4, 3174756917), _0x343891 = _0x346970(_0x343891, _0x493bb5, _0x4c357c, _0x284cb9, _0x527f6f[_0x300214 + 2], _0x5a194b, 718787259), _0x284cb9 = _0x346970(_0x284cb9, _0x343891, _0x493bb5, _0x4c357c, _0x527f6f[_0x300214 + 9], _0x366cd6, 3951481745), _0x4c357c = _0x314609(_0x4c357c, _0x469e6c), _0x284cb9 = _0x314609(_0x284cb9, _0x207922), _0x343891 = _0x314609(_0x343891, _0x1f3215), _0x493bb5 = _0x314609(_0x493bb5, _0x23c89d);
  var _0x1265e3 = _0x15818a(_0x4c357c) + _0x15818a(_0x284cb9) + _0x15818a(_0x343891) + _0x15818a(_0x493bb5);
  return _0x1265e3.toLowerCase();
}
function _0x33562f(_0x19e033, _0x2963e4) {
  return "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0), new class {
    constructor(_0x211294, _0x41d6eb) {
      this.name = _0x211294;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x41d6eb);
      console.log(this.name + " 开始运行：\n");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0x2f2f3f) {
      let _0xd41086 = this.getval(_0x2f2f3f);
      if (/^@/.test(_0x2f2f3f)) {
        let [, _0x4534ef, _0xec9e9e] = /^@(.*?)\.(.*?)$/.exec(_0x2f2f3f),
          _0x58f396 = _0x4534ef ? this.getval(_0x4534ef) : "";
        if (_0x58f396) try {
          let _0x137570 = JSON.parse(_0x58f396);
          _0xd41086 = _0x137570 ? this.lodash_get(_0x137570, _0xec9e9e, "") : _0xd41086;
        } catch (_0x32c9e5) {
          _0xd41086 = "";
        }
      }
      return _0xd41086;
    }
    ["setdata"](_0x41809e, _0x36fa36) {
      let _0x10083f = false;
      if (/^@/.test(_0x36fa36)) {
        let [, _0xd49ed7, _0x278a4f] = /^@(.*?)\.(.*?)$/.exec(_0x36fa36),
          _0x13e4ca = this.getval(_0xd49ed7),
          _0x1df445 = _0xd49ed7 ? "null" === _0x13e4ca ? null : _0x13e4ca || "{}" : "{}";
        try {
          let _0x30f655 = JSON.parse(_0x1df445);
          this.lodash_set(_0x30f655, _0x278a4f, _0x41809e);
          _0x10083f = this.setval(JSON.stringify(_0x30f655), _0xd49ed7);
        } catch (_0x428a32) {
          let _0x563ac6 = {};
          this.lodash_set(_0x563ac6, _0x278a4f, _0x41809e);
          _0x10083f = this.setval(JSON.stringify(_0x563ac6), _0xd49ed7);
        }
      } else _0x10083f = this.setval(_0x41809e, _0x36fa36);
      return _0x10083f;
    }
    ["getval"](_0x1a53ec) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1a53ec) : this.isQuanX() ? $prefs.valueForKey(_0x1a53ec) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1a53ec]) : this.data && this.data[_0x1a53ec] || null;
    }
    ["setval"](_0x38eb6f, _0x2196c2) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x38eb6f, _0x2196c2) : this.isQuanX() ? $prefs.setValueForKey(_0x38eb6f, _0x2196c2) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2196c2] = _0x38eb6f, this.writedata(), !0) : this.data && this.data[_0x2196c2] || null;
    }
    ["send"](_0x51b898, _0x28547d, _0x3df87a = () => {}) {
      if ("get" != _0x51b898 && "post" != _0x51b898 && "put" != _0x51b898 && "delete" != _0x51b898) {
        console.log("无效的http方法：" + _0x51b898);
        return;
      }
      if ("get" == _0x51b898 && _0x28547d.headers ? (delete _0x28547d.headers["Content-Type"], delete _0x28547d.headers["Content-Length"]) : _0x28547d.body && _0x28547d.headers && (_0x28547d.headers["Content-Type"] || (_0x28547d.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x28547d.headers = _0x28547d.headers || {}, Object.assign(_0x28547d.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        let _0x3a531d = {
          "method": _0x51b898,
          "url": _0x28547d.url,
          "headers": _0x28547d.headers,
          "timeout": _0x28547d.timeout,
          "data": _0x28547d.body
        };
        "get" == _0x51b898 && delete _0x3a531d.data;
        $axios(_0x3a531d).then(_0x1532a2 => {
          let {
            status: _0xebef85,
            request: _0x592710,
            headers: _0x2edc46,
            data: _0x1d16eb
          } = _0x1532a2;
          _0x3df87a(null, _0x592710, {
            "statusCode": _0xebef85,
            "headers": _0x2edc46,
            "body": _0x1d16eb
          });
        }).catch(_0x448dba => console.log(_0x448dba));
      } else {
        if (this.isQuanX()) _0x28547d.method = _0x51b898.toUpperCase(), this.isNeedRewrite && (_0x28547d.opts = _0x28547d.opts || {}, Object.assign(_0x28547d.opts, {
          "hints": !1
        })), $task.fetch(_0x28547d).then(_0x33b870 => {
          let {
            statusCode: _0x5c9d3e,
            request: _0x378f2a,
            headers: _0x4d963e,
            body: _0x70a9b7
          } = _0x33b870;
          _0x3df87a(null, _0x378f2a, {
            "statusCode": _0x5c9d3e,
            "headers": _0x4d963e,
            "body": _0x70a9b7
          });
        }, _0x470d2e => _0x3df87a(_0x470d2e));else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: _0x497b55,
              ..._0x4db586
            } = _0x28547d;
            this.instance = this.got.extend({
              "followRedirect": !1
            });
            this.instance[_0x51b898](_0x497b55, _0x4db586).then(_0x47bdf1 => {
              let {
                statusCode: _0x1066d2,
                request: _0x155fb6,
                headers: _0x46a944,
                body: _0x3bc205
              } = _0x47bdf1;
              _0x3df87a(null, _0x155fb6, {
                "statusCode": _0x1066d2,
                "headers": _0x46a944,
                "body": _0x3bc205
              });
            }, _0x2660b5 => {
              let {
                message: _0x577af5,
                response: _0xbea33a
              } = _0x2660b5;
              _0x3df87a(_0x577af5, _0xbea33a, _0xbea33a && _0xbea33a.body);
            });
          }
        }
      }
    }
    ["time"](_0x34406c) {
      let _0x48f495 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        "S": new Date().getMilliseconds()
      };
      for (let _0xc72b5c in /(y+)/.test(_0x34406c) && (_0x34406c = _0x34406c.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), _0x48f495) new RegExp("(" + _0xc72b5c + ")").test(_0x34406c) && (_0x34406c = _0x34406c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x48f495[_0xc72b5c] : ("00" + _0x48f495[_0xc72b5c]).substr(("" + _0x48f495[_0xc72b5c]).length)));
      return _0x34406c;
    }
    async ["showmsg"]() {
      if (!this.notifyStr) return;
      let _0x5396d8 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x133685.isNode()) {
        var _0x28a960 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x28a960.sendNotify(this.name, _0x5396d8);
      } else this.msg(_0x5396d8);
    }
    ["logAndNotify"](_0x50f73c) {
      console.log(_0x50f73c);
      this.notifyStr += _0x50f73c;
      this.notifyStr += "\n";
    }
    ["msg"](_0x4ce57b = t, _0x504cf1 = "", _0x582f24 = "", _0x344705) {
      let _0x4f1669 = _0x459c7f => {
        if (!_0x459c7f) return _0x459c7f;
        if ("string" == typeof _0x459c7f) return this.isLoon() ? _0x459c7f : this.isQuanX() ? {
          "open-url": _0x459c7f
        } : this.isSurge() ? {
          "url": _0x459c7f
        } : void 0;
        if ("object" == typeof _0x459c7f) {
          if (this.isLoon()) {
            let _0x59943d = _0x459c7f.openUrl || _0x459c7f.url || _0x459c7f["open-url"],
              _0xe25a41 = _0x459c7f.mediaUrl || _0x459c7f["media-url"];
            return {
              "openUrl": _0x59943d,
              "mediaUrl": _0xe25a41
            };
          }
          if (this.isQuanX()) {
            let _0x47a054 = _0x459c7f["open-url"] || _0x459c7f.url || _0x459c7f.openUrl,
              _0x4479f2 = _0x459c7f["media-url"] || _0x459c7f.mediaUrl;
            return {
              "open-url": _0x47a054,
              "media-url": _0x4479f2
            };
          }
          if (this.isSurge()) return {
            "url": _0x459c7f.url || _0x459c7f.openUrl || _0x459c7f["open-url"]
          };
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4ce57b, _0x504cf1, _0x582f24, _0x4f1669(_0x344705)) : this.isQuanX() && $notify(_0x4ce57b, _0x504cf1, _0x582f24, _0x4f1669(_0x344705)));
      let _0x304499 = ["", "============== 系统通知 =============="];
      _0x304499.push(_0x4ce57b);
      _0x504cf1 && _0x304499.push(_0x504cf1);
      _0x582f24 && _0x304499.push(_0x582f24);
      console.log(_0x304499.join("\n"));
    }
    ["getMin"](_0x4c34f8, _0x376f6c) {
      return _0x4c34f8 < _0x376f6c ? _0x4c34f8 : _0x376f6c;
    }
    ["getMax"](_0x1a4238, _0x10d63d) {
      return _0x1a4238 < _0x10d63d ? _0x10d63d : _0x1a4238;
    }
    ["padStr"](_0x3ca0dc, _0x9e37b6, _0x4a389d = "0") {
      let _0x54419a = String(_0x3ca0dc),
        _0x2c650e = _0x9e37b6 > _0x54419a.length ? _0x9e37b6 - _0x54419a.length : 0,
        _0x4d0c30 = "";
      for (let _0x1d3e7a = 0; _0x1d3e7a < _0x2c650e; _0x1d3e7a++) _0x4d0c30 += _0x4a389d;
      return _0x4d0c30 + _0x54419a;
    }
    ["json2str"](_0x3f1f1b, _0x136454, _0x341f47 = !1) {
      let _0x1ad5c7 = [];
      for (let _0x4fd8fd of Object.keys(_0x3f1f1b).sort()) {
        let _0x420aae = _0x3f1f1b[_0x4fd8fd];
        _0x420aae && _0x341f47 && (_0x420aae = encodeURIComponent(_0x420aae));
        _0x1ad5c7.push(_0x4fd8fd + "=" + _0x420aae);
      }
      return _0x1ad5c7.join(_0x136454);
    }
    ["str2json"](_0x1fee4c, _0x5b0a84 = !1) {
      let _0x1098fd = {};
      for (let _0x5ed0fe of _0x1fee4c.split("#")) {
        if (!_0x5ed0fe) continue;
        let _0x50e195 = _0x5ed0fe.indexOf("=");
        if (-1 == _0x50e195) continue;
        let _0x3f3dc4 = _0x5ed0fe.substr(0, _0x50e195),
          _0x50458e = _0x5ed0fe.substr(_0x50e195 + 1);
        _0x5b0a84 && (_0x50458e = decodeURIComponent(_0x50458e));
        _0x1098fd[_0x3f3dc4] = _0x50458e;
      }
      return _0x1098fd;
    }
    ["randomString"](_0x786ae0, _0x4bbf1e = "abcdef0123456789") {
      let _0x524cc2 = "";
      for (let _0x154c93 = 0; _0x154c93 < _0x786ae0; _0x154c93++) _0x524cc2 += _0x4bbf1e.charAt(Math.floor(Math.random() * _0x4bbf1e.length));
      return _0x524cc2;
    }
    ["randomList"](_0x5cacae) {
      let _0x399a52 = Math.floor(Math.random() * _0x5cacae.length);
      return _0x5cacae[_0x399a52];
    }
    ["wait"](_0x2d4c81) {
      return new Promise(_0x58a86b => setTimeout(_0x58a86b, _0x2d4c81));
    }
    ["done"](_0x38bcfa = {}) {
      let _0x505386 = new Date().getTime(),
        _0x3472c3 = (_0x505386 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x3472c3 + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x38bcfa);
    }
  }(_0x19e033, _0x2963e4);
}