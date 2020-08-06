function docsifyValine(hook, vm) {

    hook.ready(function () {
        if (!window.Valine) {
            console.warn('please include `<script src=\'//unpkg.com/valine/dist/Valine.min.js\'></script>` before init $docsify');
        }
    });

    hook.mounted(function () {
        var a = Docsify.dom;
        var n = a.create("div");
        n.id = "vcomments";
        var i = a.getNode("#main");
        n.style = "width: " + i.clientWidth + "px !important; margin: 0 auto 20px;", a.appendTo(a.find(".content"), n);
    })

    hook.doneEach(function () {
        vm.config.Valine = vm.config.Valine || {}
        var options = Object.assign({
            el: '#vcomments',
            path: location.pathname + location.hash.replace(/\?.+/, ""),
        }, vm.config.Valine)
        if (!options.appId || !options.appKey) {
            console.warn('sorry , appId and appKey must be required .');
            return
        }
        new Valine(options)
    })
}

window.$docsify = window.$docsify || {};
window.$docsify.plugins = [docsifyValine].concat(window.$docsify.plugins || []);
