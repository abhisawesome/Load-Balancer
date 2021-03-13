import { inputArgs } from '../model/constructor-model';
/**
 *
 * @param {Array<inputArgs>} data
 */

export default (data: Array<inputArgs>, upstreamName: String = 'all') => {
  let config = `upstream ${upstreamName} {`;
  data.forEach((serverElement) => {
    const { server, weight } = serverElement;
    if (server) {
      config += `server ${server} weight:${weight || 1};`;
    }
  });
  config += ' }';
  return config;
};
