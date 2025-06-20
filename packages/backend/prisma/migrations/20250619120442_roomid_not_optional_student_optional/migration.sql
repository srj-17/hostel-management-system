/*
  Warnings:

  - Made the column `roomId` on table `Bed` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Bed" DROP CONSTRAINT "Bed_studentId_fkey";

-- AlterTable
ALTER TABLE "Bed" ALTER COLUMN "roomId" SET NOT NULL,
ALTER COLUMN "studentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Bed" ADD CONSTRAINT "Bed_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
