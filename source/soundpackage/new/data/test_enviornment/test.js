function sleep(ms) {
  // set up the sleep function
  return new Promise(resolve => setTimeout(resolve, ms));
}
let parsed/* = JSON.parse('{"1":{"approach":{"2500":"some base64 sound","1000":"some base64 sound","500":"some base64 sound","400":"some base64 sound","300":"some base64 sound","200":"some base64 sound","100":"some base64 sound","50":"some base64 sound","40":"some base64 sound","30":"some base64 sound","20":"some base64 sound","10":"some base64 sound"},"warnings":{"flaps":"some base64 sound","gear":"some base64 sound","stall":"some base64 sound","bank_angle":"some base64 sound"}},"2":{"approach":{"2500":"some base64 sound","1000":"some base64 sound","500":"some base64 sound","400":"some base64 sound","300":"some base64 sound","200":"some base64 sound","100":"some base64 sound","50":"some base64 sound","40":"some base64 sound","30":"some base64 sound","20":"some base64 sound","10":"some base64 sound"},"warnings":{"flaps":"some base64 sound","gear":"some base64 sound","stall":"some base64 sound","bank_angle":"some base64 sound"}}}');*/
fetch('https://raw.githubusercontent.com/nicolas377/hosting/master/temp.json')
  .then(function(resp) {
    return resp.json()
  })
  .then(function(data) {
    parsed = data
  })

sleep(100).then(() => {
  aid=1/*geofs.aircraft.instance.id*/
  current_sounds = parsed[aid]
  warning_keys = Object.keys(parsed[aid].warnings)
  gpws_keys = Object.keys(parsed[aid].approach)
});
