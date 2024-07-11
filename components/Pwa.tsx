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

            prompt.userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the install prompt");
                } else {
                    console.log("User cancelled the install prompt");
                }

                setPrompt(null);
                setShowInstall(false);
            })
        }
    };

  return (
    <div>
    {showInstall &&
        <Button className='bg-white text-black hover:bg-lime-300' onClick={handleInstall}>
            Install PWA
        </Button>
    }
    </div>
  )
}

export default Pwa
