// 'use client';
// import React, { useState } from 'react';
// import { Ripple } from '@/components/magicui/ripple';
// import Link from 'next/link';
// import Button from '@/components/fragments/Button';
// import { FaArrowLeftLong } from 'react-icons/fa6';
// import { IoIosArrowBack } from 'react-icons/io';

// const GigiDetection = () => {
//   const [showInput, setShowInput] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({
//     question1: null,
//     question2: null,
//     question3: null,
//     question4: null,
//     question5: null,
//   });
//   const [showResult, setShowResult] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const handleButtonClick = () => {
//     setShowInput(true);
//     setCurrentQuestion(1);
//   };

//   const handleAnswer = (question: string, answer: 'yes' | 'no') => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [question]: answer,
//     }));
//   };

//   const handleNext = () => {
//     if (!isCurrentQuestionAnswered()) {
//       // Jika pertanyaan belum dijawab, tampilkan alert
//       setShowAlert(true);
//       return; // Hentikan proses selanjutnya jika alert ditampilkan
//     }

//     if (currentQuestion < 5) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion === 1) {
//       setShowInput(false);
//       setCurrentQuestion(0);
//     } else if (currentQuestion > 1) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const isCurrentQuestionAnswered = () => {
//     switch (currentQuestion) {
//       case 1:
//         return answers.question1 !== null;
//       case 2:
//         return answers.question2 !== null;
//       case 3:
//         return answers.question3 !== null;
//       case 4:
//         return answers.question4 !== null;
//       case 5:
//         return answers.question5 !== null;
//       default:
//         return false;
//     }
//   };

//   const calculateRisk = () => {
//     let riskScore = 0;

//     if (answers.question1 === 'yes') riskScore++;
//     if (answers.question2 === 'no') riskScore++;
//     if (answers.question3 === 'no') riskScore++;
//     if (answers.question4 === 'no') riskScore++;
//     if (answers.question5 === 'no') riskScore++;

//     if (riskScore >= 3) {
//       return 'Anak Anda terindikasi risiko tinggi gigi berlubang.  Konsultasikan dengan dokter gigi segera.';
//     } else {
//       return 'Anak Anda terindikasi risiko rendah gigi berlubang.  Tetap jaga kebersihan gigi dan mulut yaa.';
//     }
//   };

//   const closeAlert = () => {
//     setShowAlert(false);
//   };

//   return (
//     <div className='w-screen h-screen bg-[#96063b] flex justify-center items-center'>
//       <div className='w-2/3 h-[55vh] bg-[#9f033c] shadow-2xl rounded-xl overflow-hidden relative flex items-center justify-center px-16 py-10'>
//         <Ripple />

//         {/* Alert Component */}
//         {showAlert && (
//           <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9f033c] border text-white rounded-md shadow-lg p-6 z-50'>
//             <p className='text-2xl font-bold '>Waduhh! 👶🏻</p>
//             <p className='text-sm '>
//               Sepertinya anda belum memilih jawaban untuk pertanyaan ini.
//             </p>
//             <div className='mt-4 flex justify-end'>
//               <button
//                 onClick={closeAlert}
//                 className='px-4 py-1 cursor-pointer border border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white'
//               >
//                 Oke
//               </button>
//             </div>
//           </div>
//         )}

//         <div className='relative z-10 flex flex-col gap-6 text-white text-center md:text-left'>
//           <Link href='/' passHref>
//             <span className='text-lg font-semibold hover:text-gray-200 hover:underline flex items-center gap-2'>
//               <FaArrowLeftLong /> Halaman utama
//             </span>
//           </Link>
//           {/* Tampilan Awal - Menampilkan tombol Mulai Deteksi */}
//           {currentQuestion === 0 && !showInput && (
//             <>
//               <span className='text-5xl font-extrabold w-1/2'>
//                 Yuk, Cegah Gigi Berlubang! 🦷
//               </span>
//               <span className='text-lg font-semibold'>
//                 Menjaga kesehatan gigi adalah bagian penting dari kesehatan
//                 secara keseluruhan. Yuk, deteksi sejak dini untuk mencegah gigi
//                 berlubang pada si kecil. Dapatkan tips terbaik untuk menjaga
//                 kesehatan gigi dan mulut buah hati Anda.
//               </span>
//               <div className='mt-6'>
//                 <Button
//                   value='Mulai Deteksi'
//                   variant='white'
//                   className='px-10 py-3 rounded-lg font-semibold hover:border-white'
//                   onClick={handleButtonClick}
//                 />
//               </div>
//             </>
//           )}

