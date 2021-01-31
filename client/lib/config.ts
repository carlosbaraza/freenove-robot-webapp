export const ACTUAL_ROBOT_API_URL = "http://192.168.1.247:2204";
export const ROBOT_API_URL =
  typeof window === "undefined" ? ACTUAL_ROBOT_API_URL : `http://${window.location.hostname}:2204`;

export const ROBOT_CAMERA_FEED = "ws://192.168.1.247:8082/";
