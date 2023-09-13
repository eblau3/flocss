import imagemin from 'imagemin-keep-folder';
import imageminWebp from "imagemin-webp";
import imageminSvgo from "imagemin-svgo";
 
imagemin(['src/images/**/*'], {
  use: [
    imageminWebp({
      quality: 50
    }),
    imageminSvgo()
  ],
  replaceOutputDir: output => {
    return output.replace(/images\//, '../dist/assets/images/')
  }
});