/*
  Warnings:

  - Added the required column `category` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Salads', 'Soups', 'Dishes', 'Drinks');

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;
