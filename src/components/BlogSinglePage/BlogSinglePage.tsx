import axios from "axios";
import {
  Title,
  Text,
  Container,
  Avatar,
  Group,
  Center,
  Image,
  Button,
} from "@mantine/core";
import classes from "./SinglePageText.module.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Blog {
  titlu: string;
  descriere: string;
  data_curenta: string;
  blog_id: string;
  picture: string;
  nume: string;
  prenume: string;
  avatar: string;
}

export function BlogSinglePage() {
  const { blog_id } = useParams();
  const [blog, setBlogs] = useState<Blog>({
    titlu: "",
    descriere: "",
    data_curenta: "",
    blog_id: "",
    picture: "",
    nume: "",
    prenume: "",
    avatar: "",
  });

  const fetchBlogs = async () => {
    const apiSinglePageBlog = `http://localhost:8080/blog-page-details/${blog_id}`;
    axios
      .get(apiSinglePageBlog)
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("eroare");
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, [blog_id]);

  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/povestea-mea");
  };
  return (
    <div>
      <Button m={10} color="#FFF" radius={20} onClick={handleBackButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#597e8d"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 14l-4 -4l4 -4" />
          <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
        </svg>
      </Button>
      <Container className={classes.wrapper} size={1400}>
        <Group justify="space-between">
          <Center p={10}>
            <Avatar
              src={`data:image/jpeg;base64,${blog.avatar}`}
              size={50}
              radius="xl"
              mr="xs"
            />
            <Text fz={17} inline>
              {blog.nume} {blog.prenume}
              <Text c="dimmed">{blog.data_curenta}</Text>
            </Text>
          </Center>
        </Group>
        <Title className={classes.title}>{blog.titlu}</Title>
        <Image
          className="img"
          src={`data:image/jpeg;base64,${blog.picture}`}
          height={400}
          p={10}
          radius={15}
        />
        <Container p={30} size={800}>
          <Text fz={17} c="dimmed" className={classes.description}>
            {blog.descriere}
          </Text>
        </Container>
      </Container>
    </div>
  );
}
export default BlogSinglePage;
