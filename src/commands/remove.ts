import { exec, ExecOptions } from '../lib/exec';

export const remove = async (packages: string[] | string, options?: ExecOptions) => {
  const p = (typeof packages === 'string') ? [packages] : packages;

  await exec('remove', [p.join(' ')], options);
};
