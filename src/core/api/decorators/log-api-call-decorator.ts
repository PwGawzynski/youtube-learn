/* eslint-disable */


export function LogApiCall<ApiClass>(
  _target: object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<any>>,
): TypedPropertyDescriptor<(...args: any[]) => Promise<any>> | void {
  const originalMethod = descriptor.value;

  if (!originalMethod) {
    return;
  }

  const log = (args: unknown[]): void => {
    if (__DEV__) {
      console.log(`API CALL: ${String(propertyKey)} with args:`, args);
    }
  };

  descriptor.value = async function (
    this: ApiClass,
    ...args: unknown[]
  ): Promise<unknown> {
    log(args);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}
