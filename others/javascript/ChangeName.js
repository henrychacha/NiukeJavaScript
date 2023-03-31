// 写个函数，可以转化下划线命名到驼峰命名
UnderlineToHump(para) {
    a = para.split("_");
    for (a) {
        if (result.length() == 0) {
            result.append(s.toLowerCase());
        } else {
            result.append(s.substring(0, 1).toUpperCase());
            result.append(s.substring(1).toLowerCase());
        }
    }
    return result.toString();
}

