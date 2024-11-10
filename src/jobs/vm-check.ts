import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { VmAction } from "../types/vm-action";
import { VmActions } from "../enums/vm-action";

import { startVm } from "../services/start-vm";
import { stopVm } from "../services/stop-vm";

dayjs.extend(utc);
dayjs.extend(timezone);

export const vmCheck = async (vm: VmAction) => {
    const currentDate = dayjs().tz(vm.timezone);
    const timeFormat = currentDate.format('HH:mm');

    if (vm.triggeredTime === timeFormat || vm.toleranceTimes.includes(timeFormat)) {
        switch(vm.action) {
            case VmActions.Start:
                await startVm(vm.vmUuid, vm.location);
                return `VM ${vm.vmUuid} started [current=${timeFormat}, trigger=${vm.triggeredTime}]`;
            case VmActions.Stop:
                await stopVm(vm.vmUuid, vm.location);
                return `VM ${vm.vmUuid} stopped [current=${timeFormat}, trigger=${vm.triggeredTime}]`;
            default:
                return `VM ${vm.vmUuid} unknown action ${vm.action} [current=${timeFormat}, trigger=${vm.triggeredTime}]`;
        }
    }

    return `VM ${vm.vmUuid} idle [current=${timeFormat}, trigger=${vm.triggeredTime}]`;
}