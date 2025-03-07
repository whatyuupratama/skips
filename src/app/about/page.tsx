import React from 'react';
import Navbar from '@/components/navbar';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
const About = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen flex justify-center items-center bg-[#9f033c]'>
        <div className='text-white w-2/3 flex h-auto justify-start items-start border p-5 rounded-lg flex-col gap-4 '>
          <span className='text-5xl font-bold'> Hai 🦷</span>

          <div className='flex flex-col gap-2 justify-start font-bold'>
            <span>Nama : Wahyu Pratama</span>
            <span>NIM : 22201190</span>
            <span>Fakultas: Tehnik Informatika </span>
          </div>
          <span>
            <b>Tema Skipsi: </b>Implementasi Metode Random Forest Classifier
            untuk Memprediksi Risiko Gigi Berlubang Berdasarkan Gejala Klinis
            dan Kebiasaan Perawatan Gigi pada Anak Usia 6 Bulan - 3 Tahun
          </span>
          <span>
            <b>Kuantitatif :</b> (dengan elemen kualitatif) - Pendekatan ini
            dominan kuantitatif, karena meskipun ada data kualitatif (gejala
            yang dilaporkan), data tersebut seringkali diubah menjadi bentuk
            numerik (misalnya, skala Likert untuk mengukur tingkat nyeri) atau
            di-encode (ya/tidak). Random Forest Classifier digunakan untuk
            menganalisis hubungan antara berbagai variabel (termasuk data
            numerik dan data kualitatif yang di-encode) untuk memprediksi risiko
            gigi berlubang. Fokusnya adalah pada membangun model prediksi
            berdasarkan data yang dapat diukur atau dikuantifikasi.
          </span>
          <span className='flex justify-end w-full'>
            {' '}
            <Link href='/gigi-detection' passHref>
              <ShimmerButton
                className='text-sm'
                background='#A0153E'
                shimmerSize='0.1em'
              >
                Check Sekarang
              </ShimmerButton>
            </Link>
          </span>
        </div>
      </div>
      ;
    </>
  );
};
export default About;
