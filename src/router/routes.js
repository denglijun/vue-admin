import dashboard from "../pages/dashboard.vue";
import NotFoundView from "../components/404.vue";
import menuList from "../pages/sys/menu.vue";
import role from "../pages/sys/role.vue";
import resource from "../pages/sys/resource.vue";
import login from "../pages/login.vue";
import app from "../App.vue";
import sysUser from "../pages/sys/user.vue";
import userAdd from "../pages/sys/userAdd.vue";
import resetPwd from "../pages/resetPwd.vue";
import countUser from "../pages/tongji/countUser.vue";
import countAnswerFailReason from "../pages/tongji/countAnswerFailReason.vue";
import countBlind2Friend from "../pages/tongji/countBlind2Friend";
import countCallanswerchat from "../pages/tongji/countCallanswerchat";
import countChatFailReason from "../pages/tongji/countChatFailReason";
import countFriend2blind from "../pages/tongji/countFriend2blind";
import countCallDetail from "../pages/tongji/countCallDetail";
import countChatDetail from "../pages/tongji/countChatDetail";
import countAnswerFailDetail from "../pages/tongji/countAnswerFailDetail";
import wifi from "../pages/business/Wifi";
import wifiAdd from "../pages/business/WifiAdd";

// Routes
const routes = [
    { path: '/login', component: login },
    {
        path: '/test',
        component: app,
        children: [
            { path: '*', component: NotFoundView }
        ]
    },
    {
        path: '',
        component: app,
        children: [
            { path: "/tongji/1", component: countUser },
            { path: "/tongji/2", component: countBlind2Friend },
            { path: "/tongji/3", component: countFriend2blind },
            { path: "/tongji/4", component: countCallanswerchat },
            { path: "/tongji/5", component: countAnswerFailReason },
            { path: "/tongji/6", component: countChatFailReason },
            { path: "/tongji/7", component: countCallDetail },
            { path: "/tongji/8", component: countChatDetail },
            { path: "/tongji/9", component: countAnswerFailDetail }
        ]
    },
    {
        path: '',
        component: app,
        children: [
            { path: '/resetPwd', component: resetPwd },
            { path: '/index', component: dashboard },
            { path: '/sys/menuList', component: menuList },
            { path: '/sys/roleList', component: role },
            { path: '/sys/userList', component: sysUser },
            { path: '/sys/userAdd', component: userAdd },
            { path: '/sys/resource', component: resource }
        ]
    },
    { path: '*', component: NotFoundView },
    {
        path: '',
        component: app,
        children: [
            { path: '/business/wifi', component: wifi },
            { path: '/business/wifiAdd', component: wifiAdd },
        ]
    }

]


export default routes