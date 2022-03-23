import { Server, Socket } from "socket.io";
import { log } from "./utils/logger";

const EVENTS = {
    connection: "connection",
};

export const socket = ({ io }: { io: Server }) => {
    log.info(`Sockets enabled`);
    io.on(EVENTS.connection, (socket: Socket) => {
        log.info(`user connected ${socket.id}`);
    });
};
