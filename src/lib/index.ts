import fs from 'fs-extra';
import { inputArgs } from './model/constructor-model';
import createConfig from './helper/index';

class LoadBalancer {
  data!: Array<inputArgs>

  port!: String

  upstreamName!: String

  nginxConfigLocation!: String

  constructor(args: Array<inputArgs>,
    options: {
      port: String,
      upstreamName: String,
      nginxConfigLocation: String
    }) {
    const { port, upstreamName, nginxConfigLocation } = options;
    this.data = args;
    this.port = port;
    this.upstreamName = upstreamName;
    this.nginxConfigLocation = nginxConfigLocation;
  }

  /**
   * To create config for load balancer/proxy.
   */
  createLoadBalancerConfig() {
    return createConfig(this.data, this.port, this.upstreamName);
  }

  /**
   * Move nginx config.
   */
  async makeConfig(nginxConfig:String) {
    const location = process.env.NODE_ENV ==='development' ? `${this.nginxConfigLocation}/nginx.conf` : '/etc/nginx/nginx.conf';
    console.log(nginxConfig, '\n\n', location,'\n',process.env.NODE_ENV);
    fs.writeFile(location, nginxConfig);
  }
}

export default LoadBalancer;
