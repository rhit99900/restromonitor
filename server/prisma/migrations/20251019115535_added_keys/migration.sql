/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Platform` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `restaurant_platform_uri` to the `RestaurantPlatform` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RestaurantPlatform" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "restaurant_id" INTEGER NOT NULL,
    "platform_id" INTEGER NOT NULL,
    "restaurant_platform_uri" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_RestaurantPlatform" ("created_at", "id", "platform_id", "restaurant_id") SELECT "created_at", "id", "platform_id", "restaurant_id" FROM "RestaurantPlatform";
DROP TABLE "RestaurantPlatform";
ALTER TABLE "new_RestaurantPlatform" RENAME TO "RestaurantPlatform";
CREATE UNIQUE INDEX "RestaurantPlatform_restaurant_id_platform_id_key" ON "RestaurantPlatform"("restaurant_id", "platform_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "Platform"("name");
