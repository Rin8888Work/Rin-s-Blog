---
title: 'Tối ưu hóa hình ảnh theo kích thước màn hình với thuộc tính srcset và sizes'
date: '2023-04-03'
tags: ['dev', 'frontend', 'share']
draft: false
summary: 'Trong bài viết này mình sẽ hướng dẫn các bạn sử dụng thuộc tính srcset và sizes để responsive thẻ img một cách hiệu quả nhất'
images: ['/static/images/blog-banner/toi-uu-hoa-hinh-anh-theo-kich-thuoc-man-hinh-voi-thuoc-tinh-srcset-va-sizes.jpg']
authors: ['default']
lastmod: '2023-04-03'
---

import Twemoji from './Twemoji.tsx'

![thumbnail-image Hướng dẫn tối ưu hóa hình ảnh theo kích thước màn hình với thuộc tính srcset và sizes](/static/images/blog-banner/toi-uu-hoa-hinh-anh-theo-kich-thuoc-man-hinh-voi-thuoc-tinh-srcset-va-sizes.jpg)

## Thuộc tính srcset và sizes trong thẻ img là dì?

`srcset` và `size` là hai thuộc tính của thẻ `img` trong HTML có thể được sử dụng để responsive hình ảnh.
Chúng được sử dụng để chỉ định nguồn hình ảnh và kích thước của hình ảnh. Chúng được sử dụng cùng nhau để tạo hình ảnh được tối ưu hóa cho từng thiết bị, từng màn hình mà chúng đang được hiển thị trên đó.

Trong bài viết này, mình sẽ tập trung vào cách sử dụng các thuộc tính `srcset` và `size`.

Hãy cùng mình đọc tiếp và hãy xem phần tử `img` cơ bản dưới đây:

```html
<img src="image.jpg" alt="image" />
```

Trong thẻ `img` ở trên, thuộc tính `src` được sử dụng để chỉ định nguồn hình ảnh.
Các trình duyệt web sẽ tải ảnh về và hiển thị trên tất cả các thiết bị có cùng kích thước, bất kể kích thước màn hình, mật độ pixel hoặc kích thước khung nhìn của thiết bị là bao nhiêu.

Vì vậy, nếu bạn có hình ảnh rộng `2560px`, nó sẽ được hiển thị dưới dạng hình ảnh rộng `2560px` trên màn hình 4K - điều này không sao cả, nhưng nó cũng sẽ được tải xuống và hiển thị dưới dạng hình ảnh rộng `2560px` trên màn hình điện thoại di động rộng `320px`. 

Tất nhiên, nó sẽ vừa với màn hình, nhưng nó không cần thiết lớn phải lớn như vậy và sẽ mất nhiều thời gian hơn để quá trình tải xuống hình ảnh được hoàn thành.

Đó là nơi các thuộc tính `srcset` và `size` xuất hiện.
Chúng ta có thể sử dụng `srcset` và `size` để cung cấp các nguồn/kích thước hình ảnh khác nhau cho các thiết bị khác nhau và để trình duyệt quyết định tải xuống và hiển thị hình ảnh nào.

Bạn hãy xem một ví dụ dưới đây:

```html
<img
  src="/assets/image.jpg"
  srcset="/assets/image-320.jpg 320w, /assets/image-640.jpg 640w, /assets/image-1280.jpg 1280w"
  sizes="(max-width: 320px) 280px, (max-width: 640px) 640px, 1280px"
  alt="image"
/>
```

Các bạn có thể thấy, `srcset` trong ví dụ trên có giá trị là **/assets/image-320.jpg 320w, /assets/image-640.jpg 640w, /assets/image-1280.jpg 1280w**. Và `sizes` có giá trị là **(max-width: 320px) 280px, (max-width: 640px) 640px, 1280px**. Các giá trị `srcset` và `size` trông hơi phức tạp (và dễ quên <Twemoji emoji="face-with-rolling-eyes" />), nhưng chúng không khó hiểu đến thế. Vậy ý nghĩa của chúng là dì?



## Ý nghĩa khi sử dụng thuộc tính srcset

Thuộc tính `srcset` được sử dụng để chỉ định nguồn hình ảnh và kích thước của chúng.

Bạn hãy xem lại một lần nữa:

```html
srcset="image-source intrinsic-size, image-source intrinsic-size, image-source intrinsic-size"
```

Các hình ảnh được phân tách bằng **dấu phẩy** và phía sau mỗi hình ảnh sẽ kèm theo kích thước được tính bằng `pixel` bao gồm:

- **image-source** - `Đường dẫn của hình ảnh` (ví dụ: `/assets/image-320.jpg`)
- **space**: `Khoảng trắng`
- **intrinsic-size** - `kích thước` của hình ảnh tính bằng pixel (ví dụ: `320w`) - bạn hãy lưu ý là `w` ở cuối kích thước thay vì `px` để cho biết rằng kích thước tính bằng pixel.

Như ví dụ ban đầu các bạn đã xem:

```html
<img
  src="/assets/image.jpg"
  srcset="/assets/image-320.jpg 320w, /assets/image-640.jpg 640w, /assets/image-1280.jpg 1280w"
  sizes="(max-width: 320px) 280px, (max-width: 640px) 640px, 1280px"
  alt="image"
/>
```

