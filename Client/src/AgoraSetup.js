import { createClient, createMicrophoneAndCameraTracks, createScreenVideoTrack } from "agora-rtc-react";

import AgoraRTM from 'agora-rtm-sdk';

/* your agora project key*/ const appId = "";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const useScreenVideoTrack = createScreenVideoTrack();


export const rtmClient = AgoraRTM.createInstance(appId);
