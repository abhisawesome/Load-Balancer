import { inputArgs } from '../model/constructor-model';
import createUpstream from './create-upstream';

/**
 *
 * @param data
 * @returns
 */
export default (data:Array<inputArgs>) => {
  try {
    const upstream = createUpstream(data);
    console.log(upstream);
    return Promise.resolve(upstream);
  } catch (error) {
    return Promise.reject(error);
  }
};
