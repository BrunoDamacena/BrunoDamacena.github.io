var OSName = "Unknown";
if      (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows";
else if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows";
else if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows";
else if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows";
else if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows";
else if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows";
else if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

if(OSName == "Windows") {
    document.getElementById('linux-download').className = 'd-none';
    document.getElementById('other-device').className = 'd-none';
}
else if(OSName == "Linux") {
    document.getElementById('windows-download').className = 'd-none';
    document.getElementById('other-device').className = 'd-none';
}
else {
    document.getElementById('windows-download').className = 'd-none';
    document.getElementById('linux-download').className = 'd-none';
}

function showAll() {
    document.getElementById('windows-download').className = 'list-inline-item';
    document.getElementById('linux-download').className = 'list-inline-item';
    document.getElementById('other-device').className = 'd-none';
    document.getElementById('show-all').className = 'd-none';
}