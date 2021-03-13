import { inputArgs } from './model/constructor-model';
import createConfig from './helper';

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
  makeConfig(nginxConfig:String) {
    console.log(this.nginxConfigLocation, '\n\n\n', nginxConfig);
  }
}

export default LoadBalancer;
