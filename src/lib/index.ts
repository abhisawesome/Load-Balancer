import { inputArgs } from './model/constructor-model';

class LoadBalancer {
  data!: Array<inputArgs>

  constructor(args: Array<inputArgs>) {
    this.data = args;
    console.log(this.data, 'in load balancer');
  }

  /**
   * To create config for load balancer.
   */
  createLoadBalancerConfig() {
    console.log(this.data);
  }
}

export default LoadBalancer;
