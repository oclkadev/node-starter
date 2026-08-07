/**
 * Main entry point for the node-starter CLI.
 *
 * @example
 * ```ts
 * import { greet } from '@oclkadev/node-starter';
 *
 * greet('world'); // "Hello, world!"
 * ```
 */

/**
 * Returns a greeting message for the given name.
 *
 * @param name - The name to greet.
 * @returns A formatted greeting string.
 * @public
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
