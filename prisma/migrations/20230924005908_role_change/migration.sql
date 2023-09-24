/*
  Warnings:

  - The values [student] on the enum `StudentRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StudentRole_new" AS ENUM ('admin', 'customer');
ALTER TABLE "Students" ALTER COLUMN "role" TYPE "StudentRole_new" USING ("role"::text::"StudentRole_new");
ALTER TYPE "StudentRole" RENAME TO "StudentRole_old";
ALTER TYPE "StudentRole_new" RENAME TO "StudentRole";
DROP TYPE "StudentRole_old";
COMMIT;
