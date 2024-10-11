"use client";
import { useState } from "react";

export default function Home() {
  // Variabel untuk menyimpan input pengguna dan hasil perhitungan
  const [number, setNumber] = useState("");
  const [results, setResults] = useState([]);

  // Fungsi untuk memeriksa apakah angka ganjil atau genap
  const checkOddEven = (num) => {
    if (num % 2 === 0) {
      return "Genap";
    } else {
      return "Ganjil";
    }
  };

  // Fungsi untuk menangani input dari pengguna
  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  // Fungsi untuk menghitung ganjil/genap dan menampilkan hasilnya beberapa kali
  const handleSubmit = () => {
    const num = parseInt(number);
    let tempResults = [];

    // Perulangan for untuk menambahkan hasil ke array results
    for (let i = 0; i < 5; i++) {
      tempResults.push(`Angka ${num} adalah ${checkOddEven(num)} (hasil ke-${i + 1})`);
    }

    setResults(tempResults);
  };

  return (
    <div style={styles.container}>
      <h1>Periksa Angka Ganjil atau Genap</h1>

      {/* Input */}
      <input
        type="number"
        placeholder="Masukkan angka"
        value={number}
        onChange={handleInputChange}
        style={styles.input}
      />

      {/* Tombol untuk menghitung */}
      <button onClick={handleSubmit} style={styles.button}>
        Cek Ganjil atau Genap
      </button>

      {/* Output */}
      <div>
        {results.length > 0 &&
          results.map((result, index) => (
            <p key={index} style={styles.result}>
              {result}
            </p>
          ))}
      </div>
    </div>
  );
}

// Gaya CSS sederhana menggunakan objek JavaScript
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  result: {
    fontSize: "18px",
    marginTop: "10px",
  },
};
