import axios from "../common/axios";
import * as api from "../api";
import defaultValue from "./default";

export function login (params) {
  return new Promise((resolve, reject) => {
    axios.post(api.LOGIN, { params }).then(response => {
      let reData = response.data;
      let data = {"user":{"id":reData.data.id,"name":reData.data.username,"nickName":"Taylor","phone":"14309472560","age":74,"address":"浙江省 绍兴市 上虞市","isMale":false,"email":"w.pdmenv@rwfwadthss.tr","createTime":reData.data.createdAt,"delFlag":0,"status":1,"userType":"1","no":"310000198406275362","remarks":"传方半织意意列业维领细斯样年场不次。样影此么论重示般会际开出二及西高。","avatar":"static/img/user.png"},"sid":"310000198406275362"}
      resolve(data);
    }, err => {
      resolve(defaultValue.login);
    })
      .catch((error) => {
        console.log(333);
        console.log(error);
        resolve(defaultValue.login)
      })
  })
}
export function msgList (params) {
  return new Promise((resolve, reject) => {
    axios.post(api.MSG_TOP_TEN, { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve(defaultValue.msgList);
    })
      .catch((error) => {
        resolve(defaultValue.msgList)
      })
  })
}


export function menuList (params) {
  return new Promise((resolve, reject) => {
    axios.get(api.SYS_MENU_LIST, { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve(defaultValue.menuList);
    })
      .catch((error) => {
        resolve(defaultValue.menuList)
      })
  })
}

export function resourceList (params) {
  return new Promise((resolve, reject) => {
    axios.get(api.SYS_RESOURCE_LIST, { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve(defaultValue.resource);
    })
      .catch((error) => {
        resolve(defaultValue.resource)
      })
  })
}

//角色管理
export function roleAdd (params) {
  return new Promise((resolve,reject) => {
    axios.post(api.SYS_ROLE_ADD,{ params }).then(response => {
      resolve(response.data);
    },err => {
      resolve();
    })
    .catch((error) => {
      resolve();
    })
  })
}
export function roleList (params) {
  return new Promise((resolve, reject) => {
    axios.get(api.SYS_ROLE_LIST, { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve(defaultValue.roleList);
    })
      .catch((error) => {
        resolve(defaultValue.roleList)
      })
  })
}

export function userList (params) {
  return new Promise((resolve, reject) => {
    axios.get(api.SYS_USER_LIST, { params }).then(response => {
      resolve(response.data);
    }, err => {
      resolve({});
    })
      .catch((error) => {
        resolve({})
      })
  })
}
