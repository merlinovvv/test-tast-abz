export type ErrorType = {
  message: string;
  fails: Record<string, string | string[] | undefined>;
};
