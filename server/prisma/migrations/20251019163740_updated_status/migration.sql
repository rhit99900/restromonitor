-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlatformRestaurantAvailability" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "restaurant_platform_id" INTEGER NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "is_status_true" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "PlatformRestaurantAvailability_restaurant_platform_id_fkey" FOREIGN KEY ("restaurant_platform_id") REFERENCES "RestaurantPlatform" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlatformRestaurantAvailability" ("created_at", "id", "is_available", "restaurant_platform_id", "updated_at") SELECT "created_at", "id", "is_available", "restaurant_platform_id", "updated_at" FROM "PlatformRestaurantAvailability";
DROP TABLE "PlatformRestaurantAvailability";
ALTER TABLE "new_PlatformRestaurantAvailability" RENAME TO "PlatformRestaurantAvailability";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
