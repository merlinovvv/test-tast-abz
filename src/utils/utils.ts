/**
 * Combines multiple classes into one string
 * @param classes - string list, undefined, null or objects { className: condition }
 * @returns string with classNames
 */
export function cn(
  ...classes: Array<string | undefined | null | false | Record<string, boolean>>
): string {
  return classes
    .flatMap(c => {
      if (!c) return [];
      if (typeof c === 'string') return [c];
      if (typeof c === 'object') {
        return Object.entries(c)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .join(' ');
}

/**
 * Checking an object for empty data
 * @param values - object
 * @returns boolean
 */
export function hasEmptyKeys(values: any) {
  return Object.keys(values).some(key => values[key].length === 0);
}
