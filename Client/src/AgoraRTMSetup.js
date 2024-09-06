import { createClient } from 'agora-rtm-react';

const appId = "8981c03efde9489b89e319203880ba12";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useRTMClient = createClient(appId);