export const config = {
    serverAddresses: [
        "wss://6004-openaicodexguy-netvm-7yrwp1it334.ws-eu107.gitpod.io", 
        "wss://6005-openaicodexguy-netvm-7yrwp1it334.ws-eu107.gitpod.io",
        "wss://6006-openaicodexguy-netvm-7yrwp1it334.ws-eu107.gitpod.io",
        "wss://6007-openaicodexguy-netvm-7yrwp1it334.ws-eu107.gitpod.io"
    ],
    chatSound: "",
    // What XSS implementation the server uses
    // 0: No XSS (cvm1.2.11)
    // 1: Internal fork style (cvm1.ts, global opcode 21)
    // 2: yellows111/collab-vm-server style (per-user opcode 21)
    xssImplementation: 1,
}
