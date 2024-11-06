# IDCloudHost VM Scheduler

Shutdown/start VM on IDCloudHost every day at specified time to reduce hourly cost. I dont have enough money actually (sad :<)

## Configuration
Simply you can add your [IDCloudhost](https://idcloudhost.com) API Key to `.dev.vars` or production secrets. Don't forget to configure the VMs on `src/config/vms.ts`, just follow the provided schema on `src/types/vm-action.ts`. And, you ready to deploy it on Cloudflare Worker :)

## License
MIT