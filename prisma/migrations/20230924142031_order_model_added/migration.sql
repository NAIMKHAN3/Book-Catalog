/*
  Warnings:

  - Changed the type of `orderedBooks` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('pending', 'shipped', 'delivered');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'pending',
DROP COLUMN "orderedBooks",
ADD COLUMN     "orderedBooks" JSONB NOT NULL;