Trong ví dụ trên, chúng ta có ba đường dẫn hình ảnh: `/assets/image-320.jpg`, `/assets/image-640.jpg` và `/assets/image-1280.jpg`.

- Nguồn của hình ảnh đầu tiên là `/assets/image-320.jpg` và chiều rộng `320px`.
- Nguồn của hình ảnh thứ hai là `/assets/image-640.jpg` và chiều rộng `640px`.
- Nguồn của hình ảnh thứ ba là `/assets/image-1280.jpg` và chiều rộng `1280px`.

Vì vậy, bây giờ chúng ta có một tập hợp các hình ảnh với các kích cỡ khác nhau, nhưng làm cách nào để chúng ta cho trình duyệt biết hình ảnh nào sẽ sử dụng <Twemoji emoji="thinking-face" />?

Cùng mình đọc tiếp phấn `sizes` nhé!!! 

## Ý nghĩa khi sử dụng thuộc tính sizes

Thuộc tính `size` xác định một tập hợp các điều kiện và giúp trình duyệt quyết định hình ảnh nào sẽ sử dụng khi các điều kiện được đáp ứng.

```html
sizes="(max-width: 320px) 280px, (max-width: 640px) 640px, 1280px"
```

Mỗi điều kiện được phân tách bằng **dấu phẩy** và được xây dựng với các phần sau:

- **media condition** - một tập hợp các tính năng và giá trị phương tiện để xác định điều kiện (ví dụ: `(max-width: 320px)`).Lưu ý rằng điều kiện được đặt trong dấu ngoặc đơn, giống như truy vấn phương tiện **css**. Trong trường hợp này, điều kiện là chiều rộng của khung nhìn _nhỏ hơn hoặc bằng `320px`_.
- **space**: `Khoảng trắng`
- **size** - `kích thước` của hình ảnh sẽ sử dụng khi đáp ứng điều kiện (ví dụ: `280px`).

Và đây là các bước để trình duyệt quyết định hình ảnh nào sẽ sử dụng:

1. Nhìn vào kích thước màn hình của thiết bị.
2. Xem thuộc tính `size` và tìm điều kiện đầu tiên phù hợp với kích thước màn hình của thiết bị.
3. Sử dụng kích thước được xác định trong điều kiện để tìm nguồn hình ảnh có cùng kích thước trong thuộc tính `srcset`, nếu không có, nó sẽ sử dụng hình ảnh đầu tiên lớn hơn kích thước được xác định trong điều kiện.
4. Tải hình ảnh và hiển thị nó.

Vậy là xong, chúng ta đã tối ưu được kích thước hình ảnh, tốc độ tải hình ảnh trên các thiết bị, màn hình khác nhau <Twemoji emoji="party-face" />.

Hãy xem lại ví dụ ở trên, giả sử chúng ta đang sử dụng điện thoại di động có kích thước màn hình rộng `400px`.

- Điều kiện đầu tiên phù hợp với màn hình đó là `(max-width: 640px)`.
- Kích thước được xác định trong điều kiện là `640px`.
- Nguồn hình ảnh có cùng kích thước trong thuộc tính `srcset` là `/assets/image-640.jpg`.
- Trình duyệt sẽ tải hình ảnh và hiển thị nó.

## Bonus thêm khi sử dụng srcset và sizes

- Đối với thuộc tính `sizes`, bạn có thể sử dụng `vw` thay vì `px` để xác định kích thước. Điều này hữu ích khi bạn muốn sử dụng chiều rộng khung nhìn làm kích thước.
Ví dụ: Một màn hình sẽ có độ rộng là `100vw`, nếu bạn muốn hình ảnh có độ rộng `50%` màn hình, bạn có thể sử dụng `50vw` làm kích thước.

- Kết hợp `srcset` & `sizes` với `loading` có giá trị là `lazy` để cải thiện hiệu suất.
Khi thuộc tính `loading` được đặt thành `lazy`, trình duyệt sẽ không tải hình ảnh cho đến khi nó hiển thị trong chế độ xem. Điều này hữu ích khi bạn có nhiều hình ảnh trên trang và bạn muốn cải thiện hiệu suất của trang.

- Tốt hơn nên thêm các thuộc tính `width` và `height` vào phần tử `img`.
Khi các thuộc tính `width` và `height` được thêm vào phần tử `img`, trình duyệt sẽ dành không gian cho hình ảnh trước khi nó được tải.
Điều này hữu ích để ngăn chặn sự thay đổi bố cục và cải thiện trải nghiệm cho khách truy cập của bạn.

- Và đừng quên thêm ảnh dự phòng với thuộc tính `src`.
Khi trình duyệt không hỗ trợ các thuộc tính `srcset` và `size`, nó sẽ sử dụng nguồn hình ảnh được xác định trong thuộc tính `src`.

Cuối cùng, phần tử `img` sẽ trông như thế này:

```html
<img
	src="/assets/image.jpg"
	srcset="/assets/image-320.jpg 320w, /assets/image-640.jpg 640w, /assets/image-1280.jpg 1280w"
	size="(max-width: 320px) 280px, (max-width: 640px) 640px, 1280px"
	loading="lazy"
	alt="image alt text"
	width="1280"
	height="720"
/>
```

Cảm ơn bạn đã đọc và hi vọng bài viết này sẽ hữu ích cho bạn!