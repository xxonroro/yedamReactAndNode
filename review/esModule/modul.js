function module(msg) {
    console.log("msg: " + msg);
};

function moduleA(msg) {
    console.log("moduleA: " + msg);
};

export {module, moduleA};