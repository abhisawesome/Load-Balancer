import { inputArgs } from './model/constructor-model';
import createConfig from './helper';

class LoadBalancer {
  data!: Array<inputArgs>

  port!: number

  upstreamName!: String

  constructor(args: Array<inputArgs>, port: number = 8080, upstreamName: String = 'all') {
    this.data = args;
    this.port = port;
    this.upstreamName = upstreamName;
  }

  /**
   * To create config for load balancer.
   */
  createLoadBalancerConfig() {
    return createConfig(this.data, this.port, this.upstreamName);
  }
}

export default LoadBalancer;
