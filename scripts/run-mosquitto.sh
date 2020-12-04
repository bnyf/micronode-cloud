docker run -d --name=mosquitto --privileged \
-p 1883:1883 -p 9001:9001 \
-v /root/micronode-cloud/mosquitto/config/mosquitto.conf:/mosquitto/config/mosquitto.conf \
-v /root/micronode-cloud/mosquitto/data:/mosquitto/data \
-v /root/micronode-cloud/mosquitto/log:/mosquitto/log \
eclipse-mosquitto
