import { inputArgs } from '../model/constructor-model';
import createUpstream from './create-upstream';
import createServer from './create-server';
import createHttp from './create-http';

/**
 *
 * @param {Array<inputArgs>} data
 * @returns
 */
export default (data: Array<inputArgs>, port:number, upstreamName:String) => {
  try {
    const upstream = createUpstream(data, upstreamName);
    const server = createServer(port, upstreamName);
    const http = createHttp(upstream, server);
    return Promise.resolve(http);
  } catch (error) {
    return Promise.reject(error);
  }
};
