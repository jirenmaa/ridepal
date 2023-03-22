const USERNAME = ''
const PASSWORD = ''
const DB_URI = ''
const DB_RULE = ''

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${DB_URI}/?${DB_RULE}`
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

export const config = { uri, options }
