import { MochaRemoteClient } from "mocha-remote-client";

const mochaClient = new MochaRemoteClient({
    onInstrumented: () => {
        require("./app.test");
        require("./credentials.test");
        require("./functions.test");
        require("./services.test");
    },
});
