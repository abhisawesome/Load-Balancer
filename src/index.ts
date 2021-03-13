import dotenv from 'dotenv';
import LoadBalancer from './lib';

dotenv.config();

try {
  const data = process.env.data ? JSON.parse(process.env.data) : [];
  const loadBalancer = new LoadBalancer(data);
} catch (error) {
  console.log(error);
  throw error;
}
