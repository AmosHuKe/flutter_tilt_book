import { Documents } from "../settings/documents.mjs";
import { getTranslations } from "next-intl/server";
export const Routes = [...Documents];
function isRoute(node) {
    return "title" in node && "href" in node;
}
function getAllLinks(node) {
    const pages = [];
    if (isRoute(node) && !node.noLink) {
        pages.push({ title: node.title, href: node.href });
    }
    if (isRoute(node) && node.items) {
        node.items.forEach((subNode) => {
            if (isRoute(subNode)) {
                const temp = { ...subNode, href: `${node.href}${subNode.href}` };
                pages.push(...getAllLinks(temp));
            }
        });
    }
    return pages;
}
export async function translateRoutes(locale, items) {
    return Promise.all(items.map(async (item) => {
        const t = await getTranslations({ locale, namespace: "docs" });
        const newItem = { ...item };
        if ("title" in newItem) {
            newItem.title = t(newItem.title);
        }
        if ("heading" in newItem && newItem.heading) {
            newItem.heading = t(newItem.heading);
        }
        if ("items" in newItem && Array.isArray(newItem.items)) {
            newItem.items = await translateRoutes(locale, newItem.items);
        }
        return newItem;
    }));
}
export const PageRoutes = Routes.map((it) => getAllLinks(it)).flat();
