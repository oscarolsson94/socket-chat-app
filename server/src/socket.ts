import { Server, Socket } from "socket.io";
import { log } from "./utils/logger";

const EVENTS = {
    connection: "connection",
    CLIENT: {
        CREATE_ROOM: "CREATE_ROOM",
    },
};

export const socket = ({ io }: { io: Server }) => {
    log.info(`Sockets enabled`);
    io.on(EVENTS.connection, (socket: Socket) => {
        log.info(`user connected ${socket.id}`);

        socket.on(EVENTS.CLIENT.CREATE_ROOM, (roomName) => {
            console.log(roomName);
        });
    });
};
