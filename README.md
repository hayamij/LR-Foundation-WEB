# LR Foundation WEB UI (Little Roses Foundation)

> **Sản phẩm dự thi: Thiết kế Website Quỹ Bông Hồng Nhỏ**
>
> *"Hành trình kết nối những tấm lòng nhân ái qua công nghệ."*

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18.0%2B-green?style=for-the-badge)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?style=for-the-badge)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=for-the-badge)](https://tailwindcss.com/)

## Giới thiệu (Overview)

Dự án **LR Foundation WEB UI** là một giải pháp website thiện nguyện toàn diện, được thiết kế nhằm mục đích số hóa các hoạt động của **Quỹ Bông Hồng Nhỏ**. Sản phẩm tập trung vào trải nghiệm người dùng (UX), tính minh bạch trong hoạt động và khả năng tương thích đa nền tảng.

Sản phẩm bám sát các yêu cầu thực tế của dự án về tính năng quyên góp, hiển thị báo cáo minh bạch và tối ưu hiệu suất tải trang.

## Tính năng nổi bật (Key Features)

Dựa trên yêu cầu sản phẩm:

* **Responsive Design:** Giao diện tương thích hoàn hảo trên Mobile, Tablet và Desktop sử dụng Tailwind CSS.
* **Easy Donation:** Nút quyên góp (CTA) nổi bật, quy trình ủng hộ đơn giản hóa tối đa.
* **Transparency Hub:** Khu vực hiển thị Báo cáo tài chính và Cấu chuyện tác động rõ ràng, minh bạch.
* **Performance Optimization:** Tối ưu hóa hình ảnh và tốc độ tải trang (High Lighthouse Score).
* **User-Centric UX:** Điều hướng thông minh dành cho cả Nhà tài trợ và Tình nguyện viên.

## Công nghệ sử dụng (Tech Stack)

Dự án được xây dựng với tiêu chí "Đơn giản - Hiệu quả - Dễ bảo trì":

* **Core:** Node.js
* **Framework:** Express.js (Xử lý routing và server-side logic nhẹ)
* **View Engine:** EJS (Embedded JavaScript templates)
* **Styling:** Tailwind CSS (Utility-first CSS framework)
* **Icons:** FontAwesome / Heroicons

## 🗺 Sitemap & Kiến trúc thông tin

Cấu trúc website tuân thủ sitemap yêu cầu:

| Main Navigation | Sub-sections |
| :--- | :--- |
| **Về Chúng Tôi** | Tầm nhìn, Sứ mệnh, Giá trị cốt lõi, Đội ngũ nhân sự |
| **Chương Trình - Dự Án** | Hỗ trợ giáo dục, Y tế & Sức khỏe, Bác ái xã hội, Gây quỹ |
| **Tin Tức & Tài Liệu** | Báo cáo, Câu chuyện tác động, Tài liệu tham khảo |
| **Đóng Góp Ngay** | Cổng thanh toán, Thông tin chuyển khoản |

## 🚀 Cài đặt & Chạy thử (Installation)

Đảm bảo bạn đã cài đặt [Node.js](https://nodejs.org/) trên máy.

1.  **Clone repository:**
    ```bash
    git clone [https://github.com/hayamij/lr-foundation-web-ui.git](https://github.com/hayamij/lr-foundation-web-ui.git)
    cd lr-foundation-web-ui
    ```

2.  **Cài đặt dependencies:**
    ```bash
    npm install
    ```

3.  **Biên dịch Tailwind CSS (Watch mode):**
    ```bash
    npm run watch:css
    ```

4.  **Khởi chạy server (Development):**
    ```bash
    npm run dev
    ```

5.  **Truy cập:**
    Mở trình duyệt tại địa chỉ: `http://localhost:3000`
