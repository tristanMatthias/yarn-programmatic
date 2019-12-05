import { exec, ExecOptions } from '../lib/exec';

export const info = async (options?: ExecOptions) =>
  JSON.parse((await exec('info', ['--json'], options)).stdout).data;
