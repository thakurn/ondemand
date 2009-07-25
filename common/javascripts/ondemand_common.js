{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fswiss\fcharset0 Courier New;}{\f1\fswiss\fcharset0 Arial;}}
{\*\generator Msftedit 5.41.15.1515;}\viewkind4\uc1\pard\tx0\tx959\tx1918\tx2877\tx3836\tx4795\tx5754\tx6713\tx7672\tx8631\f0\fs20 //NILESH THAKUR\par
(function() \{\par
 \par
function OnDemandLib() \{\}\par
 \par
OnDemandLib.prototype.admin = \{\par
    userName: 'MERCKTEST_CTE01/pfeil',\par
    password: 'method00'\par
\};\par
 \par
//\par
// Charles's JavaScript Library for CRM On Demand R16\par
//\par
// All the things that are fun to do.\par
//\par
// Revision history\par
//\par
// 1.01: 2009 05 13 First Release\par
// 1.02: 2009 05 16 Convert text buttons from simple <a> to <div> with\par
// on mouse click to avoid formatting issues with IE\par
// 1.03: 2009 05 22 Added ability to delete buttons\par
// 1.04: 2009 05 xx Code contributed by Duane Nelson\par
// 2.01: 2009 06 03 Branch by Charles, add login function from Chris Stuart\par
//\par
 \par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE: hide_detailchild_applet()\par
//\par
// This code is used to hide the web applet that holds the java script\par
// Assumes we are the last one on a detail form. If not, edit third line below.\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.hide_detailchild_applet = function() \{\par
    var pn = document.getElementById("ChildAppletDiv");\par
    var tables = pn.getElementsByTagName("table");\par
    tables[tables.length - 1].style.display = "none";\par
\}\par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE: add_header_button()\par
//\par
// The next routine allows you to add push buttons to the top of an applet (either\par
// the main one or a related item applet).\par
//\par
// Parameters:\par
//\par
// section_name: The name that appears in the header in the UI.\par
// This probably doesn't work well with localized UIs.\par
// Sorry about that.\par
//\par
// position: Where in the header you want the button to appear.\par
// Before the first button is "2". Go figure.\par
//\par
// button_text: Text to show in a button\par
//\par
// URL: Where to go to if the button is pressed.\par
//\par
// target_window: Standard sorts of "_blank", "_top", etc. things\par
//\par
// features: typically "height=y,width=x", but anything window.open() supports\par
//\par
// Returns:\par
//\par
// true button was added\par
// false button was not added\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.add_header_button = function(section_name, position, button_text, url, target_window, features) \{\par
    var i;\par
    var ih0;\par
    var ih1;\par
    var tabs = document.getElementsByTagName("table");\par
 \par
    for (i = 0; i < tabs.length; i++) \{\par
        var td = tabs[i].getElementsByTagName("td");\par
        try \{\par
            // This can generate an exception we ignore, if so it means\par
            // it's not the ones we're looking for\par
            ih0 = td[0].innerHTML;\par
            ih1 = td[1].innerHTML;\par
 \par
            if (ih0.indexOf(section_name) == 0 || ih1.indexOf(section_name) == 0) \{\par
                var tr = tabs[i].getElementsByTagName("tr");\par
                var newtd = tr[0].insertCell(position);\par
                // For some reason, using the DOM to build this up fails in IE, so we\par
                // have to use the hacky innerHTML instead.\par
                newtd.innerHTML = "<div class='buttonTD' " +\par
                    "onmouseover='toggleNavButton(this);' " +\par
                    "onmouseout='toggleNavButton(this);' " +\par
                    "onclick=\\"window.open('" + url + "', '" + target_window + "', '" + features + "');\\" >" +\par
                    button_text + "</div>";\par
                return true;\par
            \}\par
        \} catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
    return false;\par
\}\par
 \par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE: add_footer_button()\par
//\par
// The next routine allows you to add push buttons to the bottom of an applet (either\par
// the main one or a related item applet).\par
//\par
// Parameters:\par
//\par
// position: Where in the header you want the button to appear.\par
// Before the first button is "2". Go figure.\par
//\par
// button_text: Text to show in a button\par
//\par
// URL: Where to go to if the button is pressed.\par
//\par
// target_window: Standard sorts of "_blank", "_top", etc. things\par
//\par
// features: typically "height=y,width=x", but anything window.open() supports\par
//\par
// Returns:\par
//\par
// true button was added\par
// false button was not added\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
 \par
OnDemandLib.prototype.add_footer_button = function(position, button_text, url, target_window, features) \{\par
    var i;\par
    var ih;\par
    var mytables = document.getElementsByTagName("table");\par
 \par
    for (i = 0; i < mytables.length; i++) \{\par
        try \{\par
 \par
            if (mytables[i].getAttribute("class") == "footbar") \{\par
 \par
                // This can generate an exception we ignore, if so it means\par
                // it's not the ones we're looking for\par
                var mytr = mytables[i].getElementsByTagName("tr");\par
                var newtd = mytr[0].insertCell(position);\par
                // For some reason, using the DOM to build this up fails in IE, so we\par
                // have to use the hacky innerHTML instead.\par
                newtd.innerHTML = "<div class='buttonTD' " +\par
                    "onmouseover='toggleNavButton(this);' " +\par
                    "onmouseout='toggleNavButton(this);' " +\par
                    "onclick=\\"window.open('" + url + "', '" + target_window + "', '" + features + "');\\" >" +\par
                    button_text + "</div>";\par
                return true;\par
            \}\par
        \} catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
    return false;\par
\}\par
 \par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE: delete_button()\par
//\par
// This routine will delete a button from an On Demand applet. If you\par
// wish to replace a button, delete it and then insert a new one.\par
//\par
// Parameters:\par
//\par
// section_name: The name that appears in the header in the UI.\par
// This probably doesn't work well with localized UIs.\par
// Sorry about that.\par
//\par
// position: Where in the header you want the button to appear.\par
// The first button is "2".\par
//\par
// Returns:\par
//\par
// true button was deleted\par
// false button was not deleted\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.delete_button = function(section_name, position) \{\par
    var i;\par
    var ih;\par
    var tabs = document.getElementsByTagName("table");\par
    for (i = 0; i < tabs.length; i++) \{\par
        var td = tabs[i].getElementsByTagName("td");\par
        try \{\par
            // This can generate an exception we ignore, if so it means\par
            // it's not the ones we're looking for\par
            ih = td[1].innerHTML;\par
 \par
            if (ih.indexOf(section_name) == 0) \{\par
                var tr = tabs[i].getElementsByTagName("tr");\par
                tr[0].deleteCell(position);\par
                return true;\par
            \}\par
        \} catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
    return false;\par
\}\par
 \par
 \par
 \par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE hide_printer_friendly\par
// Removes the printer friendly link from the top of the page\par
// Not sure who cares, but the request happens from time to time\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.hide_printer_friendly = function() \{\par
 \par
    try \{\par
        var pf = document.getElementById('Printer_Friendly_Action');\par
        pf.style.display = "none";\par
    \}\par
    catch (e) \{\par
    \}\par
\}\par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE getLocal()\par
//\par
// returns true if a "uselocal" cookie is set indicating that code\par
// should use localhost (this is for debugging). If you use firefox,\par
// and you use firebug, there is an add-on called firecookie that allows\par
// you to inspect and change cookies. The first time the script is called\par
// it will set the use local cookie to false if there isn't one. Your code\par
// can call getLocal to get the cookie's value. With firecookie, you can\par
// change the value of the cookie to "true" to turn on local processing, etc.\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.getLocal = function() \{\par
    var value;\par
    var allcookies = document.cookie;\par
    var pos = allcookies.indexOf("uselocal=");\par
    if (pos != -1) \{\par
        var start = pos + 9;\par
        var end = allcookies.indexOf(";", start);\par
        if (end == -1) end = allcookies.length;\par
        value = allcookies.substring(start, end);\par
        if (value == "true") value = true;\par
        else value = false;\par
    \}\par
    else \{\par
        document.cookie = "uselocal=false";\par
        value = false;\par
    \}\par
    return value;\par
\}\par
 \par
 \par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE: replace_quickcreate_link()\par
