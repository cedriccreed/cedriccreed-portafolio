import sharp from "sharp"
import { rename } from "fs/promises"

const images = ["api-rest.png", "biogps-page-web.png", "personajes-biblicos.png", "foto-cedric-lavin.png"]

for (const img of images) {
  const input = `public/${img}`
  const temp = `public/optimized-${img}`
  await sharp(input).resize(1200, null, { withoutEnlargement: true }).png({ quality: 80 }).toFile(temp)
  await rename(temp, input)
  console.log(`Optimized: ${img}`)
}
