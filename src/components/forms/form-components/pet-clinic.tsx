import React, { useState } from "react"
import { Box, Flex, Heading, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useFormik, Form } from "formik"
import { useAuth0 } from "@auth0/auth0-react"

import { InputField } from "../form-elements/input"
import Helmet from "react-helmet"

declare global {
  interface Window {
    cloudinary: any
  }
}

interface IPetClinicForm {
  path: string
}

export const PetClinicForm: React.FC<IPetClinicForm> = ({ path }) => {
  const { getAccessTokenSilently } = useAuth0()
  const [logoURL, setLogoURL] = useState<null | string>(null)
  const handleUpload = () => {
    if (typeof window !== "undefined") {
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "dbravos",
          uploadPreset: "petclinic",
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setLogoURL(result.info.secure_url)
          }
        }
      )
      myWidget.open()
    }
  }
  const formik = useFormik({
    initialValues: {
      petclinic: "",
      ruc: "",
      phone: "",
      country: "",
      province: "",
      district: "",
      whatsapp: "",
      city: "",
      address: "",
    },
    onSubmit: async values => {
      alert(JSON.stringify(values, null, 2))
      const token = await getAccessTokenSilently()

      const response = await fetch(
        "http://jemmyperez.pythonanywhere.com/veterinarias",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: values.petclinic,
            logo: logoURL,
            ruc: values.ruc,
            Address: values.address,
            Distrito: values.district,
            ciudad: values.city,
            pais: values.country,
            provincia: values.province,
            telefono: values.phone,
            whatsapp: values.whatsapp,
          }),
        }
      )
        .then(r => r.json())
        .catch(err => console.log(err))
      console.log({ response })
    },
  })

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void =
    formik.handleSubmit
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
    >
      <Helmet>
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Helmet>
      <Box
        bg="white"
        borderTopRadius="3xl"
        boxShadow="0px 0px 8px 2px rgba(124, 77, 255, 0.1), 0px -4px 8px rgba(124, 77, 255, 0.2)"
        p="8"
        borderColor="brand.100"
        borderWidth="1px"
        borderStyle="solid"
      >
        <Form onSubmit={handleSubmit}>
          <Flex direction="column" gridGap="8">
            <Heading as="h1" textAlign="center" textColor="brand.800">
              Registra tu clínica
            </Heading>
            <Flex gridGap="4" direction="column">
              <InputField
                label={"Clínica Veterinaria"}
                type="text"
                name="petclinic"
                placeholder="PETC"
                handleChange={formik.handleChange}
                value={formik.values.petclinic}
              />
              <Button
                onClick={handleUpload}
                colorScheme="secondary"
                textColor="brand.800"
                fontWeight="700"
              >{`Click acá para ${
                !!logoURL ? "editar" : "subir"
              } tu logo`}</Button>
              <InputField
                label={"RUC"}
                type="number"
                name="ruc"
                placeholder={"10212312312"}
                handleChange={formik.handleChange}
                value={formik.values.ruc}
              />
              <InputField
                label={"Teléfono"}
                type="tel"
                name="phone"
                placeholder={"+51929291231"}
                handleChange={formik.handleChange}
                value={formik.values.phone}
              />
              <InputField
                label={"Whatsapp"}
                type="tel"
                name="whatsapp"
                placeholder={"+51929291231"}
                handleChange={formik.handleChange}
                value={formik.values.whatsapp}
              />
              <InputField
                label={"País"}
                type="text"
                name="country"
                placeholder={"Perú"}
                handleChange={formik.handleChange}
                value={formik.values.country}
              />
              <InputField
                label={"Provincia"}
                type="text"
                name="province"
                placeholder={"Lima"}
                handleChange={formik.handleChange}
                value={formik.values.province}
              />
              <InputField
                label={"Ciudad"}
                type="text"
                name="city"
                placeholder={"Lima"}
                handleChange={formik.handleChange}
                value={formik.values.city}
              />
              <InputField
                label={"Distrito"}
                type="text"
                name="district"
                placeholder={"Lima"}
                handleChange={formik.handleChange}
                value={formik.values.district}
              />
              <InputField
                label={"Dirección"}
                type="text"
                name="address"
                placeholder={"Av. Las Lomas 123 Urb. Mangomarca"}
                handleChange={formik.handleChange}
                value={formik.values.address}
              />
              <Button
                type="submit"
                colorScheme="brand"
                w="max-content"
                mx="auto"
                borderRadius="3xl"
              >
                Registrarme ahora
              </Button>
            </Flex>
          </Flex>
        </Form>
      </Box>
    </motion.div>
  )
}
