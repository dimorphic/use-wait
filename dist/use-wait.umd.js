!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t(e.useWait={},e.react)}(this,function(e,t){var n="default"in t?t.default:t,i=n.createContext([]);function r(e){return t.useContext(i).waiters.includes(e.message)?e.waiting:e.children}e.Waiter=function(e){var r=t.useState(t.useContext(i)),u=r[0],a=r[1];return n.createElement(i.Provider,{value:{waiters:u,isWaiting:function(e){return u.includes(e)},start:function(e){if(u.includes(e))return u;var t=u.concat([e]);a(t)},end:function(e){a(u.filter(function(t){return t!==e}))}}},e.children)},e.useWait=function(){var e=t.useContext(i);return Object.assign({},e,{Wait:r})}});
//# sourceMappingURL=use-wait.umd.js.map
