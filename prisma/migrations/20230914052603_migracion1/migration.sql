-- AlterTable
ALTER TABLE "User" ADD COLUMN "password" TEXT;

-- CreateTable
CREATE TABLE "Factura" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flecha" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Factura_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT,
    "cantidad" INTEGER,
    "categoria" TEXT,
    "descripcion" TEXT,
    "precio" INTEGER,
    "facturaId" TEXT NOT NULL,
    CONSTRAINT "Producto_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "src" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,
    CONSTRAINT "Image_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AllProducto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT,
    "cantidad" INTEGER,
    "categoria" TEXT,
    "descripcion" TEXT,
    "precio" INTEGER,
    "facturaId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ImageProducto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "src" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,
    CONSTRAINT "ImageProducto_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "AllProducto" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
