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
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
    socket,
    setUsername: () => "",
});

export const SocketsProvider = (props: any) => {
    const [username, setUsername] = useState("");

    return (
        <SocketContext.Provider
            value={{ socket, username, setUsername }}
            {...props}
        />
    );
};

export const useSockets = () => useContext(SocketContext);
