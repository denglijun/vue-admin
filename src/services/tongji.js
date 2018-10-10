import axios from "../common/axios";
import * as api from "../api";
import defaultValue from "./default";

export function countuser (params) {
    return new Promise((resolve, reject) => {
      axios.get(api.COUNT_USER, {params}).then(response => {
        resolve(response.data);
      }, err => {
        resolve(defaultValue.countuser);
      })
        .catch((error) => {
          resolve(defaultValue.countuser)
        })
    })
  }

  export function CountFriend2blind (params) {
    return new Promise((resolve, reject) => {
      axios.get(api.COUNT_FRIEND_BLIND, {params}).then(response => {
        resolve(response.data);
      }, err => {
        resolve(defaultValue.countuser);
      })
        .catch((error) => {
          resolve(defaultValue.countuser)
        })
    })
  }

  export function CountBlind2Friend (params) {
    return new Promise((resolve, reject) => {
      axios.get(api.COUNT_BLIND_FRIEND, {params}).then(response => {
        resolve(response.data);
      }, err => {
        resolve(defaultValue.countuser);
      })
        .catch((error) => {
          resolve(defaultValue.countuser)
        })
    })
  }

  export function CountCallanswerchat (params) {
    return new Promise((resolve, reject) => {
      axios.get(api.COUNT_CALL_ANSWER_CHAT, {params}).then(response => {
        resolve(response.data);
      }, err => {
        resolve(defaultValue.countuser);
      })
        .catch((error) => {
          resolve(defaultValue.countuser)
        })
    })
  }

  export function CountAnswerFailReason (params) {
    return new Promise((resolve, reject) => {
      axios.get(api.COUNT_ANSWER_FAIL_REASON, {params}).then(response => {
        resolve(response.data);
      }, err => {
        resolve(defaultValue.countuser);
      })
        .catch((error) => {
          resolve(defaultValue.countuser)
        })
    })
  }

  export function CountChatFailReason (params) {
    return new Promise((resolve, reject) => {
      axios.get(api.COUNT_CHAT_FAIL_REASON, {params}).then(response => {
        resolve(response.data);
      }, err => {
        resolve(defaultValue.countuser);
      })
        .catch((error) => {
          resolve(defaultValue.countuser)
        })
    })
  }