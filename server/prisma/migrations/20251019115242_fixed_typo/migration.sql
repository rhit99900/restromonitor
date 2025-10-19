/*
  Warnings:

  - You are about to drop the column `expected_close_tim` on the `Restaurants` table. All the data in the column will be lost.
  - Added the required column `expected_close_time` to the `Restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Restaurants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "expected_open_time" TEXT NOT NULL,
    "expected_close_time" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Restaurants" ("address", "brand", "city", "created_at", "expected_open_time", "id", "name") SELECT "address", "brand", "city", "created_at", "expected_open_time", "id", "name" FROM "Restaurants";
DROP TABLE "Restaurants";
ALTER TABLE "new_Restaurants" RENAME TO "Restaurants";
CREATE UNIQUE INDEX "Restaurants_name_key" ON "Restaurants"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
