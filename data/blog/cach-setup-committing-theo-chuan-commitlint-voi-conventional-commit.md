---
title: 'Cách setup committing theo chuẩn commitlint với conventional commit'
date: '2023-04-02'
tags: ['dev', 'chia-se']
draft: false
summary: 'Conventional commit là một hình thức cam kết cụ thể mang lại cho các nhà phát triển phần mềm một hệ thống thống nhất để tổ chức và mô tả các thay đổi của họ, giúp theo dõi các bản cập nhật dễ dàng hơn'
images: ['/static/images/blog-banner/cach-setup-committing-theo-chuan-commitlint-voi-conventional-commit.jpg']
authors: ['default']
lastmod: '2023-04-06'
---

![thumbnail-image 10 lý do thuyết phục bạn nên xây dựng trang web riêng](/static/images/blog-banner/cach-setup-committing-theo-chuan-commitlint-voi-conventional-commit.jpg)

## Conventional commit là dì?

![Conventional commit là dì? Tại sao cần sử dụng nó?](/static/images/blog-banner/git-conventional-commits.png)

Conventional commit là một hình thức cam kết cụ thể cung cấp cho các nhà phát triển phần mềm một hệ thống thống nhất để tổ chức và mô tả các thay đổi của họ, giúp theo dõi các bản cập nhật dễ dàng hơn. Loại cam kết này thường tuân theo một định dạng nghiêm ngặt và nhất quán, giúp dễ hiểu những thay đổi nào đã được thực hiện và tại sao.

Conventional commit thường tuân theo một định dạng cụ thể, chẳng hạn như:

```bash
<type>[optional scope]: <description>
```

Trong định dạng trên: 

`type` phải là một trong các loại phổ biến nhất như sau:

- **feat**: một tính năng hoặc bổ sung được thêm mới cho dự án.
- **fix**: sửa lỗi.
- **refactor**: tái cấu trúc mã hoặc thay đổi cơ sở hạ tầng dự án.
- **style**: thay đổi định dạng, khoảng trắng, v.v.
- **docs**: thay đổi tài liệu.
- **perf**: thay đổi mã giúp cải thiện hiệu suất.
- **chore**: những thay đổi nhỏ, chẳng hạn như cập nhật phiên bản phụ thuộc, sửa lỗi đánh máy, v.v.

 Ngoài ra, bạn có thể tùy chỉnh `type` theo cấu hình riêng của bạn. Bạn có thể xem chi tiết hơn tại [Tùy chỉnh commitlint](https://github.com/conventional-changelog/commitlint/#config) 

`optional scope` là tùy chọn và được sử dụng để chỉ ra phần dự án đã được thay đổi, chẳng hạn như **api** , **ui** , v.v.

`description` là một đoạn mô tả ngắn về sự thay đổi, nó nên được viết ở thể mệnh lệnh, chẳng hạn như `change` thay vì `changed` hoặc `changes`.

Ví dụ:

```bash
feat(ui): mô tả ngắn phần được thêm mới
```

hoặc

```bash
fix: mô tả ngắn phần được sửa lỗi
```

## Lý do chúng ta sử dụng conventional commit

Conventional commit giúp đảm bảo rằng các `commit` được tổ chức và nhất quán. Điều này giúp bạn và team dễ dàng đọc và hiểu những thay đổi nào đã được thực hiện và tại sao. Nó cũng giúp dễ dàng theo dõi và hiểu các vấn đề liên quan cũng như pull request.

Bằng cách tuân theo định dạng `conventional commit`, nếu bạn làm việc cùng team, các thành viên có thể dễ dàn tạo ra các `commit` tuân theo cùng cấu trúc và định dạng. Điều này giúp dễ dàng xem xét và hiểu các thay đổi đã được thực hiện, cũng như đảm bảo rằng các thay đổi được ghi lại theo cùng một cách mỗi lần.

Ngoài ra, `conventional commit` là một cách tuyệt vời để giữ cho source code của dự án được tổ chức và nhất quán. Điều này giúp đảm bảo rằng source code dễ bảo trì và dễ đọc, cũng như giảm lượng thời gian dành cho việc gỡ lỗi và tái cấu trúc.

## Setup conventional commit cho dự án của bạn

Chúng ta sẽ bắt đầu setup conventional commit cho dự án bằng cách sử dụng `husky` và `commitlint`

### Cài đặt commitlint và các dependencies:

```bash
 npm install -g @commitlint/cli @commitlint/config-conventional
```

### Thêm tệp cấu hình commitlint vào dự án:

Sử dụng lệnh này để tạo tệp cấu hình với cấu hình cơ bản:

```bash
 echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

Nội dung của tệp `commitlint.config.js` như sau:

```js
module.exports = { extends: ['@commitlint/config-conventional'] }
```

### Thêm husky vào các commit trước khi chúng được tạo:

Đầu tiên các bạn chạy lệnh sau:

```bash
 npm install husky --save-dev
```

Sau đó các bạn kích hoạt `husky` với lệnh:

```bash
 npx husky install
```

Sau khi lệnh chạy xong bạn sẽ thấy thông báo như sau:

```bash
husky - Git hooks installed
```

và trong thư mục gốc của bạn sẽ xuất hiện một folder mới tên là `.husky`.

Cuối cùng, để tự động hóa việc cài đặt các hooks của `husky` sau khi cài đặt các dependencies, bạn nên thêm vào file **package.json** một `script` như sau:

```json
"scripts": {
	"huskyinstall": "husky install"
}
```

### Thêm commit-msg hook vào các commit

Các bạn chạy dòng lệnh sau:

```bash
 npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

Bạn sẽ thấy một tệp `commit-msg` được tạo trong thư mục `.husky`.

Chúc mừng bạn!! Bây giờ, khi bạn commit, `commitlint` sẽ kiểm tra commit của bạn và luôn đảm bảo rằng commit đó sẽ tuân theo định dạng của `conventional commit`.

Bạn có thể thử một commit ngay bây giờ, giả sử:

```bash
 git commit -m "Using commitlint and husky to lint commits"
```

Commit sẽ không thành công với lỗi bên dưới:

```bash
⧗   input: Using commitlint and husky to lint commits
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```

Như bạn có thể thấy, commitlint đã phát hiện ra rằng `commit` không tuân theo định dạng `conventional commit` và đã cung cấp một thông báo lỗi kèm theo giải pháp cho bạn tại đường dẫn [what-is-commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint).


Một ví dụ để commit có thể thông qua:

```bash
 git commit -m "feat: add commitlint and husky to lint commits"
```

Và chúc mừng, commit của bạn sẽ thành công với thông báo:

```bash
[main b40785f] feat: using husky to lint commits
	3 files changed, 27 insertions(+)
	create mode 100755 .husky/commit-msg
```

## Kết luận

Conventional commit là một cách tuyệt vời để đảm bảo rằng các commit được tổ chức và nhất quán. Bằng cách tuân theo định dạng cam kết thông thường, các nhóm có thể dễ dàng tạo các commit tuân theo cùng cấu trúc và định dạng, giúp dễ dàng xem lại và hiểu các thay đổi đã được thực hiện.

Do đó, điều quan trọng là sử dụng loại commit này khi phát triển dự án để các thay đổi được ghi lại và theo dõi tốt.

{/* nên update tiếp bằng https://viblo.asia/p/nang-cao-chat-luong-code-va-hieu-qua-lam-viec-nhom-voi-husky-lint-staged-commitlint-4dbZNnMnZYM#_commit-theo-chuan-voi-commitlint-6 */}
