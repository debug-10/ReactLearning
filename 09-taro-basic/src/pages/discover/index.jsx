import React from "react";
import { View } from "@tarojs/components";
import { AtDivider, AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

const DiscoverJumpSection = () => {
  const handleNavigate = (url) => {
    Taro.navigateTo({
      url,
      fail: (err) => {
        console.error(`页面跳转失败: ${err.errMsg}`);
        // 可以在这里添加更友好的错误提示，比如使用 Taro.showToast 等
        Taro.showToast({
          title: "页面跳转失败",
          icon: "none",
          duration: 2000,
        });
      },
    });
  };

  return (
    <View className="discover-jump-section">
      <View className="divider-container">
        <AtDivider content="页面跳转" fontColor="#333" lineColor="#e8e8e8" />
      </View>
      <View className="list-container">
        <AtList>
          <AtListItem
            title="记账本页面"
            note="点击进入记账本页面"
            arrow="right"
            onClick={() => handleNavigate("/pages/accountBook/index")}
          />
          <AtListItem
            title="个人名片生成器页面"
            note="点击进入个人名片生成器页面"
            arrow="right"
            onClick={() => handleNavigate("/pages/businessCardGenerator/index")}
          />
        </AtList>
      </View>
    </View>
  );
};

export default DiscoverJumpSection;
