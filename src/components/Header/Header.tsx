import {TonConnectButton} from "@tonconnect/ui-react";
import './header.scss';

export const Header = () => {
    return <header>
        <span>My App with React UI</span>
        <button onClick={()=> {
            localStorage.setItem("useTonBridge", '1')
        }}>Use Ton Bridge</button>
        <TonConnectButton />
    </header>
}
