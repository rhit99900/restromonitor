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
    "expected_close_tim" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Restaurants" ("address", "brand", "city", "created_at", "expected_close_tim", "expected_open_time", "id", "name") SELECT "address", "brand", "city", "created_at", "expected_close_tim", "expected_open_time", "id", "name" FROM "Restaurants";
DROP TABLE "Restaurants";
ALTER TABLE "new_Restaurants" RENAME TO "Restaurants";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
