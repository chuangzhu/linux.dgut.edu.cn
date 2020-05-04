We uses [Templarian/MaterialDesign](https://github.com/Templarian/MaterialDesign) icons in this site. But instead of loading 5000+ icons, we only uses a few of them. So we build the webfont ourselves to reduce the size.

Link the files from `/node_modules/@mdi/svg/svg/` to `./svg/`, then run:

```sh
node ../../node_modules/.bin/font-build --dist ../../public/assets/mdi
```