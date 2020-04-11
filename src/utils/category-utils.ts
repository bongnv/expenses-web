import categories from "@/data/categories.json";

interface CategoryInfo {
  text: string;
  value: string;
  icon?: string;
}

type CategoryMap = Map<string, CategoryInfo>;

function buildCategoryMap(): CategoryMap {
  const ret: CategoryMap = new Map();
  categories.forEach(category => {
    ret.set(category.value, category);
  });

  return ret;
}

const categoriesMap = buildCategoryMap();

export function categoryName(category: string): string {
  const info = categoriesMap.get(category);
  return info ? info.text : "";
}
