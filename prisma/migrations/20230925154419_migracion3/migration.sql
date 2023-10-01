/*
  Warnings:

  - You are about to drop the column `facturaId` on the `AllProducto` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AllProducto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT,
    "cantidad" INTEGER,
    "categoria" TEXT,
    "descripcion" TEXT,
    "precio" INTEGER
);
INSERT INTO "new_AllProducto" ("cantidad", "categoria", "descripcion", "id", "nombre", "precio") SELECT "cantidad", "categoria", "descripcion", "id", "nombre", "precio" FROM "AllProducto";
DROP TABLE "AllProducto";
ALTER TABLE "new_AllProducto" RENAME TO "AllProducto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
