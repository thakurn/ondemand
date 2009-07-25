{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fswiss\fcharset0 Courier New;}{\f1\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1515;}\viewkind4\uc1\pard\tx0\tx959\tx1918\tx2877\tx3836\tx4795\tx5754\tx6713\tx7672\tx8631\f0\fs20\par
//NILESH THAKUR\par
(function() \{\par
 \par
    // used to prevent browser caching of .js file with main application logic\par
    var randomNumber = Math.floor( Math.random() * 999999 );\par
 \par
    // URL builder helper\par
    function appURL(relativePath) \{\par
      var basePath = 'http://github.com/thakurnilesh/oracle-crm-ondemand-extension/raw/master';\par
         return basePath + relativePath;\par
    \}\par
    \par
    function loadScripts(scripts) \{\par
    \par
        if (typeof scripts !== 'object') \{\par
            alert('loadScripts(scripts) without array argument');\par
        \}\par
    \par
        if (scripts.length === 0) \{\par
            return;\par
        \}\par
        \par
        // pull off 1st script in array\par
        var scriptDefinition = scripts.shift();\par
    \par
        // build script tag\par
        var headElement = document.getElementsByTagName("head")[0];\par
        var scriptElement = document.createElement('script');\par
        scriptElement.type = 'text/javascript';\par
        scriptElement.src = scriptDefinition.url;\par
        \par
        var scriptLoadCompletedFunction = function() \{\par
 \par
            // execute callback function\par
            if (typeof scriptDefinition.callback === 'function') \{\par
                scriptDefinition.callback.call(this, scriptDefinition);\par
            \}\par
            \par
            // load the rest (tail of array) of the scripts\par
            loadScripts(scripts);\par
        \};\par
        \par
        scriptElement.onload = scriptLoadCompletedFunction;\par
        \par
        // for ie\par
        scriptElement.onreadystatechange = function () \{\par
            if (scriptElement.readyState == 'loaded' || scriptElement.readyState == 'complete') \{\par
                scriptLoadCompletedFunction();\par
            \}\par
        \}\par
 \par
        // add script tag\par
        headElement.appendChild(scriptElement);\par
    \}\par
 \par
    // scripts to load\par
    var scriptDefinitions = [\par
        \{\par
            name: 'json2',\par
            url: 'http://www.json.org/json2.js'\par
        \},\par
        \{\par
            name: 'firebugx',\par
            url: 'http://fbug.googlecode.com/svn-history/r3153/lite/branches/firebug1.1/firebugx.js',\par
            callback: function(scriptDefinition) \{ console.log('loaded ' + scriptDefinition.name); \}\par
        \},\par
        \{\par
            name: 'jquery',\par
            url: 'http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js',\par
            callback: function() \{ jQuery.noConflict(); \}\par
        \},\par
        \{\par
            name: 'ondemand - common',\par
            url: appURL("/common/javascripts/ondemand_common.js") + '?' + randomNumber\par
        \},\par
        \{\par
            name: 'application',\par
            url: appURL('/apps/app01/javascripts/application.js') + '?' + randomNumber\par
        \}\par
    ];\par
 \par
    loadScripts(scriptDefinitions);\par
 \par
\})();\par
\pard\f1\par
}
 