/*
  Warnings:

  - A unique constraint covering the columns `[restaurant_platform_id]` on the table `PlatformRestaurantAvailability` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlatformRestaurantAvailability_restaurant_platform_id_key" ON "PlatformRestaurantAvailability"("restaurant_platform_id");
