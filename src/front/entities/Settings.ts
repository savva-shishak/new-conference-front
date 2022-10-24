import { v4 } from 'uuid';
import { BehaviorSubject } from "rxjs";

export class Settings {
    public peerId = new BehaviorSubject(localStorage.getItem('peerId') || v4());
    public displayName = new BehaviorSubject(localStorage.getItem('displayName') || 'Пользователь_' + (Math.random() * 100 >> 0))
    public avatar = new BehaviorSubject(localStorage.getItem('displayName') || '');
    public videoDeviceId = new BehaviorSubject(localStorage.getItem('videoDeviceId') || '');
    public audioDeviceId = new BehaviorSubject(localStorage.getItem('audioDeviceId') || '');
    public videoDevicePaused = new BehaviorSubject(localStorage.getItem('videoDevicePaused') === 'true');
    public audioDevicePaused = new BehaviorSubject(localStorage.getItem('audioDevicePaused') === 'true');
    public audioOutputDevice = new BehaviorSubject(localStorage.getItem('audioOutputDevice'));
    public audioOutoutVolume = new BehaviorSubject(+(localStorage.getItem('audioOutoutVolume') || 1));

    constructor () {
        const saveToLocalStorage: { key: string, subject: BehaviorSubject<any> }[] = [
            {key: 'peerId', subject: this.peerId, },
            {key: 'displayName', subject: this.displayName, },
            {key: 'avatar', subject: this.avatar, },
            {key: 'videoDeviceId', subject: this.videoDeviceId, },
            {key: 'audioDeviceId', subject: this.audioDeviceId, },
            {key: 'videoDevicePaused', subject: this.videoDevicePaused, },
            {key: 'audioDevicePaused', subject: this.audioDevicePaused, },
            {key: 'audioOutputDevice', subject: this.audioOutputDevice, },
            {key: 'audioOutoutVolume', subject: this.audioOutoutVolume, },
        ];

        for (const {key, subject} of saveToLocalStorage) {
            subject.subscribe((value) => localStorage.setItem(key, value));
        }
    }
}