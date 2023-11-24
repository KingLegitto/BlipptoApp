/**
 * This function checks if the PUBLIC_URL is on a different origin from what our page is served on.
 *
 * @returns {void}
 */

export function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      registerValidSW(swUrl);
    });
  }
}

/**
 * This function registers a valid service worker file.
 *
 * @param {string} swUrl
 * @returns {void}
 */

async function registerValidSW(swUrl) {
  try {
    const registration = await navigator.serviceWorker.register(swUrl);
    
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            console.log(
              "New content is available and will be used when all " +
                "tabs for this page are closed. See https://cra.link/PWA."
            );
          } else {
            if (window.deferredPrompt) {
              window.deferredPrompt.prompt();

              window.deferredPrompt.userChoice.then(() => {
                window.deferredPrompt = null;
              });
            }
            console.log("Content is cached for offline use.");
          }
        }
      };
    };
  } catch (error) {
    console.error("Error during service worker registration:", error);
  }
}

/**
 * This function unregisters a service worker
 *
 */

export async function unregister() {
  try {
    if ("serviceWorker" in navigator) {
      const registration = await navigator.serviceWorker.ready;
      registration.unregister();
    }
  } catch (error) {
    console.error(error.message);
  }
}
