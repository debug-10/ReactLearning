import React, { useState } from "react";
import { View, Text, Button, Input, Image } from "@tarojs/components";
import "./index.scss";

const BusinessCardGenerator = () => {
  // 用于存储表单输入数据的状态
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    contact: "",
  });
  // 用于存储生成的名片信息的状态
  const [cardInfo, setCardInfo] = useState(null);

  // 处理输入框值变化的函数
  const handleInputChange = (key) => (e) => {
    setFormData({
      ...formData,
      [key]: e.detail.value,
    });
  };

  // 生成名片的函数
  const generateCard = () => {
    // 检查必填字段是否都已填写
    if (
      formData.name.trim() === "" ||
      formData.position.trim() === "" ||
      formData.contact.trim() === ""
    ) {
      // 可以添加提示信息，这里简单打印
      console.log("请填写完整的姓名、职位和联系方式");
      return;
    }
    // 设置生成的名片信息状态
    setCardInfo({
      ...formData,
    });
  };

  // 清空表单的函数
  const clearForm = () => {
    setFormData({
      name: "",
      position: "",
      contact: "",
    });
    setCardInfo(null);
  };

  return (
    <View className="business-card-generator">
      <View className="business-card-generator-header">
        <Text className="business-card-generator-title">个人名片生成器</Text>
      </View>
      <View className="business-card-generator-input-section">
        <View>
          <Text>姓名</Text>
          <Input
            type="text"
            placeholder="请输入您的姓名"
            value={formData.name}
            onInput={handleInputChange("name")}
          />
        </View>
        <View>
          <Text>职位</Text>
          <Input
            type="text"
            placeholder="请输入您的职位"
            value={formData.position}
            onInput={handleInputChange("position")}
          />
        </View>
        <View>
          <Text>联系方式</Text>
          <Input
            type="text"
            placeholder="请输入您的联系方式"
            value={formData.contact}
            onInput={handleInputChange("contact")}
          />
        </View>
      </View>
      <View className="business-card-generator-button-section">
        <Button type="primary" onClick={generateCard}>
          生成名片
        </Button>
        <Button onClick={clearForm}>清空</Button>
      </View>
      {cardInfo && (
        <View className="business-card-generator-preview">
          <View>
            <Image
              src="https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/yz.jpg"
              style={{ width: "100px", height: "100px", borderRadius: "100px" }}
            />
          </View>
          <View>
            <View>姓名：{cardInfo.name}</View>
            <View>职位：{cardInfo.position}</View>
            <View>联系方式：{cardInfo.contact}</View>
          </View>
        </View>
      )}
    </View>
  );
};

export default BusinessCardGenerator;
