# docsify-valine
A fast, simple & powerful comment system for docsify. 

docsify-valine will allow you touse a fast, simple & powerful comment system [valine](https://github.com/xCss/Valine) on your [docsify](https://docsify.js.org/#/) pages.

## 🚧 Install

### Get APP_ID and APP_Key

[Click here](https://leancloud.cn/dashboard/login.html#/signup) to register or login in `leancloud`.  

[Click here](https://leancloud.cn/dashboard/applist.html#/newapp) Create new application in `Leancloud`, and you will get `APP ID`/`APP Key`.

### JS structure

Please include the following JS code in the appropriate location on the article page that requires the comment box:

```html
<body>
    ...
    <script>
        window.$docsify = {
          // docsify-valine (defaults)
          Valine: {
              appId: '<APP_ID>',
              appKey: '<APP_Key>'
          }
        }
    </script>
    ...
    <script src='//unpkg.com/valine/dist/Valine.min.js'></script>
    <script src="//unpkg.com/docsify-valine/dist/docsify-valine.min.js"></script>
</body>
```

See the [Config](/en/configuration.html) for more details.