//\par
// The next routine allows you to add push buttons to the top of an applet (either\par
// the main one or a related item applet).\par
//\par
// Parameters:\par
//\par
// link_name: The name that appears in the ...\par
//\par
// position: Where in the header you want the button to appear.\par
// Before the first button is "2". Go figure.\par
//\par
// button_text: Text to show in a button\par
//\par
// URL: Where to go to if the button is pressed.\par
//\par
// target_window: Standard sorts of "_blank", "_top", etc. things\par
//\par
// features: typically "height=y,width=x", but anything window.open() supports\par
//\par
// Returns:\par
//\par
// true button was added\par
// false button was not added\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.replace_quickcreate_link = function(linkname, url, target_window) \{\par
    var i;\par
    var ih;\par
    var mydiv = document.getElementById("Quick CreateDiv");\par
    var myanchors = mydiv.getElementsByTagName("a");\par
    for (i = 0; i < myanchors.length; i++) \{\par
        try \{\par
            if (myanchors[i].getAttribute("href").indexOf(linkname + "QuickCreate") != -1) \{\par
 \par
                // This can generate an exception we ignore, if so it means\par
                // it's not the ones we're looking for\par
 \par
                myanchors[i].setAttribute("href", url);\par
                myanchors[i].setAttribute("target", target_window);\par
                return true;\par
            \}\par
        \}\par
        catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
 \par
 \par
\}\par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE: trap_contact_new()\par
//\par
// The next routine allows you to add push buttons to the top of an applet (either\par
// the main one or a related item applet).\par
//\par
// Parameters:\par
//\par
// link_name: The name that appears in the ...\par
//\par
// position: Where in the header you want the button to appear.\par
// Before the first button is "2". Go figure.\par
//\par
// button_text: Text to show in a button\par
//\par
// URL: Where to go to if the button is pressed.\par
//\par
// target_window: Standard sorts of "_blank", "_top", etc. things\par
//\par
// features: typically "height=y,width=x", but anything window.open() supports\par
//\par
// Returns:\par
//\par
// true button was added\par
// false button was not added\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.trap_contact_new = function(url, target_window, features) \{\par
    var i = 0;\par
    var mydivs = document.getElementsByTagName("div");\par
    for (i = 0; i < mydivs.length; i++) \{\par
        try \{\par
            if (mydivs[i].getAttribute("onclick").indexOf("DefContactInsert") != -1) \{\par
                mydivs[i].setAttribute("onclick", "window.open('" + url + "', '" + target_window + "', '" + features + "');");\par
                return true;\par
            \}\par
        \}\par
        catch (ex) \{\par
            // you really don't want to enable this unless at wits end\par
            // alert("Exception! " + ex.toString());\par
        \}\par
    \}\par
