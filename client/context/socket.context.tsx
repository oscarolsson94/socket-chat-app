import { createContext, useContext } from "react";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../config/default";

const SocketContext = createContext({});

const SocketsProvider = (props: any) => {
    return (
        <SocketContext.Provider value={{}}>{...props}</SocketContext.Provider>
    );
};

export const useSockets = () => useContext(SocketContext);
