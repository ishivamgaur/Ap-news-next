"use client";
import React, { useState } from "react";
import { BiArrowFromRight } from "react-icons/bi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const ElectionResultPage = () => {
  const [selectedParty, setSelectedParty] = useState(null);
  const data = {
    S04: {
      chartData: [
        [
          "JD(U)",
          "S04",
          1,
          "DHIRENDRA PRATAP SINGH ALIAS RINKU SINGH",
          "#39AC57",
        ],
        ["BJP", "S04", 2, "NAND KISHOR RAM", "#ff944d"],
        ["BJP", "S04", 3, "SANJAY KUMAR PANDEY", "#ff944d"],
        ["BJP", "S04", 4, "RAM SINGH", "#ff944d"],
        ["BJP", "S04", 5, "VINAY BIHARI", "#ff944d"],
        ["BJP", "S04", 6, "NARAYAN PRASAD", "#ff944d"],
        ["INC", "S04", 7, "ABHISHEK RANJAN", "#19AAED"],
        ["INC", "S04", 8, "WASHI AHMAD", "#19AAED"],
        ["JD(U)", "S04", 9, "SAMMRIDH VARMA", "#39AC57"],
        ["BJP", "S04", 10, "PRAMOD KUMAR SINHA", "#ff944d"],
        ["LJPRV", "S04", 11, "RAJESH KUMAR ALIAS BABLU GUPTA", "#A2006D"],
        ["JD(U)", "S04", 12, "VISHAL KUMAR", "#39AC57"],
        ["BJP", "S04", 13, "KRISHNANANDAN PASWAN", "#ff944d"],
        ["LJPRV", "S04", 14, "RAJU TIWARI", "#A2006D"],
        ["JD(U)", "S04", 15, "SHALINI MISHRA", "#39AC57"],
        ["BJP", "S04", 16, "SACHINDRA PRASAD SINGH", "#ff944d"],
        ["BJP", "S04", 17, "SHYAM BABU PRASAD YADAV", "#ff944d"],
        ["BJP", "S04", 18, "RANA RANDHIR", "#ff944d"],
        ["RJD", "S04", 19, "DEWA GUPTA", "#D6901B"],
        ["RJD", "S04", 20, "LAKSHMI NARAYAN PRASAD YADAV", "#D6901B"],
        ["BJP", "S04", 21, "PAWAN KUMAR JAISWAL", "#ff944d"],
        ["JD(U)", "S04", 22, "SHWETA GUPTA", "#39AC57"],
        ["BJP", "S04", 23, "BAIDYANATH PRASAD", "#ff944d"],
        ["BJP", "S04", 24, "ANIL KUMAR", "#ff944d"],
        ["BJP", "S04", 25, "GAYETRI DEVI", "#ff944d"],
        ["NA", "S04", 26, "NA", "#DDDDDD"],
        ["RJD", "S04", 27, "MUKESH KUMAR YADAV", "#D6901B"],
        ["RJD", "S04", 28, "SUNIL KUMAR", "#D6901B"],
        ["JD(U)", "S04", 29, "PANKAJ KUMAR", "#39AC57"],
        ["LJPRV", "S04", 30, "AMIT KUMAR", "#A2006D"],
        ["JD(U)", "S04", 31, "SUDHANSHU SHEKHAR", "#39AC57"],
        ["BJP", "S04", 32, "VINOD NARAYAN JHA", "#ff944d"],
        ["BJP", "S04", 33, "ARUN SHANKAR PRASAD", "#ff944d"],
        ["JD(U)", "S04", 34, "MINA KUMARI", "#39AC57"],
        ["BJP", "S04", 35, "HARIBHUSHAN THAKUR", "#ff944d"],
        ["RSHTLKM", "S04", 36, "MADHAW ANAND", "#4E9EC1"],
        ["BJP", "S04", 37, "SUJEET KUMAR", "#ff944d"],
        ["BJP", "S04", 38, "NITISH MISHRA", "#ff944d"],
        ["INC", "S04", 39, "SUBODH MANDAL", "#19AAED"],
        ["JD(U)", "S04", 40, "SATISH KUMAR SAH", "#39AC57"],
        ["JD(U)", "S04", 41, "ANIRUDDHA PRASAD YADAV", "#39AC57"],
        ["JD(U)", "S04", 42, "RAMBILASH KAMAT", "#39AC57"],
        ["JD(U)", "S04", 43, "BIJENDRA PRASAD YADAV", "#39AC57"],
        ["JD(U)", "S04", 44, "SONAM RANI", "#39AC57"],
        ["BJP", "S04", 45, "NIRAJ KUMAR SINGH", "#ff944d"],
        ["BJP", "S04", 46, "DEVANTI YADAV", "#ff944d"],
        ["JD(U)", "S04", 47, "ACHMIT RISHIDEV", "#39AC57"],
        ["INC", "S04", 48, "MANOJ BISHWAS", "#19AAED"],
        ["JD(U)", "S04", 49, "SHAGUFTA AZIM", "#39AC57"],
        ["JD(U)", "S04", 50, "MANZAR ALAM", "#39AC57"],
        ["BJP", "S04", 51, "VIJAY KUMAR MANDAL", "#ff944d"],
        ["LJPRV", "S04", 52, "MOHAMMAD KALIMUDDIN", "#A2006D"],
        ["JD(U)", "S04", 53, "GOPAL KUMAR AGARWAL", "#39AC57"],
        ["BJP", "S04", 54, "SWEETY SINGH", "#ff944d"],
        ["AIMIM", "S04", 55, "MD. SARWAR ALAM", "#00664d"],
        ["JD(U)", "S04", 56, "SABA ZAFAR", "#39AC57"],
        ["AIMIM", "S04", 57, "GHULAM SARWAR", "#00664d"],
        ["LJPRV", "S04", 58, "NITESH KUMAR SINGH", "#A2006D"],
        ["INC", "S04", 59, "DEO NARAYAN RAJAK", "#19AAED"],
        ["JD(U)", "S04", 60, "KALADHAR PRASAD MANDAL", "#39AC57"],
        ["JD(U)", "S04", 61, "LESHI SINGH", "#39AC57"],
        ["BJP", "S04", 62, "VIJAY KUMAR KHEMKA", "#ff944d"],
        ["BJP", "S04", 63, "TARKISHORE PRASAD", "#ff944d"],
        ["JD(U)", "S04", 64, "DULAL CHANDRA GOSWAMI", "#39AC57"],
        ["AIMIM", "S04", 65, "MOHAMMAD ADIL HASAN", "#00664d"],
        ["BJP", "S04", 66, "NISHA SINGH", "#ff944d"],
        ["INC", "S04", 67, "MANOHAR PRASAD SINGH", "#19AAED"],
        ["JD(U)", "S04", 68, "BIJAY SINGH", "#39AC57"],
        ["BJP", "S04", 69, "KAVITA DEVI", "#ff944d"],
        ["NA", "S04", 70, "NA", "#DDDDDD"],
        ["JD(U)", "S04", 71, "NIRANJAN KUMAR MEHTA", "#39AC57"],
        ["JD(U)", "S04", 72, "RAMESH RISHI", "#39AC57"],
        ["JD(U)", "S04", 73, "KAVITA KUMARI SAHA", "#39AC57"],
        ["JD(U)", "S04", 74, "RATNESH SADA", "#39AC57"],
        ["BJP", "S04", 75, "ALOK RANJAN", "#ff944d"],
        ["LJPRV", "S04", 76, "SANJAY KUMAR SINGH", "#A2006D"],
        ["RJD", "S04", 77, "GAUTAM KRISHNA", "#D6901B"],
        ["JD(U)", "S04", 78, "ATIREK KUMAR", "#39AC57"],
        ["BJP", "S04", 79, "SUJIT KUMAR", "#ff944d"],
        ["JD(U)", "S04", 80, "BINAY KUMAR CHOUDHARY", "#39AC57"],
        ["BJP", "S04", 81, "MAITHILI THAKUR", "#ff944d"],
        ["RJD", "S04", 82, "LALIT KUMAR YADAV", "#D6901B"],
        ["BJP", "S04", 83, "SANJAY SARAOGI", "#ff944d"],
        ["CPI(M)", "S04", 84, "SHYAM BHARTI", "#FF1D15"],
        ["JD(U)", "S04", 85, "MADAN SAHNI", "#39AC57"],
        ["BJP", "S04", 86, "MURARI MOHAN JHA", "#ff944d"],
        ["BJP", "S04", 87, "JIBESH KUMAR", "#ff944d"],
        ["JD(U)", "S04", 88, "KOMAL SINGH", "#39AC57"],
        ["BJP", "S04", 89, "RAMA NISHAD", "#ff944d"],
        ["JD(U)", "S04", 90, "AJAY KUMAR", "#39AC57"],
        ["LJPRV", "S04", 91, "BABY KUMARI", "#A2006D"],
        ["JD(U)", "S04", 92, "ADITYA KUMAR", "#39AC57"],
        ["BJP", "S04", 93, "KEDAR PD GUPTA", "#ff944d"],
        ["BJP", "S04", 94, "RANJAN KUMAR", "#ff944d"],
        ["JD(U)", "S04", 95, "AJIT KUMAR", "#39AC57"],
        ["BJP", "S04", 96, "ARUN KUMAR SINGH", "#ff944d"],
        ["RJD", "S04", 97, "SHANKAR PRASAD", "#D6901B"],
        ["BJP", "S04", 98, "RAJU KUMAR SINGH", "#ff944d"],
        ["BJP", "S04", 99, "MITHILESH TIWARI", "#ff944d"],
        ["RJD", "S04", 100, "DILIP KUMAR SINGH", "#D6901B"],
        ["BJP", "S04", 101, "SUBHASH SINGH", "#ff944d"],
        ["JD(U)", "S04", 102, "AMRENDRA KUMAR PANDEY", "#39AC57"],
        ["JD(U)", "S04", 103, "SUNIL KUMAR", "#39AC57"],
        ["JD(U)", "S04", 104, "RAMSEWAK SINGH", "#39AC57"],
        ["BJP", "S04", 105, "MANGAL PANDEY", "#ff944d"],
        ["JD(U)", "S04", 106, "BHISM PRATAP SINGH", "#39AC57"],
        ["LJPRV", "S04", 107, "VISHNU DEO PASWAN", "#A2006D"],
        ["JD(U)", "S04", 108, "VIKASH KUMAR SINGH", "#39AC57"],
        ["CPI(ML)(L)", "S04", 109, "AMARNATH YADAV", "#BC08A4"],
        ["RJD", "S04", 110, "ARUN KUMAR GUPTA", "#D6901B"],
        ["BJP", "S04", 111, "DEVESH KANT SINGH", "#ff944d"],
        ["JD(U)", "S04", 112, "HEM NARAYAN SAH", "#39AC57"],
        ["JD(U)", "S04", 113, "MANORANJAN SINGH", "#39AC57"],
        ["JD(U)", "S04", 114, "RANDHIR KUMAR SINGH", "#39AC57"],
        ["BJP", "S04", 115, "KEDAR NATH SINGH", "#ff944d"],
        ["RJD", "S04", 116, "SHAILENDRA PRATAP", "#D6901B"],
        ["RJD", "S04", 117, "JITENDRA KUMAR RAI", "#D6901B"],
        ["BJP", "S04", 118, "CHHOTI KUMARI", "#ff944d"],
        ["LJPRV", "S04", 119, "SIMANT MRINAL", "#A2006D"],
        ["BJP", "S04", 120, "KRISHAN KUMAR MANTOO", "#ff944d"],
        ["JD(U)", "S04", 121, "CHHOTE LAL RAI", "#39AC57"],
        ["NA", "S04", 122, "NA", "#DDDDDD"],
        ["BJP", "S04", 123, "AWADHESH SINGH", "#ff944d"],
        ["BJP", "S04", 124, "SANJAY KUMAR SINGH", "#ff944d"],
        ["JD(U)", "S04", 125, "SIDDHARTH PATEL", "#39AC57"],
        ["LJPRV", "S04", 126, "SANJAY KUMAR SINGH", "#A2006D"],
        ["JD(U)", "S04", 127, "MAHENDRA RAM", "#39AC57"],
        ["RJD", "S04", 128, "TEJASHWI PRASAD YADAV", "#D6901B"],
        ["JD(U)", "S04", 129, "UMESH SINGH KUSHWAHA", "#39AC57"],
        ["BJP", "S04", 130, "LAKHENDRA KUMAR RAUSHAN", "#ff944d"],
        ["JD(U)", "S04", 131, "MAHESHWAR HAZARI", "#39AC57"],
        ["JD(U)", "S04", 132, "MANJARIK MRINAL", "#39AC57"],
        ["JD(U)", "S04", 133, "ASHWAMEDH DEVI", "#39AC57"],
        ["RJD", "S04", 134, "ALOK KUMAR MEHTA", "#D6901B"],
        ["JD(U)", "S04", 135, "VIDYA SAGAR SINGH NISHAD", "#39AC57"],
        ["JD(U)", "S04", 136, "VIJAY KUMAR CHOUDHARY", "#39AC57"],
        ["RJD", "S04", 137, "EJYA YADAV", "#D6901B"],
        ["JD(U)", "S04", 138, "RAVINA KUSHWAHA", "#39AC57"],
        ["BJP", "S04", 139, "BIRENDRA KUMAR", "#ff944d"],
        ["JD(U)", "S04", 140, "RAJ KUMAR RAY", "#39AC57"],
        ["RJD", "S04", 141, "SUSHIL KUMAR", "#D6901B"],
        ["BJP", "S04", 142, "SURENDRA MEHTA", "#ff944d"],
        ["BJP", "S04", 143, "RAJNISH KUMAR", "#ff944d"],
        ["RJD", "S04", 144, "NARENDRA KUMAR SINGH ALIAS BOGO SINGH", "#D6901B"],
        ["RJD", "S04", 145, "SATTANAND SAMBUDDHA ALIAS LALAN JEE", "#D6901B"],
        ["INC", "S04", 146, "AMITA BHUSHAN", "#19AAED"],
        ["LJPRV", "S04", 147, "SANJAY KUMAR", "#A2006D"],
        ["JD(U)", "S04", 148, "RAM CHANDRA SADA", "#39AC57"],
        ["JD(U)", "S04", 149, "BABLU KUMAR", "#39AC57"],
        ["JD(U)", "S04", 150, "PANNA LAL SINGH PATEL", "#39AC57"],
        ["LJPRV", "S04", 151, "BABULAL SHORYA", "#A2006D"],
        ["BJP", "S04", 152, "KUMAR SHAILENDRA", "#ff944d"],
        ["JD(U)", "S04", 153, "SHAILESH KUMAR ALIAS BULO MANDAL", "#39AC57"],
        ["BJP", "S04", 154, "MURARI PASAVAN", "#ff944d"],
        ["RJD", "S04", 155, "RAJNISH BHARTI", "#D6901B"],
        ["BJP", "S04", 156, "ROHIT PANDEY", "#ff944d"],
        ["JD(U)", "S04", 157, "LALIT NARAYAN MANDAL", "#39AC57"],
        ["LJPRV", "S04", 158, "MITHUN KUMAR", "#A2006D"],
        ["JD(U)", "S04", 159, "JAYANT RAJ", "#39AC57"],
        ["JD(U)", "S04", 160, "MANISH KUMAR", "#39AC57"],
        ["NA", "S04", 161, "NA", "#DDDDDD"],
        ["RJD", "S04", 162, "SWEETY SIMA HEMBROM", "#D6901B"],
        ["JD(U)", "S04", 163, "MANOJ YADAV", "#39AC57"],
        ["BJP", "S04", 164, "SAMRAT CHOUDHARY", "#ff944d"],
        ["BJP", "S04", 165, "KUMAR PRANAY", "#ff944d"],
        ["JD(U)", "S04", 166, "NACHIKETA", "#39AC57"],
        ["JD(U)", "S04", 167, "RAMANAND MANDAL", "#39AC57"],
        ["BJP", "S04", 168, "VIJAY KUMAR SINHA", "#ff944d"],
        ["JD(U)", "S04", 169, "RANDHIR KUMAR SONI", "#39AC57"],
        ["JD(U)", "S04", 170, "DR. KUMAR PUSPANJAY", "#39AC57"],
        ["JD(U)", "S04", 171, "JITENDRA KUMAR", "#39AC57"],
        ["BJP", "S04", 172, "DR. SUNIL KUMAR", "#ff944d"],
        ["JD(U)", "S04", 173, "KAUSHAL KISHORE", "#39AC57"],
        ["JD(U)", "S04", 174, "RUHAIL RANJAN", "#39AC57"],
        ["RJD", "S04", 175, "ATRI MUNI URF SHAKTI SINGH YADAV", "#D6901B"],
        ["JD(U)", "S04", 176, "SHRAWON KUMAR", "#39AC57"],
        ["JD(U)", "S04", 177, "HARI NARAYAN SINGH", "#39AC57"],
        ["JD(U)", "S04", 178, "ANANT KUMAR SINGH", "#39AC57"],
        ["RJD", "S04", 179, "KARNVEER SINGH YADAV", "#D6901B"],
        ["LJPRV", "S04", 180, "ARUN KUMAR S/SATRUGHAN SAO", "#A2006D"],
        ["BJP", "S04", 181, "SANJIV CHAURASIA", "#ff944d"],
        ["BJP", "S04", 182, "NITIN NABIN", "#ff944d"],
        ["BJP", "S04", 183, "SANJAY KUMAR", "#ff944d"],
        ["BJP", "S04", 184, "RATNESH KUMAR", "#ff944d"],
        ["LJPRV", "S04", 185, "RUPA KUMARI", "#A2006D"],
        ["RJD", "S04", 186, "RIT LAL ROY", "#D6901B"],
        ["RJD", "S04", 187, "BHAI BIRENDRA", "#D6901B"],
        ["JD(U)", "S04", 188, "SHYAM RAJAK", "#39AC57"],
        ["JD(U)", "S04", 189, "ARUN MANJHI", "#39AC57"],
        ["CPI(ML)(L)", "S04", 190, "SANDEEP SAURAV", "#BC08A4"],
        ["BJP", "S04", 191, "SIDDHARTH SAURAV", "#ff944d"],
        ["JD(U)", "S04", 192, "RADHA CHARAN SAH", "#39AC57"],
        ["RJD", "S04", 193, "ASHOK KUMAR SINGH", "#D6901B"],
        ["BJP", "S04", 194, "SANJAY SINGH (TIGER)", "#ff944d"],
        ["BJP", "S04", 195, "MAHESH PASWAN", "#ff944d"],
        ["CPI(ML)(L)", "S04", 196, "MADAN SINGH S/O-KUMI SINGH", "#BC08A4"],
        ["RJD", "S04", 197, "KISHORE KUNAL", "#D6901B"],
        ["BJP", "S04", 198, "RAKESH RANJAN", "#ff944d"],
        ["RJD", "S04", 199, "SHAMBHU NATH YADAV", "#D6901B"],
        ["BJP", "S04", 200, "ANAND MISHRA", "#ff944d"],
        ["JD(U)", "S04", 201, "RAHUL KUMAR SINGH", "#39AC57"],
        ["JD(U)", "S04", 202, "SANTOSH KUMAR NIRALA", "#39AC57"],
        ["BSP", "S04", 203, "SATISH KUMAR SINGH YADAV", "#000078"],
        ["BJP", "S04", 204, "SANGITA KUMARI", "#ff944d"],
        ["BJP", "S04", 205, "BHARAT BIND", "#ff944d"],
        ["JD(U)", "S04", 206, "MD. ZAMA KHAN", "#39AC57"],
        ["NA", "S04", 207, "NA", "#DDDDDD"],
        ["NA", "S04", 208, "NA", "#DDDDDD"],
        ["JD(U)", "S04", 209, "BASHISTH SINGH", "#39AC57"],
        ["NA", "S04", 210, "NA", "#DDDDDD"],
        ["JD(U)", "S04", 211, "NAGENDRA CHANDRAVANSHI", "#39AC57"],
        ["LJPRV", "S04", 212, "RAJEEV RANJAN SINGH", "#A2006D"],
        ["JD(U)", "S04", 213, "MAHABALI SINGH", "#39AC57"],
        ["BJP", "S04", 214, "MANOJ KUMAR", "#ff944d"],
        ["JD(U)", "S04", 215, "PAPPU KUMAR VERMA", "#39AC57"],
        ["RJD", "S04", 216, "RAHUL KUMAR", "#D6901B"],
        ["CPI(ML)(L)", "S04", 217, "RAMBALI SINGH YADAV", "#BC08A4"],
        ["RJD", "S04", 218, "SUBEDAR DAS", "#D6901B"],
        ["RJD", "S04", 219, "AMRENDRA KUMAR", "#D6901B"],
        ["LJPRV", "S04", 220, "PRAKASH CHANDRA", "#A2006D"],
        ["RJD", "S04", 221, "AMOD KUMAR SINGH", "#D6901B"],
        ["HAMS", "S04", 222, "LALAN RAM", "#160E4C"],
        ["BJP", "S04", 223, "TRIVIKRAM NARAYAN SINGH", "#ff944d"],
        ["RJD", "S04", 224, "GHULAM SHAHID", "#D6901B"],
        ["BJP", "S04", 225, "UPENDRA PRASAD", "#ff944d"],
        ["LJPRV", "S04", 226, "UDAY KUMAR SINGH", "#A2006D"],
        ["HAMS", "S04", 227, "DEEPA KUMARI", "#160E4C"],
        ["HAMS", "S04", 228, "JYOTI DEVI", "#160E4C"],
        ["LJPRV", "S04", 229, "SHYAMDEO PASWAN", "#A2006D"],
        ["BJP", "S04", 230, "PREM KUMAR", "#ff944d"],
        ["RJD", "S04", 231, "AJAY KUMAR", "#D6901B"],
        ["RJD", "S04", 232, "VISHVANATH KUMAR SINGH", "#D6901B"],
        ["HAMS", "S04", 233, "ROMIT KUMAR", "#160E4C"],
        ["BJP", "S04", 234, "BIRENDRA SINGH", "#ff944d"],
        ["LJPRV", "S04", 235, "VIMAL RAJBANSHI", "#A2006D"],
        ["BJP", "S04", 236, "ANIL SINGH", "#ff944d"],
        ["JD(U)", "S04", 237, "VIBHA DEVI", "#39AC57"],
        ["LJPRV", "S04", 238, "BINITA MEHTA", "#A2006D"],
        ["BJP", "S04", 239, "ARUNA DEVI", "#ff944d"],
        ["RJD", "S04", 240, "UDAY NARAIN CHOUDHARY", "#D6901B"],
        ["BJP", "S04", 241, "SHREYASI SINGH", "#ff944d"],
        ["JD(U)", "S04", 242, "DAMODAR RAWAT", "#39AC57"],
        ["RJD", "S04", 243, "SAVITRI DEVI", "#D6901B"],
      ],
    },
  };

  const chartData = data.S04.chartData;
  const tableData = data.S04.tableData;

  // Get unique parties with their colors
  const partyColors = {};
  chartData.forEach(([party, , , , color]) => {
    if (party !== "NA" && !partyColors[party]) {
      partyColors[party] = color;
    }
  });

  // Count candidates per party
  const partyCounts = {};
  chartData.forEach(([party]) => {
    if (party !== "NA") {
      partyCounts[party] = (partyCounts[party] || 0) + 1;
    }
  });

  // Filter out NA candidates
  const validCandidates = chartData.filter(([party]) => party !== "NA");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Election Results - S04
          </h1>
          <p className="text-gray-600">
            Detailed candidate and party performance analysis
          </p>
        </div>

        {/* Party Summary Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Political Parties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(partyColors).map(([party, color]) => (
              <div
                key={party}
                onClick={() => setSelectedParty(party)}
                className="rounded-xl shadow-lg p-6 border-l-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                style={{
                  borderLeftColor: color,
                  background: color,
                  color: "white",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-lg">{party}</h3>
                    <p className="text-white text-sm mt-1">
                      {partyCounts[party]} candidates
                    </p>
                    <p className="text-white text-sm mt-1">
                      {Math.round(
                        (partyCounts[party] / validCandidates.length) * 100
                      )}
                      % of total
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                    style={{
                      backgroundColor: `${color}80`,
                      border: `2px solid white`,
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: "white" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion Section */}
        <div className="bg-white rounded-xl shadow-2xl border-2 border-gray-400/50 overflow-hidden">
          {/* Accordion Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800">
              Party-wise Candidates
            </h2>
            <p className="text-sm text-gray-600">
              Click any party to expand and view candidate details
            </p>
          </div>

          {/* Accordion Items */}
          <div className="divide-y divide-gray-200 ">
            {Object.entries(partyColors).map(([party, color]) => {
              const candidates = validCandidates.filter((c) => c[0] === party);
              const isOpen = selectedParty === party;

              return (
                <div key={party}>
                  {/* Accordion Header Row */}
                  <button
                    onClick={() => setSelectedParty(isOpen ? null : party)}
                    style={{ backgroundColor: `${color}20` }}
                    className={`w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors duration-150`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: `${color}90` }}
                      ></div>
                      <span className="font-semibold text-black">{party}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-800">
                        {candidates.length} candidates
                      </span>
                      <span
                        className={`transform transition-transform duration-200 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        <FaChevronRight className="text-gray-800" />
                      </span>
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="bg-gray-50 px-6 py-4">
                      {/* Table */}
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-sm">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Serial
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Candidate Name
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Code
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                            </tr>
                          </thead>

                          <tbody className="bg-white divide-y divide-gray-200">
                            {candidates.map(
                              ([party, code, serial, name, color], i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                  <td className="px-4 py-2 text-sm font-semibold text-gray-900">
                                    #{serial}
                                  </td>
                                  <td className="px-4 py-2 text-sm text-gray-900">
                                    {name}
                                  </td>
                                  <td className="px-4 py-2">
                                    <span
                                      className="text-xs font-medium px-2 py-1 rounded-full"
                                      style={{
                                        backgroundColor: `${color}15`,
                                        color: color,
                                        border: `1px solid ${color}25`,
                                      }}
                                    >
                                      {code}
                                    </span>
                                  </td>
                                  <td className="px-4 py-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      Active
                                    </span>
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionResultPage;