\}\par
 \par
 \par
OnDemandLib.prototype.hide_global_applet = function(appletname) \{\par
    // Hide my element of the action bar ... note that you need to name\par
    // your global web applet Scripts or change the string below\par
 \par
    try \{\par
        var tds = document.getElementsByTagName("td");\par
        var i;\par
        for (i = 0; i < tds.length; i++) \{\par
            if (tds[i].innerHTML == appletname) \{\par
                tds[i].parentNode.parentNode.parentNode.parentNode.style.display = "none";\par
                return true;\par
            \}\par
        \}\par
 \par
    \}\par
 \par
    catch (e) \{\par
    \}\par
\}\par
 \par
 \par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE: sso_login\par
//\par
// Allows a JavaScript routine to log into CRM On Demand for web services\par
//\par
// Parameters:\par
//\par
// ssotoken The SSO token as supplied by CRM On Demand\par
// callback A string containing code to execute when the login is\par
// complete. If set to '', then the call is made\par
// synchronously, otherwise, asynchronously\par
//\par
// Notes:\par
// Sets session cookie in browser, cookie automatically sent with\par
// subsequent requests\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.sso_login = function(ssotoken, callback) \{\par
    ssotoken = encodeURIComponent(ssotoken);\par
    var pageroot = document.location;\par
    pageroot = pageroot.toString();\par
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));\par
    try \{\par
        var commandStr = '?command=ssologin&odSsoToken=' + ssotoken;\par
        var oXMLHttpRequest = new XMLHttpRequest;\par
        if (callback.length > 0) \{\par
            oXMLHttpRequest.open('GET', pageroot + '/Services/Integration' + commandStr, true);\par
            oXMLHttpRequest.onreadystatechange = function() \{\par
                if (this.readyState == XMLHttpRequest.DONE) \{\par
                    if (this.status == 200) eval(callback);\par
                    else if (this.status == 500) \{\par
                        alert('Server timeout due to inactivity, reloading page!');\par
                        top.location.reload();\par
                    \}\par
                    else alert('Error: ' + this.status + ' - ' + this.responseText);\par
                \}\par
            \}\par
        \}\par
        else \{\par
            oXMLHttpRequest.open('GET', pageroot + '/Services/Integration' + commandStr, false);\par
        \}\par
        oXMLHttpRequest.send(null);\par
        if (callback.length == 0) \{\par
            return (oXMLHttpRequest.status == 200);\par
        \}\par
    \} catch (e) \{ alert('Error: ' + e.message); \}\par
