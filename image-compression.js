import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
 
const files = await imagemin(['images/*.{jpg,png}'], {
	destination: 'dist/images',
	plugins: [
		imageminWebp({quality: 80}),
	]
});

console.log(files)