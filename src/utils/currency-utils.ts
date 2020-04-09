import accounts from "@/data/accounts.json";

const preferredCurrencyMap = accounts.reduce(
  (map: Record<string, string>, obj) => {
    map[obj.value] = obj.currency;
    return map;
  },
  {}
);

export function preferredCurrency(account: string): string {
  const ret = preferredCurrencyMap[account];
  if (ret) {
    return ret;
  }

  return "SGD";
}
