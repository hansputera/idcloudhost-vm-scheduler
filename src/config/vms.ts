import { VmActions } from "../enums/vm-action";
import { VmAction } from "../types/vm-action";

export const vmActions: Array<VmAction> = [
    {
        vmUuid: 'fe7b84e7-b0a6-40bc-8b9d-e1b2f89d859f',
        action: VmActions.Stop,
        timezone: 'Asia/Jakarta',
        triggeredTime: '00:00',
        toleranceTimes: ['00:01'],
        location: 'sgp01',
    }, {
        vmUuid: 'fe7b84e7-b0a6-40bc-8b9d-e1b2f89d859f',
        action: VmActions.Start,
        timezone: 'Asia/Jakarta',
        triggeredTime: '06:00',
        toleranceTimes: ['06:01', '02:04'],
        location: 'sgp01',
    },
];
