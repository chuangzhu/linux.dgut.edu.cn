We uses [Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign) icons in this site. But instead of loading 5000+ icons, we only uses a few of them. So we build the webfont ourselves to reduce the size.

## Adding new icons

1. Link icons from `/node_modules/@mdi/svg/svg/` to `./svg/`.

   ```
   cd svg/
   ln -s ../../../node_modules/@mdi/svg/svg/presentation-play.svg ./
   cd ..
   ```
2. Copy the corresponding meta from `/node_modules/@mdi/svg/svg/meta.json` to `./meta.json`.
3. Change the version in `./font-build.json` (so browsers will reload the cache):

   ```diff
    "version": {
        "major": 5,
        "minor": 1,
   -    "patch": 450001
   +    "patch": 450002
    }
   ```
4. Build the font:

   ```sh
   node ../../node_modules/.bin/font-build --dist ../../public/assets/mdi
   ```