import dotenv from 'dotenv';
import LoadBalancer from './lib';

dotenv.config();

const Configure = async (data:any) => {
  try {
    const loadBalancer = new LoadBalancer(data);
    const config = await loadBalancer.createLoadBalancerConfig();
    console.log(config);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const data = process.env.data ? JSON.parse(process.env.data) : [];
Configure(data);
