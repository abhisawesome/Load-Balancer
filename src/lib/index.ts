import { inputArgs } from './model/constructor-model';
import createConfig from './helper';

class LoadBalancer {
  data!: Array<inputArgs>

  constructor(args: Array<inputArgs>) {
    this.data = args;
  }

  /**
   * To create config for load balancer.
   */
  createLoadBalancerConfig() {
    createConfig(this.data);
  }
}

export default LoadBalancer;
