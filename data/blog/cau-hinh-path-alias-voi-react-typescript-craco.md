---
title: 'Cấu hình Path Alias với React, Typescript, Craco'
date: '2023-04-05'
tags: ['frontend', 'dev', 'chia-se']
draft: false
summary: 'Hướng dẫn từng bước của mình chỉ cho bạn cách cấu hình Path Alias với React, Typescript, Craco để làm cho đường dẫn import clean hơn, dễ dàng sắp xếp cơ sở mã của mình và giúp người khác hiểu.'
images: ['/static/images/blog-banner/cau-hinh-path-alias-voi-react-typescript-craco.jpg']
authors: ['default']
lastmod: '2023-04-05'
---

![thumbnail-image Cấu hình Path Alias với React, Typescript, Craco](/static/images/blog-banner/cau-hinh-path-alias-voi-react-typescript-craco.jpg)

## Vấn đề 

Khi dự án `Typescript React` của bạn phát triển với mọi thứ được phân tách gọn gàng trong thư mục riêng của chúng và quy trình import bắt đầu trở nên lộn xộn. Điều này đặc biệt đúng nếu chúng ta đang theo một cấu trúc dự án như thế này:

![Cấu trúc dự án mẫu](/static/images/blog-banner/structor-base.png)

và để bạn có thể import `Button.tsx` vào `TodoItem.tsx`, câu lệnh import sẽ giống như thế này:

```typescript
import React from 'react';
import { Button } from '../../../components/elements/Button';

export const TodoItem = () => {
  return <div></div>;
};
```

Mọi thứ đang có vẻ hoạt động tốt, **Nhưng** vấn đề ở đây là bạn đang thực hiện quá nhiều ../../../ trong đường dẫn và điều này có thể kéo dài hơn nếu bạn cần `import` từ cấp cấu trúc sâu hơn. 

Điều này đặc biệt khó chịu vì không phải lúc nào bạn cũng import từ cùng một cấp độ và hơn nữa nếu bạn thay đổi vị trí của `Button.tsx` thì sao? Lúc này bạn phải rà soát lại toàn bộ những nơi có sử dụng `Button.tsx` và tiến hành sửa lại. Đúng là `intellisense` trong Vscode sẽ giúp bạn import một cách dễ dàng nhưng điều này là tốn quá nhiều thời gian.

Đó là lí do mà bạn nên **Cấu hình Path Alias** ngay từ ban đầu trong dự án **React** của bạn.

## Giải pháp mang tên Path Alias

Việc **Cấu hình Path Alias** ​​sẽ giúp bạn có cách import rõ ràng hơn trong `React`. Thay vì bạn dùng một đường dẫn `relative` như thế này **../../../components/elements/Button**, bạn có thể cấu hình một **alias** (nôm na bạn có thể hiểu như một **biến**: biến này sẽ đại diện cho đường dẫn đến `Button.tsx`) và nó sẽ trông như thế này:

```typescript
import React from 'react';
import { Button } from '@/components/elements/Button';

export const TodoItem = () => {
  return <div></div>;
};
```

Cái hay của điều này là bất kể bạn đang ở mức độ sâu nào, câu lệnh import của bạn sẽ luôn giống nhau.

## Path Alias là dì?

`Path Alias`(**Bí danh đường dẫn**) trong `Typescript` cho phép bạn xác định một từ hoặc một đường dẫn để biểu thị một đường dẫn tuyệt đối trong dự án.

Vì vậy, trong trường hợp mình đã nói ở trên, chúng ta đang muốn đại diện `./src` bằng `alias `(**bí danh**) `@/`.

## Cấu hình alias

Để **cấu hình `alias`**, trước tiên bạn cần một tệp mới có tên là `tsconfig.paths.json` ở thư mục gốc của dự án (không phải bên trong ./src).

Bạn hãy thêm cấu hình sau vào tệp vừa tạo:

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": [
                "./src/*"
            ]
        }
    }
}
```

Để có thể sử dụng cấu hình này trong dự án của bạn, bạn sẽ cần cấu hình nó trong tệp `tsconfig.json` của bạn, tệp này cũng nằm ở thư mục gốc của dự án.

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ],
  "extends": "./tsconfig.paths.json" // 👈 add this line
}
```

