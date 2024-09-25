import { Card, Image, Text, Group, Center, Avatar, Button , SimpleGrid} from '@mantine/core';
import classes from './BlogCard.module.css'
import avatar from '../../assets/profile-mihail.jpg';
import healthcare from '../../assets/healthcare.avif';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { response } from 'express';

export function BlogCard() {
  const [blogs, setBlogs] = useState([
    {
      titlu:'',
      descriere:'',
      blog_id:'',
    }
  ]);

  const fetchBlogs = async () => {
    const token=localStorage.getItem('token');

      if(!token){
        console.error("token-ul lipseste");
        return;
      }
      const config={
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    const apiBlogs = "http://localhost:8080/blog-details";
    axios.get(apiBlogs,config)
    .then(response=>{
      setBlogs(response.data);
      console.log(response.data);
     }).catch(error=>{
      console.error("eroare");
     })
  };

  useEffect(() => {
    fetchBlogs(); 
  }, []);

  return (
    <div className="card-container">
    <Center>
    <SimpleGrid cols={{ base: 1, md: 3 }}  mt={50} > 
      {blogs.map((blog) => (
        <Center key={blog.blog_id}>
          <Card withBorder radius="md" className={classes.card}>
            <Card.Section>
              <a>
                <Image src={healthcare} height={200} p={10} radius={15} />
              </a>
            </Card.Section>

            <Text fw={500} component="a">
              {blog.titlu}
            </Text>

            <Text fz="sm" c="dimmed" lineClamp={7}>
              {blog.descriere}
            </Text>

            <Group justify="space-between" className={classes.footer}>
              <Center>
                <Avatar src={avatar} size={35} radius="xl" mr="xs" />
                <Text fz={14} inline>
                  Nume 
                </Text>
                <Button ml={100}>Read more</Button>
              </Center>
            </Group>
          </Card>
        </Center>
      ))}
      </SimpleGrid></Center>
    </div>
  );
}
