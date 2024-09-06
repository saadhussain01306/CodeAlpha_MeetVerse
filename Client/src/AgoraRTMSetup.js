import { createClient } from 'agora-rtm-react';

/* your agora project key*/ const appId = "";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);
