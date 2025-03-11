import React from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";
import { Card, Typography, List } from "antd";

const { Title, Text } = Typography;

const BlogList = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Title level={2}>Blog List</Title>
      <List
        itemLayout="horizontal"
        dataSource={blogs}
        renderItem={(blog, index) => (
          <List.Item key={index}>
            <Card
              style={{
                width: "100%",
                marginBottom: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              cover={
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    borderRadius: "8px",
                    border: "2px solid #f0f0f0",
                  }}
                >
                  <img
                    alt={blog.title}
                    src={blog.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              }
            >
              <Card.Meta
                title={<Link to={`/blog/${index}`}>{blog.title}</Link>}
                description={
                  <div>
                    <Text strong>Author:</Text> {blog.author}
                    <br />
                    <Text strong>Views:</Text> {blog.views}
                    <br />
                    <Text strong>Favorites:</Text> {blog.favorites}
                    <br />
                    <Text strong>Likes:</Text> {blog.likes}
                  </div>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogList;
