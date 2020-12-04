// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import * as mqtt from 'mqtt';
import { mqtt_server } from '../../config'

export default (req, res) => {
    var file_path = "./code/" + req.query.file_name;
    console.log(file_path);
    var code = fs.readFileSync(file_path, "utf-8");
    console.log(code);
    var client = mqtt.connect(mqtt_server);
    client.publish('code', code, {qos: 2, retain: true});

    res.status(200).end();
}
