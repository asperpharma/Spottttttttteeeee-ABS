import { Link, useLocation } from "react-router-dom";
import { CATEGORIES } from "@/lib/categoryMapping";
import { cn } from "@/lib/utils";

const NAV_ITEMS = Object.values(CATEGORIES).map((cat) => ({
  label: cat.title,
  slug: cat.slug,
  icon:
    cat.slug === "skin-care"
      ? "🧴"
      : cat.slug === "hair-care"
        ? "💇"
        : cat.slug === "make-up"
          ? "💄"
          : cat.slug === "body-care"
            ? "🧼"
            : cat.slug === "fragrances"
              ? "🌸"
              : "🔧",
}));

export function CategoryNavBar() {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Product categories"
      className="border-b border-border/40 bg-background/95 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
          {NAV_ITEMS.map((item) => {
            const href = `/collections/${item.slug}`;
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={item.slug}
                to={href}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium font-body transition-all duration-200",
                  "border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border/60 hover:border-accent hover:text-foreground hover:bg-accent/10"
                )}
              >
                <span className="text-base leading-none">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