**Tại sao chúng ta không nên đưa trực tiếp cấu hình ở `tsconfig.paths.json` vào `tsconfig.json`?**

Điều này là do khi khởi động, `React` (và sau đó là `Craco`) sẽ dọn dẹp `tsconfig.json` để chỉ giữ lại cấu hình mà nó dự kiến ​​sẽ ở đó để nó hoạt động bình thường. `paths` thuộc tính là một trong những thuộc tính mà nó xóa khi khởi động.

Việc tạo `tsconfig.paths.json` và thêm nó vào `tsconfig.json` sẽ giúp bạn giải quyết vấn đề đó.

## Kiểm tra Path Alias đã hoạt động chưa?

Bạn có thể nhận thấy ngay rằng `intellisense` sẽ giải quyết **bí danh đường dẫn** mà bạn đã xác định nhưng quá trình import dường như đã hoạt động.

![Path Alias đã hoạt động chưa?](/static/images/blog-banner/6PcUg3qCjK.gif)

Tuy nhiên, khi bạn sử dụng component `Button`

```typecsript
import React from 'react';
import { Button } from '@/components/elements/Button';

export const TodoItem = () => {
  return (
    <div>
      <Button onClick={() => {}} label='Click Me' />
    </div>
  );
};
```

Lỗi này sẽ xuất hiện:

![Lỗi khi Path Alias chưa hoạt đông bình thường](/static/images/blog-banner/error-complier.png)

**Chuyện dì đang xảy ra?**

Chúng ta còn cần thực hiện cấu hình bổ sung cho **CRA**([Create React App](https://react.dev/learn/start-a-new-react-project)).

## Giả quyết lỗi Alias trong CRA (Create React App)

Về cơ bản, CRA đang sử dụng [webpack](https://webpack.js.org/).

Những gì chúng ta cần làm là sửa đổi cấu hình `webpack` đó để nó giải quyết `alias` mà chúng ta vừa xác định trong `tsconfig.json` của mình.

Có nhiều cách để làm được điều đó, nhưng cách thuận tiện nhất và cách mình khuyên dùng sẽ là [Craco](https://www.npmjs.com/package/@craco/craco).

## Craco và cách sử dụng nó

CRACO là một gói giúp bạn ghi đè cấu hình của `CRA` mà không cần phải [eject](https://create-react-app.dev/docs/available-scripts/#npm-run-eject).

### Cài đặt Craco

Các bạn sử dụng lệnh này để cài đặt gói nếu bạn dùng `yarn`:

```bash
yarn add @craco/craco
```

hoặc nếu bạn sử dụng `npm`:

```bash
npm i @craco/craco
```

### Ghi đè cấu hình Webpack

Tạo `craco.config.js` tại thư mục gốc của dự án của bạn. (**không phải** bên trong `src/`)

![Vị trí của tệp craco.config.js trong dự án của bạn.](/static/images/blog-banner/craco-file-place.png)

Và thêm vào đó đoạn mã này:

```typescript
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```

### Thay đổi react scripts thành craco

Trong tệp `package.json`, hãy thay đổi `react-scripts` thành `craco` cho mỗi lệnh `start`, `build`, `test` và `eject`.

```json
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
 }
 ```

 Và sau đó nếu ứng dụng của bạn đang chạy, bạn cần phải khởi động lại ứng dụng của bạn để ứng dụng có thể sử dụng `craco` để khởi động.

 ## Khởi động ứng dụng với script của Craco

 Nó sẽ không khác dì so với lúc bình thường bạn khởi động dự án của bạn.

Sử dụng `yarn`:

```bash
yarn start
```
hoặc `npm`:

```bash
npm start
```

 Và lần này, ứng dụng `React` của bạn sẽ không đưa ra bất kỳ lỗi nào!

 ## Tóm lại

 Trong bài viết này, mình đã hướng dẫn cho các bạn hiểu và cấu hình Path Alias trong ứng dụng React với Typescript và Craco. Path Alias là một cách rất tốt để có các lệnh import nhất quán hơn trong các dự án `Typecript` của bạn.

 Cảm ơn các bạn đã đọc.
