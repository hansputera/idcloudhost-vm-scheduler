import { idcloudhostHttpClient } from "../common/idcloudhost"

/**
 * Stop VM?
 * @param vmUuid VM UUID
 * @param force Force stop VM?
 * @return {Promise<boolean>}
 */
export const stopVm = async (vmUuid: string, force = false): Promise<boolean> => {
    const response = await idcloudhostHttpClient.postForm<{
        status: 'stopped',
    }>('/v1/user-resource/vm/stop', {
        uuid: vmUuid,
        force,
    });

    return response.data.status === 'stopped';
}