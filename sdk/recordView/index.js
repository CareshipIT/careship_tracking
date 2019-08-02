import record from "./record";

const apiBaseUrl = window.trackingApiBaseUrl;

const hostName = window.location.hostname
const pathName = window.location.pathname
const urlParameters = window.location.search + window.location.hash

record(apiBaseUrl, hostName, pathName, urlParameters)
