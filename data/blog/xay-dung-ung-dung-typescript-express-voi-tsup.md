---
title: 'Xây dựng ứng dụng Typescript Express với Tsup'
date: '2023-04-06'
tags: ['backend', 'dev']
draft: false
summary: 'Hãy quên nodemon hoặc ts-node, Tsup sẽ là lựa chọn tốt hơn để đóng gói thư viện Typescript của bạn mà không cần cấu hình. '
images: ['/static/images/blog-banner/xay-dung-ung-dung-typescript-express-voi-tsup.jpg']
authors: ['default']
lastmod: '2023-04-06'
---

![thumbnail-image Xây dựng ứng dụng Typescript Express với Tsup](/static/images/blog-banner/xay-dung-ung-dung-typescript-express-voi-tsup.jpg)

## Tsup là dì? Tại sao nên chọn nó? 

Trước khi mình biết đến **tsup** thì các thư viện mình hay sử dụng để đóng gói như `ts-node` hoặc `nodemon` nhưng bây giờ thì sự lựa chọn hoàn hảo mà bản thân mình đánh giá là `tsup`. 

`Tsup` được hỗ trợ bởi [esbuild](https://github.com/evanw/esbuild). 

Nếu trước đây các bạn đã từng thiết lập một ứng dụng `express` với `typescript`, thì rất có thể bạn sẽ phải đau đầu khi sử dụng các công cụ như tsc, ts-node, nodemon, v.v. Hơn nữa nếu bạn có bất kỳ cấu hình **path alias** nào trong dự án của mình, thì các bạn cũng phải thực hiện rất nhiều bước nữa đúng không?

Nhưng với `tsup` thì không, **các bạn không cần phải cấu hình để nó có thể hoạt động**.

Đó cũng chính là lý do để các bạn có thể nghĩ đến `tsup` bởi **hiệu suất và tính dễ sử dụng** của nó. Bằng cách sử dụng `esbuild`, `tsup` có thể nhanh chóng đóng gói mã `typescript ` của bạn, làm cho nó trở thành lựa chọn tuyệt vời cho các dự án lớn hoặc thực sự theo mình nghĩ thì là cho tất cả các dự án `typescript`!

Ngoài ra, `tsup` còn tích hợp một `flag` là `onSuccess`, điều này loại bỏ cho chúng ta không cần phải cài đặt `nodemon`.

## Khởi tạo ứng dụng TypeScript Express với Tsub

Bây giờ mình sẽ hướng dẫn các bạn các bước **xây dựng ứng dụng Typescript Express với Tsup** xem nó có thể nhanh đến mức nào nhé!

### Tạo dự án mới

Để tạo một dự án mới, các bạn có thể bắt đầu bằng cách tạo một thư mục mới và điều hướng đến nó trong terminal:

```bash
mkdir my-app
cd my-app
```

### Tạo tệp package.json

Tiếp theo, các bạn cần khởi tạo dự án `Node` của mình. Ở đây mình đang sử dụng `yarn`, nhưng bạn có thể sử dụng `npm` hoặc `pnpm` nếu bạn muốn.

Để khởi tạo tệp `package.json` cho dự án bằng `yarn`, hãy chạy lệnh sau trong `terminal`:

```bash
yarn init -y
```

Điều này sẽ tạo một tệp `package.json` mới trong thư mục gốc của dự án với các giá trị mặc định.

### Cài đặt các dependencies và dev dependencies

**1. Dependencies(Phần phụ thuộc)**

Các bạn tiến hành cài đặt `express` cho dự án với lệnh:

```bash
yarn add express
```

**2. Dev dependencies(Phần phụ thuộc của nhà phát triển)**

Để sử dụng `Typescript` với `Express`, chúng ta cần cài đặt các gói `@types/express` và `typescript` và tất nhiên chúng ta cũng sẽ sử dụng `tsup` để đóng gói mã `typescript` của mình, vì vậy chúng ta cần cài đặt chúng vào phần phụ thuộc của nhà phát triển.

```bash
yarn add -D typescript tsup @types/express 
```

### Tạo tệp index.ts tại thư mục src

Bây giờ các bạn đã cài đặt tất cả các phụ thuộc của mình, Tiếp theo, hãy tạo một thư mục mới có tên `src` trong thư mục gốc của dự án của bạn và tạo một tệp mới có tên `index.ts` bên trong nó bằng lệnh sau:

```bash
mkdir src
touch src/index.ts
```

Trong tệp `index.ts` các bạn thêm một đoạn code đơn giản như sau:

```typescript
import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

### Thêm script "dev" vào package.json

Cuối cùng, các bạn muốn đóng gói và chạy được mã của mình, cũng như theo dõi mọi thay đổi trong code của bạn.

Để thực hiện việc này, các bạn cần thêm script `dev` vào tệp `package.json` để khởi động ứng dụng `Express` của bạn ở chế độ phát triển.

Mở `package.json` và thêm tập lệnh sau vào "scripts":

```json
"scripts": {
    "dev": "tsup src/index.ts --watch --onSuccess 'node dist/index.js'"
}
```

Trong tập lệnh trên:

- **tsup src/index.ts:** thông báo cho `tsup` rằng tệp được nhập của bạn tại đường dẫn `src/index.ts`, nó sẽ xuất mã được gói trong `dist` thư mục với một `index.js` tệp duy nhất.

- **--watch:** sẽ làm cho `tsup` liên tục theo dõi bất kỳ thay đổi nào trong code của bạn và chạy lại mã.

- **--onSuccess:** là một đối số của những gì các bạn muốn chạy sau khi `tsup` đã đóng gói thành công và trong trường hợp này, mình muốn khởi động ứng dụng nhanh của mình bằng lệnh `node dist/index.js`

Các bạn có thấy toàn bộ thiết lập này thật tuyệt vời không? Chỉ với một lệnh duy nhất, chúng ta không còn cần sử dụng `nodemon` để xem các thay đổi của mình nữa và tích hợp nó với `ts-node` một cách phức tạp để đóng gói mã, chưa kể việc **biên dịch tsup nhanh hơn ts-node**!

> ⚠️ Lưu ý rằng mình không định cấu hình tsconfig.json và trong trường hợp này, tsup sẽ sử dụng tsconfig mặc định. Nếu bạn có bất kỳ cấu hình tùy chỉnh nào như `path alias`, thì bạn có thể tạo tsconfig của riêng mình và thay vào đó, tsup sẽ đọc cấu hình tùy chỉnh của bạn.

### Chạy ứng dụng của bạn

Để chạy ứng dụng của bạn ở chế độ phát triển, giờ đây chúng ta có thể chỉ cần chạy lệnh sau trong terminal:

```bash
yarn dev
```

Thao tác này sẽ khởi động ứng dụng Express của bạn và bạn có thể kiểm tra ứng dụng này bằng cách truy cập http://localhost:3000 trong trình duyệt web của mình.

### Building production

Nó thực sự không khác nhiều so với `dev script`, vì vậy chúng ta có thể thêm `build script` như sau:

```json
"scripts": {
    "dev": "tsup src/index.ts --watch --onSuccess 'node dist/index.js'",
    "build": "tsup src/index.ts"
}
```

sau đó chạy lệnh:

```bash
yarn build
```

Trong cùng thư mục `/dist` trước đó, chúng ta sẽ có tệp `index.js` được đóng gói. Sự khác biệt duy nhất ở đây là chúng ta sẽ không theo dõi các thay đổi của tệp cũng như không chạy mã được gói.

## Tóm lại

Chúng ta đã xem cách **xây dựng ứng dụng TypeScript Express bằng `tsup`** và cách ứng dụng này có thể đáp ứng cả nhu cầu `development` và `production` của chúng ta. Trong các hướng dẫn sau, mình sẽ giải thích cách chúng ta có thể tùy chỉnh thêm cấu hình của mình để phù hợp với nhiều trường hợp sử dụng, chẳng hạn như cấu hình `path alias`!

Cảm ơn các bạn đã đọc hết bài viết này.