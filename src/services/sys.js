import axios from "../common/axios";
import * as api from "../api";
import defaultValue from "./default";

export function login(params) {
    return new Promise((resolve, reject) => {
        axios.post(api.LOGIN, { params }).then(response => {
                let reData = response.data;
                resolve(reData);
            }, err => {
                resolve({ code: 10004, msg: '网络出错' });
            })
            .catch((error) => {
                resolve({ code: 10004, msg: '网络出错' });
            })
    })
}
export function msgList(params) {
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


export function menuList(params) {
    return new Promise((resolve, reject) => {
        let userInfo = JSON.parse(window.sessionStorage.getItem("user-info"));
        axios.get(api.SYS_MENU_LIST, { uid: userInfo.id }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.menuList);
            })
            .catch((error) => {
                resolve(defaultValue.menuList)
            })
    })
}

export function resourceList(params) {
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
export function roleAdd(params) {
    return new Promise((resolve, reject) => {
        axios.post(api.SYS_ROLE_ADD, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve();
            })
            .catch((error) => {
                resolve();
            })
    })
}
export function roleList(params) {
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

export function userList(params) {
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