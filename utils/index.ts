export function isEmptyOrSpaces(str: string | undefined): boolean {
  return str === undefined || str === null || str.match(/^ *$/) !== null;
}
