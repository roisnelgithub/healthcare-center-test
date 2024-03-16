import { Box, Stack, Typography } from "@mui/material";
import { HeaderPageLayout } from "../../../../layout";
import { doctors, trunk } from "../../../../assets";
import { useContext } from "react";
import { MQContext } from "../../../../context";
import { CustomIcon } from "../../../../components/custom-icon";
import { colorBlue, colorText } from "../../../../styles";

const services = [
  {
    id: 1,
    service:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fuga.",
  },
  {
    id: 2,
    service:
      "Ullam porro ipsum quae sunt ipsam ut quas quidem harum nihil ipsa, expedita.",
  },
  {
    id: 3,
    service: "Quibusdam nesciunt unde molestiae consequuntur asperiores?",
  },
  {
    id: 4,
    service:
      "Ullam eveniet debitis harum odio, sed excepturi, consequuntur qui facilis quibusdam dolorem sequi.",
  },
];

const DotPage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  return (
    <Stack spacing={4}>
      <HeaderPageLayout image={doctors}>
        <Box sx={{ mb: "10vh" }}>
          <Stack alignItems={"center"}>
            <CustomIcon icon={trunk} size={50} />
            <Typography
              variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
              fontWeight="bold"
              sx={{ color: "white", textAlign: "center" }}
            >
              Servicios DOT
            </Typography>
          </Stack>
        </Box>
      </HeaderPageLayout>
      <br />
      <hr />
      <Stack alignItems={"center"} spacing={6} sx={{ pb: "3rem" }}>
        <Stack
          direction={"column"}
          sx={{ maxWidth: { xs: "90%", sm: "80%", md: "70%" } }}
          spacing={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h4" fontWeight={"bold"} color={colorBlue}>
            Servicios
          </Typography>
          <ul className="service-list">
            {services.map((service) => (
              <li key={service.id}>
                <Typography color={colorText}> {service.service}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4" fontWeight={"bold"} color={colorBlue}>
            Detalles
          </Typography>
          <Typography
            sx={{ lineHeight: 2 }}
            color={colorText}
            textAlign="center"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            expedita, distinctio suscipit eius ullam, veritatis maxime repellat
            voluptates voluptatem hic eos atque repudiandae maiores fugit
            perferendis odit? Quia ipsum numquam sint obcaecati. Quos
            consequatur hic ab modi voluptatem debitis neque tenetur, animi
            mollitia explicabo voluptas repellat, rerum deleniti, quasi nam?
            Quia ipsum numquam sint obcaecati. Quos consequatur hic ab modi
            voluptatem debitis neque tenetur, animi mollitia explicabo voluptas
            repellat, rerum deleniti, quasi nam?
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DotPage;
