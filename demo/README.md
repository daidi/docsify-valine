# docsify-valine
A fast, simple & powerful comment system for docsify. 

docsify-valine will allow you to use a fast, simple & powerful comment system [valine](https://github.com/xCss/Valine) on your [docsify](https://docsify.js.org/#/) pages.

## Demo

we provide you a simple demo page [here](https://daidi.github.io/docsify-valine/demo/#/) , so you can see how it works.

the code refers to `demo` folder which you can find in the GitHub repo.

## 🚧 Install

### Get APP_ID and APP_Key

[Click here](https://console.leancloud.app/login.html#/signin) to register or login in `leancloud`.  (for chinese user , click [这里](https://leancloud.app/dashboard/login.html#/signup) )

[Click here](https://console.leancloud.app/applist.html#/newapp) Create new application in `Leancloud`, and you will get `APP ID`/`APP Key`. (for chinese user , click [这里](https://leancloud.cn/dashboard/applist.html#/newapp) )

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

See the [Config](https://valine.js.org/en/configuration.html) for more details.
