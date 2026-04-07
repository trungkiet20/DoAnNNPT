# Hệ thống Quản lý Phòng Trọ (DoanNNPT)

## 📋 Mô Tả
Một ứng dụng web toàn diện để quản lý phòng trọ, bao gồm quản lý phòng, hợp đồng, thanh toán, và liên lạc giữa chủ trọ và khách thuê.

## 🛠️ Công Cụ Sử Dụng

### Backend
- **Express.js (^5.2.1)** - Framework web Node.js cho xây dựng REST API
- **Sequelize (^6.37.8)** - ORM (Object-Relational Mapping) để làm việc với cơ sở dữ liệu
- **MySQL2 (^3.20.0)** - Trình điều khiển MySQL cho Node.js
- **jsonwebtoken (^9.0.3)** - Xác thực dựa trên JWT (JSON Web Token)
- **bcryptjs (^3.0.3)** - Mã hóa mật khẩu bảo mật
- **multer (^2.1.1)** - Middleware xử lý tải file lên (hình ảnh phòng, v.v.)
- **dotenv (^17.4.0)** - Quản lý biến môi trường
- **cors (^2.8.6)** - Xử lý Cross-Origin Resource Sharing

### Frontend
- **HTML5** - Cấu trúc trang web
- **CSS3** - Styling và responsive design
- **JavaScript (Vanilla)** - Xử lý logic client-side và tương tác người dùng
- **AJAX** - Gọi API không tải lại trang

### Cơ Sở Dữ Liệu
- **MySQL** - Lưu trữ dữ liệu (phòng, hợp đồng, thanh toán, tin nhắn, v.v.)
- **SQLite3 (^6.0.1)** - Hỗ trợ cơ sở dữ liệu nhẹ nếu cần

### Công Cụ Phát Triển
- **Nodemon (^3.1.14)** - Tự động khởi động lại server khi có thay đổi
- **tedious (^19.2.1)** - Trình điều khiển SQL Server (tùy chọn)

## 📁 Cấu Trúc Dự Án
```
baocaocuoiki/
├── server/
│   ├── config/          # Cấu hình kết nối database
│   ├── controllers/     # Xử lý logic nghiệp vụ
│   ├── models/          # Định nghĩa các model Sequelize
│   ├── routes/          # Định tuyến API
│   ├── middleware/      # Middleware xác thực, phân quyền
│   ├── uploads/         # Thư mục lưu file tải lên
│   └── index.js         # File chính server
├── client/
│   ├── index.html       # Trang chính
│   ├── css/             # File CSS
│   ├── js/              # File JavaScript
│   └── pages/           # Các trang khác
├── package.json         # Dependencies
└── phongtro.sql         # Schema của database
```

## 🚀 Cài Đặt

### Yêu Cầu
- Node.js phiên bản 14+
- MySQL Server

### Các Bước Cài Đặt
1. Clone/tải dự án này
2. Chạy `npm install` để cài đặt dependencies
3. Tạo file `.env` với các biến môi trường cần thiết (DB_HOST, DB_USER, DB_PASS, v.v.)
4. Import file `phongtro.sql` vào MySQL
5. Chạy `npm run dev` để khởi động server (hoặc `npm start` cho production)

## 📝 Script Npm
- `npm start` - Khởi động server
- `npm run dev` - Khởi động server với Nodemon (tự động restart)
- `npm run seed` - Seeding dữ liệu mẫu
- `npm test` - Chạy kiểm thử
