import {TonConnectButton} from "@tonconnect/ui-react";
import './header.scss';

export const Header = () => {
    const isUseTonBridge = localStorage.getItem('useTonBridge');
    return <header>
        <span>My App with React UI</span>
        <button onClick={()=> {
            if(isUseTonBridge) {
                localStorage.removeItem("useTonBridge");

            }
            else {
                localStorage.setItem("useTonBridge", '1');

            }
            window.location.reload();
        }}>{isUseTonBridge ? 'Use Tobi Bridge' : 'Use Ton Bridge'}</button>
        <TonConnectButton />
    </header>
}
