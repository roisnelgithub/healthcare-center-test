import { Box, Stack, Typography } from "@mui/material";
import { HeaderPageLayout } from "../../../../layout";
import { useContext } from "react";
import { MQContext } from "../../../../context";
import { rate1, rate2, rate3, whyUs } from "../../../../assets";
import { CardDescription, Testimony } from "../../../../components";
import { colorBlue } from "../../../../styles";

const testimonials = [
  {
    id: 1,
    name: "Alejandro Cuervo",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non cum velit libero sed voluptates consequatur dicta voluptatem ullam accusamus architecto, error excepturi ut reiciendis omnis adipisci? Magnam nostrum ab quo.",
    rate: 5,
    image: rate1,
  },
  {
    id: 2,
    name: "Alejandro Cuervo",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non cum velit libero sed voluptates consequatur dicta voluptatem ullam accusamus architecto, error excepturi ut reiciendis omnis adipisci? Magnam nostrum ab quo.",
    rate: 4,
    image: rate2,
  },
  {
    id: 3,
    name: "Alejandro Cuervo",
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non cum velit libero sed voluptates consequatur dicta voluptatem ullam accusamus architecto, error excepturi ut reiciendis omnis adipisci? Magnam nostrum ab quo.",
    rate: 5,
    image: rate3,
  },
];

const WhyUsPage = () => {
  const { xs, sm, md, lg } = useContext(MQContext);
  return (
    <Box>
      <HeaderPageLayout image={whyUs}>
        <Box sx={{ mb: "10vh" }}>
          <Typography
            variant={xs || sm ? "h3" : md || lg ? "h2" : "h1"}
            fontWeight="bold"
            sx={{ color: "white", textAlign: "center" }}
          >
            Por qué nosotros
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
        <Stack
          sx={{
            maxWidth: { xs: "95%", sm: "90%", md: "80%", lg: "60%" },
            p: "1rem",
          }}
          alignItems={"center"}
          spacing={6}
        >
          <CardDescription
            title={" Por qué nosotros"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus voluptatum! Neque vitae iste repellendus, praesentium ullam deleniti dolor asperiores aut aliquid accusamus consequuntur doloremque ipsum, optio, in adipisci. Aperiam sunt totam culpa molestias iste incidunt, ducimus quas debitis impedit. Doloremque, voluptatibus voluptatum! Neque vitae iste repellendus, praesentium ullam deleniti dolor asperiores aut aliquid accusamus consequuntur doloremque ipsum, optio, in adipisci. Aperiam sunt totam culpa molestias iste incidunt, ducimus quas debitis impedit."
            }
          />
          <Typography variant="h4" fontWeight={"bold"} color={colorBlue}>
            Testimonios
          </Typography>

          {testimonials.map((testimony, index) => {
            let isInvert = false;
            if (index % 2 === 0) {
              isInvert = true;
            }
            return (
              <Testimony
                key={testimony.id}
                isInvert={isInvert}
                testimony={testimony}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default WhyUsPage;
