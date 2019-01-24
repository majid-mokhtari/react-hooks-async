import { Request } from 'node-fetch';
// eslint-disable-next-line import/named
import { AsyncTask } from './index';

export type UseAsyncTaskWasm = <Result>(
  input: string | Request,
  inputObject?: object,
) => AsyncTask<Result>;

export const useAsyncTaskWasm: UseAsyncTaskWasm;
export const useWasm: UseAsyncTaskWasm;
export default useAsyncTaskWasm;
