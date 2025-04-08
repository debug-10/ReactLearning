import React, { useState } from "react";
import { View, Text, Input, Button } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import "./index.scss";

const AccountBook = () => {
  const [accounts, setAccounts] = useState([]);
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");

  const addAccount = () => {
    if (!amount.trim()) {
      console.log("请输入金额");
      return;
    }
    const newAccount = {
      id: Date.now(),
      amount: parseFloat(amount),
      remark: remark,
      date: new Date().toLocaleDateString(), // 简化日期格式
    };
    setAccounts([...accounts, newAccount]);
    setAmount("");
    setRemark("");
  };

  return (
    <View className="account-book">
      <View className="account-book-header">
        <Text className="account-book-title">记账本</Text>
      </View>
      <View className="account-book-input-section">
        <Input
          type="number"
          placeholder="金额"
          value={amount}
          onInput={(e) => setAmount(e.detail.value)}
          className="account-book-input"
        />
        <Input
          placeholder="备注"
          value={remark}
          onInput={(e) => setRemark(e.detail.value)}
          className="account-book-input"
        />
        <Button type="primary" onClick={addAccount}>
          记账
        </Button>
      </View>
      <View className="account-book-list-section">
        <AtList>
          {accounts.map((account) => (
            <AtListItem
              key={account.id}
              title={`${account.amount > 0 ? "+" : ""}${account.amount}`}
              note={`备注：${account.remark || "无"}`}
              extraText={`日期：${account.date}`}
            />
          ))}
        </AtList>
      </View>
    </View>
  );
};

export default AccountBook;