\}\par
 \par
OnDemandLib.prototype.user_login = function(userName, password, callback) \{\par
    var pageroot = document.location;\par
    pageroot = pageroot.toString();\par
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));\par
    try \{\par
        var commandStr = '?command=login';\par
        var oXMLHttpRequest = new XMLHttpRequest;\par
        console.log('begin user_login');\par
        if (callback) \{\par
            console.log('inside callback');\par
            oXMLHttpRequest.open('GET', pageroot + '/Services/Integration' + commandStr, true);\par
            oXMLHttpRequest.onreadystatechange = function() \{\par
                console.log('begin onreadystatechange');\par
                if (this.readyState == XMLHttpRequest.DONE) \{\par
                    if (this.status == 200) \{\par
                        console.log('before callback');\par
                        callback();\par
                        console.log('after callback');\par
                    \} else if (this.status == 500) \{\par
                        alert('Server timeout due to inactivity, reloading page!');\par
                        top.location.reload();\par
                    \} else \{\par
                        alert('Error: ' + this.status + ' - ' + this.responseText);\par
                    \}\par
                \}\par
            \}\par
        \}\par
        else \{\par
            console.log('else path');\par
            oXMLHttpRequest.open('GET', pageroot + '/Services/Integration' + commandStr, false);\par
        \}\par
        \par
        oXMLHttpRequest.setRequestHeader('UserName', userName);\par
        oXMLHttpRequest.setRequestHeader('Password', password);\par
        \par
        oXMLHttpRequest.send(null);\par
        if (!callback) \{\par
            return (oXMLHttpRequest.status == 200);\par
        \}\par
    \} catch (e) \{ alert('Error: ' + e.message); \}\par
\}\par
 \par
 \par
 \par
