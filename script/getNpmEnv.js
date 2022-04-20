/**
 * 读取 npm 的环境变量
 * */
const env = new Proxy(process.env, {
    get: function (target, prop) {
        // 当直调用 env 的时候，prop 为 Symbol 类型
        console.log(prop);
        if (typeof prop !== 'string' || Reflect.has(target, prop)) {
            return Reflect.get(target, prop);
        }
        // 通过 npm_package_ 获取常用信息
        const prefixes = ['npm_package_', 'npm_config_', 'npm_node_'];
        for (const key of prefixes) {
            const prefixProp = key + prop;
            if (Reflect.has(target, prefixProp)) {
                return Reflect.get(target, prefixProp);
            }
        }
        return undefined;
    },
});

module.exports = env;
