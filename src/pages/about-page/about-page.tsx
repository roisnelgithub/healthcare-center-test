import { Box, Stack, Typography } from "@mui/material";
import { HeaderPageLayout } from "../../layout";
import about from "../../assets/about.png";
import { useContext } from "react";
import { MQContext } from "../../context";
import { CardDescription } from "../../components";

const descriptions = [
  {
    id: 1,
    title: "Moya Medical",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, voluptatem atque natus quaerat dolore tempora qui ipsa aliquid provident sit, magnam iure fuga deleniti mollitia eos, eligendi iste tenetur libero. Id odit laborum accusantium suscipit enim corporis perferendis veniam quasi minima? Ipsum placeat perferendis excepturi optio dignissimos rem suscipit id tenetur praesentium. Temporibus dolorem natus iste cupiditate et aliquam corrupti eaque alias ea inventore, deserunt ab architecto sapiente dignissimos. Reiciendis, aliquid totam. Quo vitae quisquam incidunt magnam distinctio quod alias blanditiis tempore iusto accusamus. Similique velit sapiente sit suscipit hic?",
  },
  {
    id: 2,
    title: "Nuestra Misión",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, voluptatem atque natus quaerat dolore tempora qui ipsa aliquid provident sit, magnam iure fuga deleniti mollitia eos, eligendi iste tenetur libero. Id odit laborum accusantium suscipit enim corporis perferendis veniam quasi minima? Ipsum placeat perferendis excepturi optio dignissimos rem suscipit id tenetur praesentium. Temporibus dolorem natus iste cupiditate et aliquam corrupti eaque alias ea inventore, deserunt ab architecto sapiente dignissimos. Reiciendis, aliquid totam. Quo vitae quisquam incidunt magnam distinctio quod alias blanditiis tempore iusto accusamus. Similique velit sapiente sit suscipit hic?",
  },
  {
    id: 3,
    title: "Por qué nosotros",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, voluptatem atque natus quaerat dolore tempora qui ipsa aliquid provident sit, magnam iure fuga deleniti mollitia eos, eligendi iste tenetur libero. Id odit laborum accusantium suscipit enim corporis perferendis veniam quasi minima? Ipsum placeat perferendis excepturi optio dignissimos rem suscipit id tenetur praesentium. Temporibus dolorem natus iste cupiditate et aliquam corrupti eaque alias ea inventore, deserunt ab architecto sapiente dignissimos. Reiciendis, aliquid totam. Quo vitae quisquam incidunt magnam distinctio quod alias blanditiis tempore iusto accusamus. Similique velit sapiente sit suscipit hic?",
  },
];

const AboutPage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  return (
    <Box>
      <HeaderPageLayout image={about}>
        <Box sx={{ mb: "10vh" }}>
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            Nuestra compañía
          </Typography>
        </Box>
      </HeaderPageLayout>
      <br />
      <hr />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          my: "3rem",
        }}
      >
        <Stack sx={{ maxWidth: "80%" }} alignItems={"center"} spacing={6}>
          {descriptions.map((des) => (
            <CardDescription
              key={des.id}
              title={des.title}
              description={des.description}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutPage;
