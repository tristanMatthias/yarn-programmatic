import { exec as child, Options } from 'child-process-promise';
import { ExecOptions as CPExecOptions } from 'child_process';

export type ExecOptions = Options & CPExecOptions;
export const exec = async (
  cmd: string,
  args: string[],
  options?: ExecOptions
) =>
  child(`yarn ${cmd} ${args.join(' ')}`, options);
