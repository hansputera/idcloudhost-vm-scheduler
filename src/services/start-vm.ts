import { idcloudhostHttpClient } from "../common/idcloudhost"

/**
 * Start VM service
 * @param vmUuid VM UUID
 * @return {Promise<boolean>}
 */
export const startVm = async (vmUuid: string): Promise<boolean> => {
    const response = await idcloudhostHttpClient.postForm<{
        errors: {
            Error: string;
        };
    }>('/v1/user-resource/vm/start', {
        uuid: vmUuid,
    });

    return !(Boolean(response.data.errors?.Error));
}