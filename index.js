import ts from 'typescript';

const sourceCode = 'export const id = <T,>(id: T): T => id';
const sourceFile = ts.createSourceFile(
  'index.tsx',
  sourceCode,
  ts.ScriptTarget.Latest,
  undefined,
  ts.ScriptKind.TSX
);

const printer = ts.createPrinter();
const printed = printer.printFile(sourceFile);

console.log('Original:');
console.log(sourceCode); // 'export const id = <T,>(id: T): T => id;'
console.log('Printed:');
console.log(printed); // 'export const id = <T>(id: T): T => id;'
