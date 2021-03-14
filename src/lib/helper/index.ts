import { inputArgs } from '../model/constructor-model';
import createUpstream from './create-upstream';
import createServer from './create-server';
import createHttp from './create-http';
import createEvent from './create-events';
/**
 *
 * @param {Array<inputArgs>} data
 * @returns
 */
export default (data: Array<inputArgs>, port:String, upstreamName:String) => {
  try {
    const upstream = createUpstream(data, upstreamName);
    const server = createServer(port, upstreamName);
    const http = createHttp(upstream, server);
    const events = createEvent();
    return Promise.resolve(`${events}\n ${http}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
