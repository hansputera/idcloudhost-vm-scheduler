import { idcloudhostHttpClient } from "./common/idcloudhost";
import { vmActions } from "./config/vms";
import { vmCheck } from "./jobs/vm-check";

export default {
	async scheduled(event, env, ctx): Promise<void> {
		idcloudhostHttpClient.defaults.headers.post = {
			'apikey': env.API_KEY,
			'User-Agent': 'IdCloudHostScheduler/1.0',
		};

		console.log(`Starting to check ${vmActions.length} VMs on UNIX ${Date.now()}`);
		const promises = vmActions.map(async vm => vmCheck(vm));
		const output = await Promise.all(promises);

		console.log(output);
	},
} satisfies ExportedHandler<Env>;
