const express = require('express')
const app = express()
const port = 9000
const cors = require('cors'); 

app.use(cors());
let trips = [
    {
        "title": "เที่ยวสิ้นปี บ้านอีต่องเหมืองปิล็อก ชมหมอก กินหมูกระทะ ล่าทางช้างเผือก",
        "eid": "4",
        "url": "https://www.wongnai.com/trips/travel-at-etong-pilok",
        "description": "จังหวะ จะเที่ยว บ้านอีต่อง เหมืองปิล็อก ตามล่าทะเลหมอกหน้าหนาว เดินเที่ยวหมู่บ้านเหมืองเก่าน่ารัก กินหมูกระทะท้าลมหนาว รอดูทางช้างเผือก แล้วปิดทริปที่น้ำตก",
        "photos": [
            "https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg",
            "https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg",
            "https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg",
            "https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg"
        ],
        "tags": [
            "จุดถ่ายรูป",
            "หมู่บ้าน",
            "ภูเขา",
            "ธรรมชาติ",
            "ถ่ายรูปสวย",
            "บ้านอีต่องเหมืองปิล็อก",
            "กาญจนบุรี"
        ]
    },
    {
        "title": "เที่ยวญี่ปุ่นไปกับภูเขาไฟชื่อดังให้สุดฟินจาก 15 มุมสุดงาม~",
        "eid": "8",
        "url": "https://www.wongnai.com/trips/views-around-fuji",
        "description": "สายถ่ายรูปห้ามพลาด! ลุยเที่ยวญี่ปุ่น ชมภูเขาไฟฟูจิ ทิวทัศน์รอบทิศหลากมุม งามไม่รู้ลืม",
        "photos": [
            "https://img.wongnai.com/p/1600x0/2019/06/04/371f3bfad9cd46399f30c8b04c816597.jpg",
            "https://img.wongnai.com/p/1600x0/2019/06/04/93b7b555b624490680ebe7b0a16b0519.jpg",
            "https://img.wongnai.com/p/1600x0/2019/06/04/bf2c001a72314452a261bff3f039ccdc.jpg",
            "https://img.wongnai.com/p/1600x0/2019/06/04/37b377e43f344da794cb3353aeca3fcf.jpg"
        ],
        "tags": [
            "จุดถ่ายรูป",
            "ต่างประเทศ",
            "ญี่ปุ่น",
            "ธรรมชาติ",
            "ภูเขา"
        ]
    },
    {
        "title": "เที่ยวฟินแลนด์แบบฟิน ๆ ไปฟาร์ม Husky ขี่ Reindeer เล่น Snowmobile",
        "eid": "10",
        "url": "https://www.wongnai.com/trips/trip-at-finland",
        "description": "ใครว่าเที่ยวฟินแลนด์ มีแค่ล่าแสงเหนือ กิจกรรมกลางหิมะเค้าก็มีให้ทำเพียบ! ทั้งขี่ Husky, Reindeer ขับเจ็ทสกีหิมะท่ามกลางภูเขาอุณภูมิติดลบ ต้องลองสักครั้งในชีวิต",
        "photos": [
            "https://img.wongnai.com/p/1600x0/2019/05/21/cd54e9c640694a95b7e0103b0ead5408.jpg",
            "https://img.wongnai.com/p/1600x0/2019/05/21/cf792ff02ab0491b9f30d67d33634f78.jpg",
            "https://img.wongnai.com/p/1600x0/2019/05/21/e87ce6e73c634532afd50dd02517fee9.jpg",
            "https://img.wongnai.com/p/1600x0/2019/05/21/ea0f93584b3c4f3ba0680fcc11bc3a13.jpg"
        ],
        "tags": [
            "ต่างประเทศ",
            "ฟินแลนด์",
            "หิมะ",
            "ธรรมชาติ"
        ]
    }
]

app.get("/api/trips", (req, res) => {
    let response = [];
    let filteredTrips = trips;
    const keyword = req.query.keyword;
  
    if (keyword) {
      filteredTrips = trips.filter(
        (trip) =>
          trip.title.includes(keyword) ||
          trip.description.includes(keyword) ||
          trip.tags.some((tag) => tag.includes(keyword))
      );
    }
  
    if (!filteredTrips.length) {
      response;
    }
  
    response = filteredTrips;
  
    res.json(response);
  });
  
app.listen(port, (req, res) =>{
    console.log('http server run at' + port)
})