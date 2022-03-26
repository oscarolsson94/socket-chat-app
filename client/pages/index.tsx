import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSockets } from "../context/socket.context";
import { RoomsContainer } from "../containers/Rooms";
import { MessagesContainer } from "../containers/Messages";
import { useRef } from "react";

export default function Home() {
    const { socket, username, setUsername } = useSockets();
    const usernameRef = useRef(null);

    const handleSetUser = () => {
        const value = usernameRef.current.value;

        if (!value) return;

        setUsername(value);

        localStorage.setItem("username", value);
    };
    return (
        <div>
            <RoomsContainer />
            <MessagesContainer />
        </div>
    );
}
