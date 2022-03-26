import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";

interface Context {
    socket: Socket;
    username?: string;
    setUsername: Dispatch<SetStateAction<string>>;
    roomId?: string;
    rooms: {};
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
    socket,
    setUsername: () => "",
    rooms: {},
});

export const SocketsProvider = (props: any) => {
    const [username, setUsername] = useState("");
    const [roomId, setRoomId] = useState("");
    const [rooms, setRooms] = useState([]);

    return (
        <SocketContext.Provider
            value={{ socket, username, setUsername, rooms, roomId }}
            {...props}
        />
    );
};

export const useSockets = () => useContext(SocketContext);
