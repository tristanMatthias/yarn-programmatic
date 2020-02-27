import { exec, ExecOptions } from '../lib/exec';

/**
 * Lookup info for a npm package
 * @param name Package to lookup
 * @param options Options to pass to exec
 */
export type AnyObj = { [key: string]: any };
export async function info(pkg?: string, options?: ExecOptions): Promise<AnyObj>;
/**
 * Lookup info for a npm package
 * @param options Options to pass to exec
 */
export async function info(options?: ExecOptions): Promise<AnyObj>;
/**
 * Lookup info for a npm package
 * @param pkgOrOptions Package to lookup, or options to pass to exec
 * @param maybeOptions Options to pass to exec
 */
export async function info(pkgOrOptions?: string | ExecOptions, maybeOptions?: ExecOptions): Promise<AnyObj> {
  let options: ExecOptions = {};
  const args = ['--json'];
  if (typeof pkgOrOptions === 'string') {
    args.unshift(pkgOrOptions);
    if (maybeOptions) options = maybeOptions;
  } else if (typeof pkgOrOptions === 'object') options = pkgOrOptions;

  return JSON.parse((await exec('info', args, options)).stdout).data;
}
