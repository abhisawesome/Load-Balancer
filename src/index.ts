import dotenv from 'dotenv';
import LoadBalancer from './lib';

dotenv.config();

const Configure = async (data: any,
  options: {
    port: String,
    upstreamName: String,
    nginxConfigLocation: String
  }) => {
  try {
    const { port, upstreamName, nginxConfigLocation } = options;
    const loadBalancer = new LoadBalancer(data, { port, upstreamName, nginxConfigLocation });
    const config = await loadBalancer.createLoadBalancerConfig();
    await loadBalancer.makeConfig(config);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const data = process.env.data ? JSON.parse(process.env.data) : [];
const port = process.env.port || '8080';
const upstreamName = process.env.upstreamName || 'all';
const nginxConfigLocation = process.env.nginxConfigLocation || '/etc/nginx/nginx.conf';
Configure(data, { port, upstreamName, nginxConfigLocation });