// ////////////////////////////////////////////////////////////////////////\par
//\par
// ROUTINE: sso_logoff\par
//\par
// Ends a web services session started by JavaScript\par
//\par
// Parameter:\par
//\par
// callback A string containing code to execute when the logoff is\par
// complete. If set to '', then the call is made\par
// synchronously, otherwise, asynchronously\par
//\par
// ////////////////////////////////////////////////////////////////////////\par
OnDemandLib.prototype.sso_logoff = function(callback) \{\par
    var pageroot = document.location;\par
    pageroot = pageroot.toString();\par
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));\par
    try \{\par
        var commandStr = '?command=logoff';\par
        var oXMLHttpRequest = new XMLHttpRequest;\par
        if (callback.length > 0) \{\par
            oXMLHttpRequest.open('GET', pageroot + '/Services/Integration' + commandStr, true);\par
            oXMLHttpRequest.onreadystatechange = function() \{\par
                if (this.readyState == XMLHttpRequest.DONE) \{\par
                    if (this.status == 200) eval(callback);\par
                    else if (this.status == 500) \{\par
                        alert('Server timeout due to inactivity, reloading page!');\par
                        top.location.reload();\par
                    \}\par
                    else alert('Error: ' + this.status + ' - ' + this.responseText);\par
                \}\par
            \}\par
        \}\par
        else \{\par
            oXMLHttpRequest.open('GET', pageroot + '/Services/Integration' + commandStr, false);\par
        \}\par
 \par
        oXMLHttpRequest.send(null);\par
        if (callback.length == 0) \{\par
            return (oXMLHttpRequest.status == 200);\par
        \}\par
    \} catch (e) \{ alert('Error: ' + e.message); \}\par
\}\par
 \par
OnDemandLib.prototype.user_logoff = OnDemandLib.prototype.sso_logoff;\par
 \par
//\par
// query_user\par
//\par
 \par
OnDemandLib.prototype.query_user = function(fields, callback) \{\par
    var inSoap;\par
    var x;\par
    var pageroot = document.location;\par
    pageroot = pageroot.toString();\par
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));\par
 \par
    inSoap = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="urn:crmondemand/ws/user/" xmlns:user1="urn:/crmondemand/xml/user">';\par
    inSoap += '<soapenv:Header/>';\par
    inSoap += '<soapenv:Body>';\par
    inSoap += '<user:UserWS_UserQueryPage_Input>';\par
    inSoap += '<user1:ListOfUser>';\par
    inSoap += '<user1:User>';\par
 \par
    for (x in fields) \{\par
        inSoap += '<user1:' + x + '>' + fields[x] + '</user1:' + x + '>';\par
    \}\par
 \par
    inSoap += '</user1:User>';\par
    inSoap += '</user1:ListOfUser>';\par
    inSoap += '</user:UserWS_UserQueryPage_Input>';\par
    inSoap += '</soapenv:Body>';\par
    inSoap += '</soapenv:Envelope>';\par
 \par
    // Submit XML request, run callback function upon response\par
    try \{\par
        var oXMLHttpRequest = new XMLHttpRequest;\par
        if (callback) \{\par
 \par
            oXMLHttpRequest.open('POST', pageroot + '/Services/Integration', true);\par
            oXMLHttpRequest.onreadystatechange = function() \{\par
                if (this.readyState == XMLHttpRequest.DONE) \{\par
                    if (this.status == 200) callback(oXMLHttpRequest.responseXML);\par
                    else if (this.status == 500) \{\par
                        alert('Server timeout due to inactivity, reloading page!');\par
                        top.location.reload();\par
                    \}\par
                    else alert('Error: ' + this.status + ' - ' + this.responseText);\par
                \}\par
            \}\par
        \}\par
        else \{\par
            oXMLHttpRequest.open('POST', pageroot + '/Services/Integration', false);\par
        \}\par
 \par
        oXMLHttpRequest.setRequestHeader('SOAPAction', '"document/urn:crmondemand/ws/user/:UserQueryPage"');\par
        oXMLHttpRequest.setRequestHeader('Content-Type', 'text/xml');\par
        oXMLHttpRequest.send(inSoap);\par
    \}\par
    catch (e) \{\par
        alert('Error: ' + e.message);\par
    \}\par
 \par
    if (callback.length == 0) \{\par
        alert(oXMLHttpRequest.responseText);\par
        return oXMLHttpRequest.responseXML;\par
    \}\par
\}\par
 \par
OnDemandLib.prototype.getListData = function(type, xmlData) \{\par
    var arr = [];\par
    jQuery(type, xmlData).each(function(index, item) \{\par
        var obj = \{\};\par
        jQuery(item).children().each(function(index, item) \{\par
          var fieldName = jQuery(item).get(0).tagName;\par
          var fieldValue = jQuery(item).text();\par
          obj[fieldName] = fieldValue;\par
        \});\par
        arr.push(obj);\par
    \});\par
    return arr;\par
\}\par
 \par
