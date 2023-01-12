// mqtt
import * as mqtt from "mqtt"

// mqtt 사용 라이브러리 문서 : https://www.npmjs.com/package/mqtt
const MQTT = function MQTT(ip, port, options) {
  let clients = {};

  // client -> 생성 시각을 기준으로... 혹은 ping을 기준으로 sort

  // subscribe 혹은 publish 할 때, data json으로 변환

  // ssL

  //MQTT 생성
  const initMQTT = function initMQTT(ip, port, options) {
    const connectURL = `mqtt://${ip}:${port}/`;

    const client = mqtt.connect(connectURL, options);

    return client;
  };

  const mqtt = initMQTT(ip, port, options);


  const publish = function publish(topic, payload, options) {
  }
}

// HTTPS


// ssl


// websocket

