import Jimp from 'jimp'

/*
B20
G41
J14
O13
Y34
AB26
AC2
AG24
AD44
*/
Jimp.read('./res/sunuke-array.png', (err, img) => {
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 47; j++) {
      console.log(
        `${i}`.padStart(2, ' '),
        `${j}`.padStart(2, ' '),
        Jimp.intToRGBA(img.getPixelColor(66 + i * 38, 34 + j * 17))
      )
    }
  }
  // 38 x 17
})