OnDemandLib.prototype.my_query_user = function(fields, callback) \{\par
    var that = this;\par
    var inSoap;\par
    var x;\par
    var pageroot = document.location;\par
    pageroot = pageroot.toString();\par
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));\par
 \par
    inSoap = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">';\par
    inSoap += '<soapenv:Header/>';\par
    inSoap += '<soapenv:Body>';\par
    inSoap += '<UserWS_UserQueryPage_Input xmlns="urn:crmondemand/ws/user/">';\par
    inSoap += '<ListOfUser>';\par
    inSoap += '<User>';\par
 \par
    for (x in fields) \{\par
        inSoap += '<' + x + '>' + fields[x] + '</' + x + '>';\par
    \}\par
 \par
    inSoap += '</User>';\par
    inSoap += '</ListOfUser>';\par
    inSoap += '</UserWS_UserQueryPage_Input>';\par
    inSoap += '</soapenv:Body>';\par
    inSoap += '</soapenv:Envelope>';\par
 \par
    // Submit XML request, run callback function upon response\par
    try \{\par
        \par
        jQuery.ajax(\{\par
            url: pageroot + '/Services/Integration',\par
            type: 'POST',\par
            contentType: 'text/xml',\par
            dataType: 'xml',\par
            data: inSoap,\par
            beforeSend: function(xhr) \{\par
                xhr.setRequestHeader('SOAPAction', '"document/urn:crmondemand/ws/user/:UserQueryPage"');\par
            \},\par
            complete: function(xhr, textStatus) \{\par
            \},\par
            success: function(xmlData, textStatus) \{\par
                var items = that.getListData('User', xmlData);\par
                callback(items);\par
            \}\par
        \});\par
        \par
    \} catch (e) \{\par
        alert('Error: ' + e.message);\par
    \}\par
\}\par
 \par
OnDemandLib.prototype.manualQuery = function(entityType, fields, soapAction, soapRequestTemplate, callback) \{\par
    var that = this;\par
    \par
    var pageroot = document.location;\par
    pageroot = pageroot.toString();\par
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));\par
    \par
    var entityTypeLowercase = entityType.toLowerCase();\par
    var entityTypeCapitalized = entityTypeLowercase.substring(0,1).toUpperCase() + entityTypeLowercase.substring(1);\par
    \par
    var fieldsXML = '';\par
    for (fieldName in fields) \{\par
        fieldsXML += '<' + fieldName + '>' + fields[fieldName] + '</' + fieldName + '>';\par
    \}\par
    \par
    var soapRequest = soapRequestTemplate.replace("<%=fields%>", fieldsXML);\par
      \par
    jQuery.ajax(\{\par
        url: pageroot + '/Services/Integration',\par
        type: 'POST',\par
        contentType: 'text/xml',\par
        dataType: 'xml',\par
        data: soapRequest,\par
        beforeSend: function(xhr) \{\par
            xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');\par
        \},\par
        success: function(xmlData, textStatus) \{\par
            var items = that.getListData(entityTypeCapitalized, xmlData);\par
 \par
            if (callback.itemsCache) \{\par
                callback.itemsCache = callback.itemsCache.concat(items);\par
            \} else \{\par
                callback.itemsCache = [].concat(items);\par
            \}\par
 \par
            var lastPage = jQuery('ns\\\\:LastPage', xmlData).text().toLowerCase();\par
 \par
            if (lastPage == 'true') \{\par
                callback.more = false;\par
                callback(callback.itemsCache);\par
            \} else \{\par
                callback.more = true;\par
                that.entityQuery(entityType, fields, callback);\par
            \}\par
            window.xmlData = xmlData;\par
        \}\par
    \});\par
 \par
\}\par
 \par
