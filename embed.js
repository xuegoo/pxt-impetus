!function(){if(!window.ksRunnerInit){var n=["/pxt-impetus/highlight.js/highlight.pack.js","/pxt-impetus/bluebird.min.js","/pxt-impetus/semantic.js","/pxt-impetus/marked/marked.min.js","/pxt-impetus/target.js","/pxt-impetus/pxtembed.js"];"undefined"==typeof jQuery&&n.unshift("/pxt-impetus/jquery.js");var e=[];window.ksRunnerReady=function(n){null==e?n():e.push(n)},window.ksRunnerWhenLoaded=function(){pxt.docs.requireHighlightJs=function(){return hljs},pxt.setupWebConfig(window.pxtWebConfig),(pxt.runner.initCallbacks=e).push(function(){e=null}),pxt.runner.init()},n.forEach(function(n){var e=document.createElement("script");e.src=n,e.async=!1,document.head.appendChild(e)})}}();