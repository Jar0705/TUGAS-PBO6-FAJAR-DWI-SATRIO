// Model Nilai
class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

// View Nilai
class NilaiView {
    render(rataRata) {
        return `Rata-rata nilai: ${rataRata}`;
    }

    renderError(error) {
        return `Error: ${error}`;
    }
}

// Controller Nilai
class NilaiController {
    constructor(Model, View) {
        this.Model = Model;
        this.View = View;
    }

    tampilkanRataRata(nilai) {
        try {
            const modelNilai = new this.Model(nilai);
            const rataRata = modelNilai.hitungRataRata();
            console.log(new this.View().render(rataRata));
        } catch (error) {
            console.log(new this.View().renderError(error.message));
        }
    }
}

// Fungsi Pembagian
function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

const nilaiController = new NilaiController(Nilai, NilaiView);

nilaiController.tampilkanRataRata([40, 75, 98]);
nilaiController.tampilkanRataRata([]);

console.log(bagi(2, 10));
console.log(bagi(10, 0));
