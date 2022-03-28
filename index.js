const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const Jimp = require('jimp')

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', require('./routes'))

app.get('/', (req, res) => {
    (async function () {
        try {
          if (!fs.existsSync(process.env.RENDER_DIR + req.query.id + "/" + req.query.path)) {

            // default image
            const image = await Jimp.read(process.env.ROOT_DIR + req.query.path)

            const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE)

            image.print(font, 0, 0, req.query.id)            
            image.write(process.env.RENDER_DIR + req.query.id + "/" + req.query.path)
          }
        } catch(err) {
          console.log(err)
        }        

    })(res.status(200).sendFile(process.env.RENDER_DIR + req.query.id + "/" + req.query.path))
})

app.listen(3000, () => {
    console.log("RenderPics is Online!")
});