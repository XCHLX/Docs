```
// 保持屏幕常亮
  uni.setKeepScreenOn({
    keepScreenOn: true,
  });
  
  // 设置头部
  uni.setNavigationBarColor({
    frontColor: "#000000",
    backgroundColor: "#fffbef",
  });
  // 设置标题
  uni.setNavigationBarTitle({
    title: "阅读狗",
  });
  
  // 获取手机电量
  uni.getBatteryInfo({
    success: (res) => {
      console.log(res);
      dianliang.value = res.level;
    },
  });
```

