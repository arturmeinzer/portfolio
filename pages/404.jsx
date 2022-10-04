import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppLink from "../components/shared/AppLink";
import BaseLayout from "../layouts/BaseLayout";
import PageHeader from "../components/shared/PageHeader";

const FourOhFour = () => (
    <BaseLayout>
        <Container sx={{ textAlign: "center" }}>
            <PageHeader>404 - Page Not Found</PageHeader>
            <AppLink href="/"><Button>Go back home</Button></AppLink>
        </Container>
    </BaseLayout>
);

export default FourOhFour;