OnDemandLib.prototype.entityQuery = function(entityType, fields, callback) \{\par
    var that = this;\par
    var inSoap;\par
    var x;\par
    \par
    var entityTypeLowercase = entityType.toLowerCase();\par
    var entityTypeCapitalized = entityTypeLowercase.substring(0, 1).toUpperCase() + entityTypeLowercase.substring(1);\par
    \par
    var pageroot = document.location;\par
    pageroot = pageroot.toString();\par
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));\par
    \par
    var pageSize = 5;\par
    \par
    if (typeof callback.startRowNum === 'undefined') \{\par
         callback.startRowNum = 0;\par
    \} else \{\par
        if (callback.startRowNum === 0) \{\par
            callback.startRowNum = pageSize + 1;\par
        \} else \{\par
            callback.startRowNum = callback.startRowNum + pageSize;\par
        \}\par
    \}\par
 \par
    inSoap = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">';\par
    inSoap += '<soapenv:Header/>';\par
    inSoap += '<soapenv:Body>';\par
    inSoap += '<' + entityTypeCapitalized + 'WS_' + entityTypeCapitalized + 'QueryPage_Input xmlns="urn:crmondemand/ws/' + entityTypeLowercase + '/">';\par
    inSoap += '<StartRowNum>' + callback.startRowNum + '</StartRowNum>';\par
    inSoap += '<PageSize>' + pageSize + '</PageSize>';\par
    inSoap += '<ListOf' + entityTypeCapitalized + '>';\par
    inSoap += '<' + entityTypeCapitalized + '>';\par
 \par
    for (x in fields) \{\par
        inSoap += '<' + x + '>' + fields[x] + '</' + x + '>';\par
    \}\par
 \par
    inSoap += '</' + entityTypeCapitalized + '>';\par
    inSoap += '</ListOf' + entityTypeCapitalized + '>';\par
    inSoap += '</' + entityTypeCapitalized + 'WS_' + entityTypeCapitalized + 'QueryPage_Input>';\par
    inSoap += '</soapenv:Body>';\par
    inSoap += '</soapenv:Envelope>';\par
 \par
    // Submit XML request, run callback function upon response\par
    try \{\par
        \par
        jQuery.ajax(\{\par
            url: pageroot + '/Services/Integration',\par
            type: 'POST',\par
            contentType: 'text/xml',\par
            dataType: 'xml',\par
            data: inSoap,\par
            beforeSend: function(xhr) \{\par
                xhr.setRequestHeader('SOAPAction', '"document/urn:crmondemand/ws/' + entityTypeLowercase + '/:' + entityTypeCapitalized + 'QueryPage"');\par
            \},\par
            complete: function(xhr, textStatus) \{\par
            \},\par
            success: function(xmlData, textStatus) \{\par
                var items = that.getListData(entityTypeCapitalized, xmlData);\par
 \par
                if (callback.itemsCache) \{\par
                    callback.itemsCache = callback.itemsCache.concat(items);\par
                \} else \{\par
                    callback.itemsCache = [].concat(items);\par
                \}\par
 \par
                var lastPage = jQuery('ns\\\\:LastPage', xmlData).text().toLowerCase();\par
 \par
                if (lastPage == 'true') \{\par
                    callback.more = false;\par
                    callback(callback.itemsCache);\par
                \} else \{\par
                    callback.more = true;\par
                    that.entityQuery(entityType, fields, callback);\par
                \}\par
                window.xmlData = xmlData;\par
            \}\par
        \});\par
        \par
    \} catch (e) \{\par
        alert('Error: ' + e.message);\par
    \}\par
\}\par
 \par
