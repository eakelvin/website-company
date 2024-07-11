"use state"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
  
const Pwa = () => {
    const [showInstall, setShowInstall] = useState<Boolean>(false);
    const [prompt, setPrompt] = useState<any>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event: any) => {
            event.preventDefault();
            setPrompt(event);

            if (!window.matchMedia("(display-mode: standalone)").matches) {
                setShowInstall(true);
            }
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener(
                "beforeinstallprompt", handleBeforeInstallPrompt
            );
        };
    }, []);

    const handleInstall = () => {
        if (prompt) {
            prompt.prompt();

            // prompt.userChoice.then((choiceResult: any) => {
            //     if (choiceResult.outcome === "accepted") {
            //         console.log("Accepted");
            //     } else {
            //         console.log("Cancelled");
            //     }

            //     setPrompt(null);
            //     setShowInstall(false);
            // })
        }
    };

  return (
    <Button className='bg-white text-black hover:bg-lime-300' onClick={handleInstall}>
        Install PWA
    </Button>
  )
}

export default Pwa
