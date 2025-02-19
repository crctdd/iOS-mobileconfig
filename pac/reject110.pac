function FindProxyForURL(url, host) {
    var blocked_ips = [
        "157.148.47.204",
        "219.143.187.136"
    ];
    
    for (var i = 0; i < blocked_ips.length; i++) {
        if (shExpMatch(host, blocked_ips[i])) {
            return "PROXY 127.0.0.1:9999";  // 让 IP 走一个无效代理
        }
    }
    return "DIRECT";  // 其他流量正常访问
}