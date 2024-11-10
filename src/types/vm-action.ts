import { VmActions } from "../enums/vm-action";

export type VmAction = {
    vmUuid: string;
    action: VmActions;
    timezone: string;
    triggeredTime: string; // Hour:Minute
    toleranceTimes: string[]; // [Hour:Minute]
    location: string; // sgp02, jkt02
}
