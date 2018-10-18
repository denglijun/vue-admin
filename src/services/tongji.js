import axios from "../common/axios";
import * as api from "../api";
import defaultValue from "./default";

export function countuser(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_USER, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}

export function CountFriend2blind(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_FRIEND_BLIND, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}

export function CountBlind2Friend(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_BLIND_FRIEND, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}

export function CountCallanswerchat(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_CALL_ANSWER_CHAT, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}

export function CountAnswerFailReason(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_ANSWER_FAIL_REASON, { params }).then(response => {
                console.log(response.data);
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}

export function CountChatFailReason(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_CHAT_FAIL_REASON, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}
export function CountcallDetail(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_CALL_DETAIL, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}

export function CountChatDetail(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_CHAT_DETAIL, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}
export function CountAnswerFailDetail(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_ANSWER_FAIL_DETAIL, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve(defaultValue.countuser);
            })
            .catch((error) => {
                resolve(defaultValue.countuser)
            })
    })
}

export function CountChatDetailExcel(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_CHAT_DETAIL_EXCEL, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve({});
            })
            .catch((error) => {
                resolve({})
            })
    })
}

export function CountcallDetailExcel(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_CALL_DETAIL_EXCEL, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve({});
            })
            .catch((error) => {
                resolve({})
            })
    })
}

export function CountAnswerFailReasonExcel(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_ANSWER_FAIL_REASON_EXCEL, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve({});
            })
            .catch((error) => {
                resolve({})
            })
    })
}
export function CountAnswerFailDetailExcel(params) {
    return new Promise((resolve, reject) => {
        axios.get(api.COUNT_ANSWER_FAIL_DETAIL_EXCEL, { params }).then(response => {
                resolve(response.data);
            }, err => {
                resolve({});
            })
            .catch((error) => {
                resolve({})
            })
    })
}