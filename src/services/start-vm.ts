import { idcloudhostHttpClient } from "../common/idcloudhost"

/**
 * Start VM service
 * @param vmUuid VM UUID
 * @param vmLocation VM Location
 * @return {Promise<boolean>}
 */
export const startVm = async (vmUuid: string, vmLocation: string): Promise<boolean> => {
    const response = await idcloudhostHttpClient.postForm<{
        status: 'running'
    }>(`/v1/${encodeURIComponent(vmLocation)}/user-resource/vm/start`, undefined, {
        params: {
            uuid: vmUuid,
        },
    });

    return response.data.status === 'running';
}