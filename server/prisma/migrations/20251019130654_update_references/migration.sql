/*
  Warnings:

  - You are about to drop the column `platform_id` on the `PlatformRestaurantAvailability` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_id` on the `PlatformRestaurantAvailability` table. All the data in the column will be lost.
  - Added the required column `restaurant_platform_id` to the `PlatformRestaurantAvailability` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlatformRestaurantAvailability" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "restaurant_platform_id" INTEGER NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "PlatformRestaurantAvailability_restaurant_platform_id_fkey" FOREIGN KEY ("restaurant_platform_id") REFERENCES "RestaurantPlatform" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PlatformRestaurantAvailability" ("created_at", "id", "is_available", "updated_at") SELECT "created_at", "id", "is_available", "updated_at" FROM "PlatformRestaurantAvailability";
DROP TABLE "PlatformRestaurantAvailability";
ALTER TABLE "new_PlatformRestaurantAvailability" RENAME TO "PlatformRestaurantAvailability";
CREATE TABLE "new_RestaurantPlatform" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "restaurant_id" INTEGER NOT NULL,
    "platform_id" INTEGER NOT NULL,
    "restaurant_platform_uri" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RestaurantPlatform_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurants" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RestaurantPlatform_platform_id_fkey" FOREIGN KEY ("platform_id") REFERENCES "Platform" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RestaurantPlatform" ("created_at", "id", "platform_id", "restaurant_id", "restaurant_platform_uri") SELECT "created_at", "id", "platform_id", "restaurant_id", "restaurant_platform_uri" FROM "RestaurantPlatform";
DROP TABLE "RestaurantPlatform";
ALTER TABLE "new_RestaurantPlatform" RENAME TO "RestaurantPlatform";
CREATE UNIQUE INDEX "RestaurantPlatform_restaurant_id_platform_id_key" ON "RestaurantPlatform"("restaurant_id", "platform_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
