export function mockTTY(isTTY: boolean): void {
  Object.defineProperty(process.stdout, 'isTTY', {
    value: isTTY,
    configurable: true,
  });
}
