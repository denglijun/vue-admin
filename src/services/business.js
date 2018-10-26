import axios from "../common/axios";
import * as api from "../api";
import defaultValue from "./default";

export function wifiList(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.BUSINESS_WIFI_LIST, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function wifiAdd(params) {
    console.log(params)
    return new Promise((resolve, reject) => {
        axios.post(api.BUSINESS_WIFI_ADD, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function wifiUpdate(params) {
    return new Promise((resolve, reject) => {
        axios.post(api.BUSINESS_WIFI_UPDATE, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function wifiDelete(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.BUSINESS_WIFI_DELETE, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function getWifi(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.BUSINESS_WIFI_GET, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function customerList(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.BUSINESS_CUSTOMER_LIST, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function customerAdd(params) {
    console.log(params)
    return new Promise((resolve, reject) => {
        axios.post(api.BUSINESS_CUSTOMER_ADD, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function customerUpdate(params) {
    return new Promise((resolve, reject) => {
        axios.post(api.BUSINESS_CUSTOMER_UPDATE, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function customerDelete(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.BUSINESS_CUSTOMER_DELETE, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};

export function getCustomer(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.BUSINESS_CUSTOMER_GET, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
};