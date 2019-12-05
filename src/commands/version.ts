import { exec, ExecOptions } from '../lib/exec';

export type Version = 'patch' | 'prepatch' | 'minor' | 'preminor' | 'major' | 'premajor' | string;

export const version = async (v: Version, options?: ExecOptions) => {
  switch (v) {
    case 'patch':
    case 'prepatch':
    case 'minor':
    case 'preminor':
    case 'major':
    case 'premajor':
      await exec('version', [`--${v}`], options);
      break;
    default:
      await exec('version', [`--new-version=${v}`], options);
  }
};
