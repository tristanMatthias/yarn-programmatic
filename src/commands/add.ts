import { exec, ExecOptions } from '../lib/exec';
import { mapFlags } from '../lib/mapFlags';

const flagMap = {
  dev: 'saveDev'
};

export interface AddOptions extends ExecOptions {
  dev?: boolean;
}

export const add = async (packages: string[] | string, options: AddOptions = {}) => {
  const p = (typeof packages === 'string') ? [packages] : packages;

  const flags = mapFlags(options, flagMap);

  await exec('add', [...p, ...flags]);
};
