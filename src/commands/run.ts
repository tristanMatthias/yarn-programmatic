import { exec, ExecOptions } from '../lib/exec';

export const run = async (
  cmd: string,
  params: string[] = [],
  options: ExecOptions
) => {
  await exec('run', [cmd, ...params], options);
};
