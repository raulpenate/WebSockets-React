import "reflect-metadata"; 

// Decorator to omit specific fields from an object
export function OmitFields(...fields: string[]) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    descriptor.value = async function (...args: any[]) {
      // Call the original method
      const result = await originalMethod.apply(this, args);

      // Omit specified fields from the result object
      if (result && typeof result === "object") {
        // biome-ignore lint/complexity/noForEach: <explanation>
        fields.forEach((field) => {
          // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
          if (result.hasOwnProperty(field)) {
            delete result[field];
          }
        });
      }

      return result;
    };
  };
}
