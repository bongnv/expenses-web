import accounts from "@/data/accounts.json";

const accountMap = accounts.reduce((map: Record<string, any>, obj) => {
  map[obj.value] = obj;
  return map;
}, {});

export function preferredCurrency(account: string): string {
  const ret = accountMap[account];
  if (ret) {
    return ret.currency;
  }

  return "SGD";
}

export function getDisplayName(account: string): string {
  const ret = accountMap[account];
  if (ret) {
    return ret.text;
  }

  return "";
}
