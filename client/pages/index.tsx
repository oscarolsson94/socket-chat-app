import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSockets } from "../context/socket.context";
import { RoomsContainer } from "../containers/Rooms";
import { MessagesContainer } from "../containers/Messages";

export default function Home() {
    const { socket } = useSockets();
    return (
        <div>
            <RoomsContainer />
            <MessagesContainer />
        </div>
    );
}
