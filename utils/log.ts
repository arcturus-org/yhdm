export const log = (msg: any, ...optional: any[]) => {
  if (import.meta.env.DEV) {
    console.log(msg, ...optional);
  }
};

export const error = (msg: any, ...optional: any[]) => {
  if (import.meta.env.DEV) {
    console.error(msg, ...optional);
  }
};

export const warn = (msg: any, ...optional: any[]) => {
  if (import.meta.env.DEV) {
    console.warn(msg, ...optional);
  }
};