OnDemandLib.prototype.activityQuery = function(fields, callback) \{\par
    var soapAction = 'document/urn:crmondemand/ws/activity/10/2004:Activity_QueryPage';\par
    var soapRequestTemplate = '' +\par
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +\par
        ' <soapenv:Header/>' +\par
        ' <soapenv:Body>' +\par
        ' <ActivityNWS_Activity_QueryPage_Input xmlns="urn:crmondemand/ws/activity/10/2004">' +\par
        ' <PageSize>100</PageSize>' +\par
        ' <ListOfActivity>' +\par
        ' <Activity>' +\par
        ' <%=fields%>' +\par
        ' </Activity>' +\par
        ' </ListOfActivity>' +\par
        ' <StartRowNum>0</StartRowNum>' +\par
        ' </ActivityNWS_Activity_QueryPage_Input>' +\par
        ' </soapenv:Body>' +\par
        '</soapenv:Envelope>';\par
        \par
    this.manualQuery('Activity', fields, soapAction, soapRequestTemplate, function(data) \{\par
        callback(data);\par
    \});\par
\}\par
 \par
OnDemandLib.prototype.saveProdDetail = function ()\par
\{\par
var prodName = "Singulair 20x40mg";\par
var indication = "Allergy";\par
alert("prodname:"+prodName);\par
var fields = \{\par
            Name: " ='" + prodName + "' ",\par
            IndexedPick0: " ='" + indication + "' "\par
        \};\par
 \par
    var pageroot = document.location;\par
    pageroot = pageroot.toString();\par
    pageroot = pageroot.substr(0, pageroot.indexOf('/', 10));\par
 \par
    var soapAction = 'document/urn:crmondemand/ws/product/10/2004:ProductInsert';\par
    var soapRequestTemplate = '' +\par
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +\par
        ' <soapenv:Header/>' +\par
        ' <soapenv:Body>' +\par
        ' <ProductWS_ProductInsert_Input xmlns="urn:crmondemand/ws/product/10/2004">' +\par
        ' <ListOfProduct>' +\par
        ' <Product>' +\par
        ' <%=fields%>' +\par
        ' </Product>' +\par
        ' </ListOfProduct>' +\par
        ' </ProductWS_ProductInsert_Input>' +\par
        ' </soapenv:Body>' +\par
        '</soapenv:Envelope>';\par
 \par
var fieldsXML = '';\par
for (fieldName in fields) \{\par
fieldsXML += '<' + fieldName + '>' + fields[fieldName] + '</' + fieldName + '>';\par
\}\par
 \par
var soapRequest = soapRequestTemplate.replace("<%=fields%>", fieldsXML);\par
 \par
//var xmldoc = new ActiveXObject("Microsoft.XMLDOM");\par
//xmldoc.loadXML(soapRequest);\par
//xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");\par
//xmlhttp.onreadystatechange = state_Change;\par
//xmlhttp.open("POST", "https://secure-ausomxapa.crmondemand.com/Services/Integration", false);\par
//xmlhttp.setRequestHeader ("SOAPAction", soapAction);\par
//xmlhttp.setRequestHeader ("Content-Type", "text/xml");\par
//xmlhttp.send(xmldoc);\par
 \par
//alert(xmlhttp.responseXML.xml);\par
 \par
jQuery.ajax(\{\par
url: pageroot + '/Services/Integration',\par
type: 'POST',\par
contentType: 'text/xml',\par
dataType: 'xml',\par
data: soapRequest,\par
beforeSend: function(xhr) \{\par
alert("Before Web Service Call");\par
xhr.setRequestHeader('SOAPAction', '"' + soapAction + '"');\par
\},\par
success: function(xmlData, textStatus) \{\par
alert("After Web Service Call");\par
\}\par
\});\par
\}\par
 \par
OnDemandLib.prototype.login = function(callback) \{\par
 \par
    var userName = this.admin.userName;\par
    var password = this.admin.password;\par
 \par
    jQuery.ajax(\{\par
       url: '/Services/Integration?command=login',\par
       dataType: 'xml',\par
       beforeSend: function(xhr) \{\par
           xhr.setRequestHeader('UserName', userName);\par
           xhr.setRequestHeader('Password', password);\par
       \},\par
       complete: function(xhr, textStatus) \{\par
           callback.call(this, xhr, textStatus);\par
       \}\par
   \});\par
    \par
\}\par
 \par
 \par
 \par
 \par
if (!window.odlib) \{\par
    window.odlib = new OnDemandLib;\par
\}\par
 \par
\pard\})();\f1\par
}
 