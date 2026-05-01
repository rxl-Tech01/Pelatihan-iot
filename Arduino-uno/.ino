#include "DHT.h"

// --- Peta Alamat (Pin) ---
const int ledSistem = 13; // Sekarang Merah & Hijau gabung di sini
const int buzzer = 14;
const int pinDHT = 4;
const int pinGas = 34;
const int pinPiezo = 32;
const int pinADXL_X = 33;
const int pinADXL_Y = 35;
const int pinADXL_Z = 36; 

#define DHTTYPE DHT22
DHT dht(pinDHT, DHTTYPE);

void setup() {
  Serial.begin(115200);
  
  pinMode(ledSistem, OUTPUT); // Cukup satu pin untuk kedua LED
  pinMode(buzzer, OUTPUT);
  
  dht.begin();

  Serial.println("--- SISTEM AKTIF ---");
  
  // Tes Awal
  digitalWrite(buzzer, HIGH);
  digitalWrite(ledSistem, HIGH); // Dua-duanya bakal nyala bareng
  delay(500);
  digitalWrite(buzzer, LOW);
  digitalWrite(ledSistem, LOW);
}

void loop() {
  float suhu = dht.readTemperature();
  int nilaiGas = analogRead(pinGas);
  int nilaiGetar = analogRead(pinPiezo);
  int x = analogRead(pinADXL_X);
  int y = analogRead(pinADXL_Y);
  int z = analogRead(pinADXL_Z);

  // LOGIKA ALARM
  if (nilaiGetar > 300 || nilaiGas > 3000) {
    digitalWrite(buzzer, HIGH);
    // Bikin LED Kedip Cepat pas bahaya
    digitalWrite(ledSistem, HIGH);
    delay(100);
    digitalWrite(ledSistem, LOW);
    delay(100);
    Serial.println("!!! BAHAYA TERDETEKSI !!!");
  } else {
    digitalWrite(buzzer, LOW);
    // LED Nyala Anteng pas aman
    digitalWrite(ledSistem, HIGH); 
  }

  // Serial Monitor Output
  Serial.print("GAS: "); Serial.print(nilaiGas);
  Serial.print(" | VIB: "); Serial.print(nilaiGetar);
  Serial.print(" | Temp: "); 
  if (isnan(suhu)) Serial.print("Error DHT"); else Serial.print(suhu);
  Serial.print(" | ADXL: "); Serial.print(x); Serial.print(","); Serial.print(y); Serial.println(z);

  delay(200);
}