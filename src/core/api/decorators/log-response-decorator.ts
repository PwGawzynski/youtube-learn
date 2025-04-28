/* eslint-disable */


export function LogResponse<ApiClass>(
  _target: object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => Promise<any>>,
): TypedPropertyDescriptor<(...args: any[]) => Promise<any>> | void {
  const originalMethod = descriptor.value;

  if (!originalMethod) {
    return;
  }

  const log = (result: unknown): void => {
    if (__DEV__) {
      console.log(
        `YT_DATA_API_RESPONSE FROM ${String(propertyKey)}:`,
        `${JSON.stringify(result).slice(0, 30)}...`,
      );
    }
  };

  descriptor.value = async function (
    this: ApiClass,
    ...args: unknown[]
  ): Promise<unknown> {
    try {
      const result = await originalMethod.apply(this, args);
      log(result);
      return result;
    } catch (e) {
      throw e;
    }
  };

  return descriptor;
}
