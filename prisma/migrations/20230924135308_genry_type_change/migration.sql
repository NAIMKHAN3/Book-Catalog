/*
  Warnings:

  - Changed the type of `genre` on the `Book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "genre",
ADD COLUMN     "genre" TEXT NOT NULL,
ALTER COLUMN "publicationDate" DROP DEFAULT,
ALTER COLUMN "publicationDate" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderedBooks" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
