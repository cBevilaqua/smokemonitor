## Smoke Monitor

### Description
Simple realtime smoke monitor using Arduino, MQ2 sensor and Node.js

### Materials
- Arduino UNO
- 3 wires
- MQ2 Sensor

### Hardware instructions
- Upload the StandardFirmataPlus sample to your Arduino
- Wiring:
	- MQ2 VCC - Arduino 5v
	- MQ2 GND - Arduino GND
	- MQ2 A0 - Arduino A0

### Installing packages
``` npm install ```

### Running
``` npm run start ```

### Watching data
Open your browser at http://localhost:3000 (or any other specified port in case you choose another)
