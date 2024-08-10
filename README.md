# TypeScript bug: printer introduces syntax error in .tsx files

This repository is a reproduction for a
[TypeScript bug](https://github.com/microsoft/TypeScript/issues/59150)

## Reproduction

1. Clone this repository:

   ```bash
   git clone https://github.com/maxpatiiuk/typescript-printer-tsx-syntax-error
   ```

2. Install TypeScript:

   ```bash
   npm install
   ```

3. Run the minimal reproduction:

   ```bash
   node index.js
   ```

See that the original `<T,>` is printed as `<T>`, which causes a syntax error,
and fails to parse in ESBuild.
