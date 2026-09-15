# Bùi Văn Quân — Personal Profile

Trang profile bằng HTML, CSS và JavaScript, có album 6 ảnh hỗ trợ vuốt ngang, kéo bằng chuột và chuyển ảnh bằng bàn phím. Tên miền dự kiến: `vanquan174.io.vn`.

## Chạy trên máy

Mở `index.html` bằng trình duyệt. Không cần cài thư viện hoặc chạy bước build. Giữ nguyên `style.css`, `app.js` và thư mục `assets` cạnh `index.html`. Phông chữ Google Fonts và các liên kết mạng xã hội cần Internet.

## GitHub Pages

1. Vào **Settings → Pages** của repository.
2. Chọn **Deploy from a branch**, nhánh **main**, thư mục **/(root)** rồi lưu.
3. Trong **Custom domain**, nhập `vanquan174.io.vn` rồi lưu. Tệp `CNAME` trong mã nguồn đã chứa tên miền này.
4. Cấu hình DNS tại nhà cung cấp tên miền. Với bản ghi A, dùng bốn giá trị sau:

| Loại | Tên | Giá trị |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | hoangvippro2008.github.io |

Bản ghi `www` là tùy chọn nếu muốn dùng thêm `www.vanquan174.io.vn`. Nếu đã có bản ghi A/AAAA/CNAME cho cùng tên, cần kiểm tra và thay các bản ghi cũ đang trỏ tới dịch vụ khác. Giữ nguyên bản ghi thư điện tử và bản ghi của các tên miền con không liên quan.

5. Sau khi DNS hợp lệ và chứng chỉ sẵn sàng, bật **Enforce HTTPS** trong **Settings → Pages**.

GitHub Pages cần được bật trong phần cài đặt repository; chỉ đẩy tệp `CNAME` lên chưa hoàn tất việc xuất bản website. Khả năng dùng Pages với repository riêng tư phụ thuộc gói GitHub của tài khoản.

Hướng dẫn chính thức: [Tên miền riêng](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).

## Chỉnh sửa

- `index.html`: thông tin, liên kết và thứ tự ảnh.
- `style.css`: giao diện và bố cục thích ứng màn hình.
- `app.js`: thao tác với album ảnh.
- `assets/`: sáu ảnh WebP.

Avatar tạm dùng `assets/love-1.webp`. Để thay riêng avatar, thêm ảnh mới vào `assets/` và sửa thuộc tính `src` của thẻ `img.avatar` trong `index.html`.
