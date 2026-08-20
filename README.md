# Bangkhen

เว็บไซต์แนะนำสถานที่ท่องเที่ยว ประวัติศาสตร์ วัฒนธรรม ร้านอาหาร และสถานที่สำคัญในเขตบางเขน กรุงเทพฯ พัฒนาขึ้นเพื่อรวบรวมข้อมูลที่กระจัดกระจายให้อยู่ในเว็บไซต์เดียวและค้นหาได้ง่ายบนทุกอุปกรณ์

<img src="./public/ban-bang-khen.jpg" alt="หน้าเว็บไซต์ Bangkhen" width="100%" />

## ฟีเจอร์หลัก

- แสดงข้อมูลสถานที่พร้อมภาพ แกลเลอรี และ Google Maps
- รองรับหน้ารายละเอียดที่ออกแบบเฉพาะแต่ละสถานที่
- สร้างหน้าสถานที่แบบ Dynamic จากข้อมูลใน Supabase
- เข้าสู่ระบบผู้ดูแลด้วย Supabase Authentication
- ตรวจสอบสิทธิ์ผู้ดูแลก่อนเข้าใช้งาน Dashboard
- เพิ่ม แก้ไข และลบข้อมูลสถานที่ผ่านระบบหลังบ้าน
- แสดงภาพรวมข้อมูลและกราฟสถิติด้วย Recharts
- รองรับการใช้งานบนคอมพิวเตอร์ แท็บเล็ต และโทรศัพท์มือถือ

## เทคโนโลยีที่ใช้

| ส่วน | เทคโนโลยี |
|---|---|
| Frontend | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS, Framer Motion, Lucide React |
| Backend และฐานข้อมูล | Supabase Database, Supabase Auth |
| Dashboard | Recharts, SweetAlert2 |
| Version Control | Git, GitHub |

## หน้าจอสำคัญ

เว็บไซต์แบ่งเป็นสองส่วนหลัก

1. **หน้าสำหรับผู้เข้าชม** — สำรวจสถานที่ อ่านเรื่องราว ดูรูปภาพ และเปิดเส้นทาง
2. **ระบบผู้ดูแล** — เข้าสู่ระบบ จัดการข้อมูลสถานที่ คลังภาพ และดูสถิติ

> Live Demo: ยังไม่ได้เผยแพร่

## การติดตั้งและเปิดใช้งาน

สิ่งที่ต้องมีในเครื่อง: Node.js 18 ขึ้นไป และ npm

```bash
git clone https://github.com/popoza11874/bangkhen.git
cd bangkhen
npm install
```

สร้างไฟล์ `.env.local` ที่โฟลเดอร์หลักของโปรเจกต์ แล้วเพิ่มข้อมูลสำหรับเชื่อมต่อ Supabase

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

เปิด Development Server

```bash
npm run dev
```

จากนั้นเปิด [http://localhost:3000](http://localhost:3000)

## คำสั่งที่ใช้บ่อย

```bash
npm run dev       # เปิดเซิร์ฟเวอร์สำหรับพัฒนา
npm run build     # ตรวจสอบและสร้าง Production build
npm run start     # เปิด Production server
npm run lint      # ตรวจสอบรูปแบบและคุณภาพโค้ด
```

## ผู้พัฒนา

[popoza11874](https://github.com/popoza11874)
