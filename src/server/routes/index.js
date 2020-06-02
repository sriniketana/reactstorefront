const { Router } = require('express');
const router = Router();
const axios = require('axios');

const microServiceURL =
  'http://web-bluecompute.apps.mfstorefront.os.fyre.ibm.com';

router.get('/foo', (req, res) => res.send('Hello world1234!'));

router.get('/storecatalog', (req, res) => {
  console.log(`${microServiceURL}/catalog`);
  axios
    .get(`${microServiceURL}/catalog`)
    .then(catalog => {
      console.log(catalog.data);
      res.send(catalog.data);
    })
    .catch(err => {
      res.status(500);
      res.send([]);
    });
});

module.exports = router;

if (module.hot) {
  module.hot.accept();
}
