module.exports = {
    name: 'jadwal',
    description: 'pengingat jadwal solat jumat',
    execute(msg, args, client) {
        let d = new Date();
        let tanggal = d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
        let hari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
        let alasan = ['Sholat di Junkertown', 'Sholat di deket tower dire', 'Farming manta style', 'Sabung Ayam', 'tidoer']
        let random = Math.floor(Math.random() * alasan.length);
        if (d.getDay() == 5) {
            msg.reply(`Absen yang ga sholat Jumat ${tanggal}\n1. Nama - Alasan\n\ncontoh :\n Ojan - ${alasan[random]}`)
        } else {
            msg.reply(`Masih hari ${hari[d.getDay()]} goblok`)
        }
    }
}