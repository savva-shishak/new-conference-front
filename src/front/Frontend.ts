import { BehaviorSubject, Subject } from "rxjs";
import { Audio } from "./entities/Audio";
import { Message } from "./entities/Message";
import { Peer } from "./entities/Peer";
import { Settings } from "./entities/Settings";
import { WindowModel } from "./entities/WindowModel";
import { Notify, ScreenMode } from "./types";
import { SubjectList } from "./utils/SubjectList";

export class Frontend {
    public readonly windows = new SubjectList<WindowModel>();
    public readonly messages = new SubjectList<Message>();
    public readonly participants = new SubjectList<Peer>();
    public readonly audio = new SubjectList<Audio>();

    public readonly settings: Settings = new Settings();
    
    public readonly notify = new Subject<Notify>();
    public readonly fullscreenWindow = new Subject<WindowModel>();
    // TODO Сделать скрины
    public readonly screensMode = new BehaviorSubject<ScreenMode>(null as any);
}
