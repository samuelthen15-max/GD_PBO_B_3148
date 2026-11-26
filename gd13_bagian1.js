class Karyawan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log(`Karyawan: ${this.nama}`);
    }
}

class KaryawanTetap extends Karyawan {
    hitungLembur(jam) {
        const upah = jam * 50000;
        console.log(
            `${this.nama} lembur ${jam} jam, upah Rp ${upah}.`
        );
    }
}

class KaryawanMagang extends Karyawan {
    terimaUangSaku(nominal) {
        console.log(
            `${this.nama} menerima uang saku Rp ${nominal}.`
        );
    }
}

class Programmer extends KaryawanTetap {}

class Magang extends KaryawanMagang {}

class Desainer extends KaryawanTetap {}

function prosesLembur(daftar) {
    daftar.forEach(karyawan => karyawan.hitungLembur(3));
}

function berikanUangSaku(daftar) {
    daftar.forEach(karyawan =>
        karyawan.terimaUangSaku(1500000)
    );
}

const budi = new Programmer("Budi_3148");
const rina = new Magang("Rina_3148");
const sari = new Desainer("Sari_3148");

budi.info();
rina.info();
sari.info();

prosesLembur([budi, sari]);
berikanUangSaku([rina]);