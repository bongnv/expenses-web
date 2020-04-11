import accounts from "@/data/accounts.json";

/* eslint-disable @typescript-eslint/no-explicit-any */
const accountMap = accounts.reduce((map: Map<string, any>, obj) => {
  map.set(obj.value, obj);
  return map;
}, new Map<string, any>());
/* eslint-enable @typescript-eslint/no-explicit-any */

export function preferredCurrency(account: string): string {
  const ret = accountMap.get(account);
  if (ret) {
    return ret.currency;
  }

  return "SGD";
}

export function getDisplayName(account: string): string {
  const ret = accountMap.get(account);
  if (ret) {
    return ret.text;
  }

  return "";
}
