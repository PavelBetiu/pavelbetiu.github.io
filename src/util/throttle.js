import { set } from "lodash";

/**
 * Simple throttle function that returns a throttler function for the passed function
 * @param handlerFunc
 * @param [timeout] the throttle interval
 */
export function throttle(handlerFunc, timeout = 66) {
  let resizeTimeout = false;

  return function () {
    if (resizeTimeout) return;

    resizeTimeout = true;
    handlerFunc();
    setTimeout(function () {
      resizeTimeout = false;
    }, timeout);
  }
}
