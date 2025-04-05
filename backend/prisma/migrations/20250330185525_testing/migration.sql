/*
  Warnings:

  - You are about to drop the `Network` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TestHistory" DROP CONSTRAINT "TestHistory_userId_fkey";

-- DropTable
DROP TABLE "Network";

-- DropTable
DROP TABLE "TestHistory";

-- DropTable
DROP TABLE "UserDetails";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationCode" TEXT NOT NULL,
    "codeExpiry" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
