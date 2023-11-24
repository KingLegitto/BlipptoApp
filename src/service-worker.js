/* eslint-disable no-restricted-globals */

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

/**
 * This function returns a boolean by checking whether the particular request is a navigation request.
 *
 * @param {Object} param0 - The object containing request and url properties.
 * @param {Request} param0.request - The Request object representing the HTTP request.
 * @param {URL} param0.url - The URL object representing the parsed URL of the request.
 * @returns {boolean} - Returns true if the request should be handled, otherwise false.
 */

function checkRequestStatus({ request, url }) {
  const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");

  // If this isn't a navigation, skip.
  if (request.mode !== "navigate") {
    return false;
  }

  // If this is a URL that starts with /_, skip.
  if (url.pathname.startsWith("/_")) {
    return false;
  }
  
  // If this looks like a URL for a resource, because it contains // a file extension, skip.
  if (url.pathname.match(fileExtensionRegexp)) {
    return false;
  }

  return true;
}

/**
 * This function Sets up App Shell-style routing, so that all navigation requests are fulfilled with your index.html shell
 *
 */

registerRoute(
  checkRequestStatus,
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

/**
 * this function checks if the origin of the service worker and the url are the same and if the url is a png resource url
 *
 *  @param {Object} param0 - The object containing url.
 * @param {URL} param0.url - The URL object representing the parsed URL of the request.
 * @returns {boolean} - return a boolean
 */

function checkRequestUrlForPNGResource({ url }) {
  url.origin === self.location.origin && url.pathname.endsWith(".png");
}

/**
 * This function handles runtime caching route for requests that aren't handled by the precache, in this case same-origin .png requests like those from in public/
 */

registerRoute(
  checkRequestUrlForPNGResource,
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size, the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;

  event.prompt();
});