//           {showInput && !showResult && currentQuestion > 0 && (
//             <div className='mt-6'>
//               {currentQuestion === 1 && (
//                 <div className='question'>
//                   <div className='flex flex-col gap-3'>
//                     <span className='font-bold text-5xl'>
//                       Anak anda suka makanan manis?
//                     </span>
//                     <div className='mt-2 flex justify-start gap-4'>
//                       <button
//                         onClick={() => handleAnswer('question1', 'yes')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question1 === 'yes'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Iya
//                       </button>
//                       <button
//                         onClick={() => handleAnswer('question1', 'no')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question1 === 'no'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Tidak
//                       </button>
//                     </div>
//                     <span className='text-[12px] text-zinc-200 font-semibold'>
//                       Pilih jawaban yang paling sesuai untuk anak Anda.
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {currentQuestion === 2 && (
//                 <div className='question mt-6'>
//                   <div className='flex flex-col gap-3'>
//                     <span className='font-bold text-5xl'>
//                       Anak anda sering sikat gigi pada malam hari?
//                     </span>
//                     <div className='mt-2 flex justify-start gap-4'>
//                       <button
//                         onClick={() => handleAnswer('question2', 'yes')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question2 === 'yes'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Iya
//                       </button>
//                       <button
//                         onClick={() => handleAnswer('question2', 'no')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question2 === 'no'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Tidak
//                       </button>
//                     </div>
//                     <span className='text-[12px] text-zinc-200 font-semibold'>
//                       Pilih jawaban yang paling sesuai untuk anak Anda.
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {currentQuestion === 3 && (
//                 <div className='question mt-6'>
//                   <div className='flex flex-col gap-3'>
//                     <span className='font-bold text-5xl'>
//                       Anak anda menghindari konsumsi makanan atau minuman manis
//                       di malam hari?
//                     </span>
//                     <div className='mt-2 flex justify-start gap-4'>
//                       <button
//                         onClick={() => handleAnswer('question3', 'yes')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question3 === 'yes'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Iya
//                       </button>
//                       <button
//                         onClick={() => handleAnswer('question3', 'no')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question3 === 'no'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Tidak
//                       </button>
//                     </div>
//                     <span className='text-[12px] text-zinc-200 font-semibold'>
//                       Pilih jawaban yang paling sesuai untuk anak Anda.
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {currentQuestion === 4 && (
//                 <div className='question mt-6'>
//                   <div className='flex flex-col gap-3'>
//                     <span className='font-bold text-5xl'>
//                       Apakah anak Anda rutin memeriksakan gigi ke dokter gigi
//                       setiap 6 bulan sekali?
//                     </span>
//                     <div className='mt-2 flex justify-start gap-4'>
//                       <button
//                         onClick={() => handleAnswer('question4', 'yes')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question4 === 'yes'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Iya
//                       </button>
//                       <button
//                         onClick={() => handleAnswer('question4', 'no')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question4 === 'no'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Tidak
//                       </button>
//                     </div>
//                     <span className='text-[12px] text-zinc-200 font-semibold'>
//                       Pilih jawaban yang paling sesuai untuk anak Anda.
//                     </span>
//                   </div>
//                 </div>
//               )}

//               {currentQuestion === 5 && (
//                 <div className='question mt-6'>
//                   <div className='flex flex-col gap-3'>
//                     <span className='font-bold text-5xl'>
//                       Apakah Anda membantu anak Anda menyikat gigi sampai mereka
//                       berusia minimal 7 tahun?
//                     </span>
//                     <div className='mt-2 flex justify-start gap-4'>
//                       <button
//                         onClick={() => handleAnswer('question5', 'yes')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question5 === 'yes'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Iya
//                       </button>
//                       <button
//                         onClick={() => handleAnswer('question5', 'no')}
//                         className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
//                           answers.question5 === 'no'
//                             ? 'bg-[#A0153E] border text-white'
//                             : 'bg-white hover:bg-gray-200'
//                         }`}
//                       >
//                         Tidak
//                       </button>
//                     </div>
//                     <span className='text-[12px] text-zinc-200 font-semibold'>
//                       Pilih jawaban yang paling sesuai untuk anak Anda.
//                     </span>
//                   </div>
//                 </div>
//               )}

//               <div className='mt-6 flex justify-between'>
//                 <button
//                   onClick={handlePrevious}
//                   disabled={currentQuestion === 0}
//                   className='px-6 py-3 text-white rounded-sm border cursor-pointer hover:bg-white hover:border-white hover:text-[#9f033c] transition duration-300 flex items-center gap-2'
//                 >
//                   <IoIosArrowBack /> Sebelumnya
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className={`px-6 py-2 bg-white text-black rounded-lg transition duration-300 ${
//                     isCurrentQuestionAnswered()
//                       ? 'cursor-pointer hover:bg-gray-200'
//                       : 'bg-gray-400 cursor-not-allowed'
//                   }`}
//                 >
//                   {currentQuestion === 5 ? 'Lihat Hasil' : 'Selanjutnya'}
//                 </button>
//               </div>
//             </div>
//           )}

//           {showResult && (
//             <div className='mt-6'>
//               <span className='font-bold text-7xl'>Hasil Deteksi 🤱</span>
//               <p className='mt-4 text-lg'>{calculateRisk()}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GigiDetection;'use client';
'use client';
import React, { useState } from 'react';
import { Ripple } from '@/components/magicui/ripple';
import Link from 'next/link';
import Button from '@/components/fragments/Button';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
import { CSSProperties } from 'react'; // Import CSSProperties

const GigiDetection = () => {
  const [showInput, setShowInput] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  });
  const [showResult, setShowResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowInput(true);
    setCurrentQuestion(1);
  };

  const handleAnswer = (question: string, answer: 'yes' | 'no') => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleNext = () => {
    if (!isCurrentQuestionAnswered()) {
      setShowAlert(true);
      return;
    }

    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 1) {
      setShowInput(false);
      setCurrentQuestion(0);
    } else if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isCurrentQuestionAnswered = () => {
    switch (currentQuestion) {
      case 1:
        return answers.question1 !== null;
      case 2:
        return answers.question2 !== null;
      case 3:
        return answers.question3 !== null;
      case 4:
        return answers.question4 !== null;
      case 5:
        return answers.question5 !== null;
      default:
        return false;
    }
  };

  const calculateRisk = () => {
    let riskScore = 0;

    if (answers.question1 === 'yes') riskScore++;
    if (answers.question2 === 'no') riskScore++;
    if (answers.question3 === 'no') riskScore++;
    if (answers.question4 === 'no') riskScore++;
    if (answers.question5 === 'no') riskScore++;

    if (riskScore >= 3) {
      return 'Anak Anda terindikasi risiko tinggi gigi berlubang. Konsultasikan dengan dokter gigi segera.';
    } else {
      return 'Anak Anda terindikasi risiko rendah gigi berlubang. Tetap jaga kebersihan gigi dan mulut yaa.';
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  // Fungsi untuk menghitung persentase progress
  const calculateProgress = () => {
    return (currentQuestion / 5) * 100;
  };

  // Define the type for the style object
  const questionStyle: CSSProperties = {
    height: '250px', // Sesuaikan tinggi sesuai kebutuhan
    width: '100%', // Lebar mengisi container
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start', // Untuk memusatkan konten vertikal
    alignItems: 'center', // Untuk memusatkan konten horizontal
  };

  return (
    <div className='w-screen h-screen bg-[#96063b] flex justify-center items-center'>
      <div className='w-2/3 h-[55vh] bg-[#9f033c] shadow-2xl rounded-xl overflow-hidden relative flex items-center justify-center px-16 py-10'>
        <Ripple />

        {showAlert && (
          <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9f033c] border text-white rounded-md shadow-lg p-6 z-50'>
            <p className='text-2xl font-bold '>Waduhh! 👶🏻</p>
            <p className='text-sm '>
              Sepertinya anda belum memilih jawaban untuk pertanyaan ini.
            </p>
            <div className='mt-4 flex justify-end'>
              <button
                onClick={closeAlert}
                className='px-4 py-1 cursor-pointer border border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white'
              >
                Oke
              </button>
            </div>
          </div>
        )}

        <div className='relative z-10 flex flex-col gap-6 text-white text-center md:text-left'>
          <Link href='/' passHref>
            <span className='text-lg font-semibold hover:text-gray-200 hover:underline flex items-center gap-2'>
              <FaArrowLeftLong /> Halaman utama
            </span>
          </Link>

          {currentQuestion === 0 && !showInput && (
            <>
              <span className='text-5xl font-extrabold w-1/2'>
                Yuk, Cegah Gigi Berlubang! 🦷
              </span>
              <span className='text-lg font-semibold'>
                Menjaga kesehatan gigi adalah bagian penting dari kesehatan
                secara keseluruhan. Yuk, deteksi sejak dini untuk mencegah gigi
                berlubang pada si kecil. Dapatkan tips terbaik untuk menjaga
                kesehatan gigi dan mulut buah hati Anda.
              </span>
              <div className='mt-6'>
                <Button
                  value='Mulai Deteksi'
                  variant='white'
                  className='px-10 py-3 rounded-lg font-semibold hover:border-white'
                  onClick={handleButtonClick}
                />
              </div>
            </>
          )}

          {showInput && !showResult && currentQuestion > 0 && (
            <div className='mt-6'>
              {/* Container dengan tinggi tetap untuk pertanyaan */}
              <div style={questionStyle}>
                {currentQuestion === 1 && (
                  <div className='question '>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-5xl'>
                        Anak anda suka makan makanan sembarangan saat disekolah?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question1', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question1 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question1', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question1 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <span className='text-[12px] text-zinc-200 font-semibold'>
                        Pilih jawaban yang paling sesuai untuk anak Anda.
                      </span>
                    </div>
                  </div>
                )}

                {currentQuestion === 2 && (
                  <div className='question'>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-5xl'>
                        Anak anda sering sikat gigi pada malam hari?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question2', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question2 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question2', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question2 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <span className='text-[12px] text-zinc-200 font-semibold'>
                        Pilih jawaban yang paling sesuai untuk anak Anda.
                      </span>
                    </div>
                  </div>
                )}

                {currentQuestion === 3 && (
                  <div className='question'>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-5xl'>
                        Anak anda menghindari konsumsi makanan atau minuman
                        manis di malam hari?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question3', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question3 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question3', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question3 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <span className='text-[12px] text-zinc-200 font-semibold'>
                        Pilih jawaban yang paling sesuai untuk anak Anda.
                      </span>
                    </div>
                  </div>
                )}

                {currentQuestion === 4 && (
                  <div className='question'>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-5xl'>
                        Apakah anak Anda rutin memeriksakan gigi ke dokter gigi
                        setiap 6 bulan sekali?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question4', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question4 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question4', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question4 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <span className='text-[12px] text-zinc-200 font-semibold'>
                        Pilih jawaban yang paling sesuai untuk anak Anda.
                      </span>
                    </div>
                  </div>
                )}

                {currentQuestion === 5 && (
                  <div className='question'>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-5xl'>
                        Apakah Anda membantu anak Anda menyikat gigi sampai
                        mereka berusia minimal 7 tahun?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question5', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question5 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question5', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question5 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <span className='text-[12px] text-zinc-200 font-semibold'>
                        Pilih jawaban yang paling sesuai untuk anak Anda.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className='mt-4'>
                <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                  <div
                    className='bg-zinc-500 h-2.5 rounded-full'
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
                <span className='text-sm mt-2'>
                  Pertanyaan {currentQuestion} dari 5
                </span>
              </div>

              <div className='mt-6 flex justify-between'>
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className='px-6 py-3 text-white rounded-sm border cursor-pointer hover:bg-white hover:border-white hover:text-[#9f033c] transition duration-300 flex items-center gap-2'
                >
                  <IoIosArrowBack /> Sebelumnya
                </button>
                <button
                  onClick={handleNext}
                  className={`px-6 py-2 bg-white text-black rounded-lg transition duration-300 ${
                    isCurrentQuestionAnswered()
                      ? 'cursor-pointer hover:bg-gray-200'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {currentQuestion === 5 ? 'Lihat Hasil' : 'Selanjutnya'}
                </button>
              </div>
            </div>
          )}

          {showResult && (
            <div className='mt-6'>
              <span className='font-bold text-7xl'>Hasil Deteksi 🤱</span>
              <p className='mt-4 text-lg'>{calculateRisk()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GigiDetection;
