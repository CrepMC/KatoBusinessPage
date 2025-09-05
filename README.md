<div align="center">

  <div>
    <!-- Bạn có thể thay thế bằng logo của mình -->
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React logo" width="140" height="100%" style="vertical-align: top;"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="Vite logo" width="100" height="100%" style="vertical-align: top;"/>
  </div>

  <h1>
    Kato Business Page
  </h1>
  
  <p>
    Một trang web landing page cho doanh nghiệp được xây dựng hiện đại, chuyên nghiệp bằng React và Vite. Nhanh, đẹp, và dễ dàng tùy chỉnh.
  </p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/github/languages/top/CrepMC/KatoBusinessPage?style=for-the-badge" />
    <img src="https://img.shields.io/github/last-commit/CrepMC/KatoBusinessPage?style=for-the-badge" />
    <img src="https://img.shields.io/github/stars/CrepMC/KatoBusinessPage?style=for-the-badge" />
  </p>
   
</div>

<br />

## ✨ Tính năng nổi bật

- **🎨 Giao diện hiện đại:** Thiết kế sạch sẽ, chuyên nghiệp và hoàn toàn responsive trên mọi thiết bị.
- **⚡ Tốc độ cực nhanh:** Xây dựng trên nền tảng Vite mang lại trải nghiệm phát triển và tốc độ tải trang vượt trội.
- **🗺️ Tích hợp bản đồ:** Trang liên hệ với Google Maps giúp khách hàng dễ dàng tìm đến bạn.
- **🔧 Dễ dàng tùy chỉnh:** Cấu trúc code rõ ràng, dễ dàng thay đổi nội dung, màu sắc và hình ảnh.
- **🚀 Sẵn sàng để triển khai:** Tối ưu hóa cho production, chỉ cần build và deploy.

## 🛠️ Công nghệ sử dụng

- **React**: Thư viện JavaScript mạnh mẽ để xây dựng giao diện người dùng.
- **Vite**: Công cụ build thế hệ mới cho trải nghiệm phát triển web nhanh hơn.
- **CSS**: Styling đơn giản và hiệu quả.

## 🚀 Bắt đầu nào!

Làm theo các bước sau để chạy dự án trên máy của bạn.

### Yêu cầu

- Node.js (phiên bản 18.x trở lên)
- `npm` hoặc `yarn`

### Cài đặt

1.  Clone repository về máy:
    ```sh
    git clone https://github.com/CrepMC/KatoBusinessPage.git
    ```
2.  Di chuyển vào thư mục dự án:
    ```sh
    cd KatoBusinessPage
    ```
3.  Cài đặt các dependencies:
    ```sh
    npm install
    ```
4.  Chạy server development:
    ```sh
    npm run dev
    ```
    Mở trình duyệt và truy cập `http://localhost:5173` (hoặc cổng khác được hiển thị trên terminal).

## 📜 Các câu lệnh có sẵn

- `npm run dev`: Chạy ứng dụng ở chế độ development.
- `npm run build`: Build ứng dụng cho môi trường production.
- `npm run lint`: Kiểm tra lỗi code với ESLint.
- `npm run preview`: Chạy bản build production trên local để kiểm tra.

## 🤝 Đóng góp

Mọi sự đóng góp đều được chào đón! Nếu bạn có ý tưởng để cải thiện dự án, vui lòng fork repo và tạo một Pull Request.

1.  Fork dự án
2.  Tạo branch mới cho tính năng của bạn (`git checkout -b feature/AmazingFeature`)
3.  Commit thay đổi của bạn (`git commit -m 'Add some AmazingFeature'`)
4.  Push lên branch (`git push origin feature/AmazingFeature`)
5.  Mở một Pull Request

## 📝 Giấy phép

Dự án này được cấp phép theo một giấy phép tùy chỉnh. Vui lòng xem file `LICENSE.md` để biết các điều khoản và điều kiện chi tiết, đặc biệt là yêu cầu về ghi công cho tác giả.

Theo điều khoản trong `LICENSE.md` bạn có thể dùng đoạn mã sau vào footer:

<details>
<summary><b>src\components\Footer\Footer.jsx</b></summary>

```jsx
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='main-content'>
        <div className='about'>
          <h3>About Us</h3>
          <p>
            KATO is a fashion brand with a vintage-retro style, specializing in
            genuine leather shoes and apparel.
          </p>
        </div>
        <div className='products'>
          <h3>Products</h3>
          <ul>
            <li>
              <Link to='/products'>All Products</Link>
            </li>
            <li>
              <Link to='/products/shoes'>Shoes</Link>
            </li>
            <li>
              <Link to='/products/apparel'>Apparel</Link>
            </li>
            <li>
              <Link to='/products/accessories'>Accessories</Link>
            </li>
          </ul>
        </div>
        <div className='help'>
          <h3>Help</h3>
          <ul>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/shipping'>Shipping & Returns</Link>
            </li>
          </ul>
        </div>
        <div className='contact'>
          <h3>Contact</h3>
          <p>123 Vintage St, Retro City</p>
          <p>Email: contact@kato.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <hr />
      <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} KATO. All rights reserved.</p>
        <p>© 2025 Created by</p>
        <a
          href='https://github.com/your-username'
          target='_blank'
          style='color: inherit; text-decoration: none;'
        >
          Phạm Đức Nhân
        </a>
      </div>
    </footer>
  );
};

export default Footer;
```

</details>

<details>
<summary><b>src\components\Footer\Footer.css</b></summary>

```css
footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px 50px;
  background: #20263e;
  color: #fff;
  border-top: 1px solid #555;
}

.main-content {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 20px auto;
  flex-wrap: wrap;
}

.main-content > div {
  flex: 1;
  padding: 0 20px;
  min-width: 200px;
  margin-bottom: 20px;
}

.main-content h3 {
  margin-bottom: 15px;
  color: #f0f0f0;
  font-size: 18px;
}

.main-content p,
.main-content li {
  color: #ccc;
  font-size: 14px;
  line-height: 1.6;
}

.main-content ul {
  list-style: none;
  padding: 0;
}

.main-content ul li {
  margin-bottom: 10px;
}

.main-content a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.main-content a:hover {
  color: #fff;
}

footer hr {
  width: 100%;
  border: 0;
  border-top: 1px solid #555;
  margin: 8px 0;
}

.copyright {
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #aaa;
  padding-top: 20px;
}

.license {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
```

</details>
