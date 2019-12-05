import { exec, ExecOptions } from '../lib/exec';
import { mapFlags } from '../lib/mapFlags';

const flagMap = {
  private: 'private'
};

export interface InitOptions extends ExecOptions {
  private?: boolean;
}

export const init = async (options: InitOptions = {}) => {
  const flags = mapFlags(options, flagMap);
  await exec('init', ['-y', ...flags], options);
};
