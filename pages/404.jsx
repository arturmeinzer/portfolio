import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AppLink from "../src/components/shared/AppLink";
import BaseLayout from "../src/layouts/BaseLayout";
import PageHeader from "../src/components/shared/PageHeader";

const FourOhFour = () => (
    <BaseLayout>
        <Container sx={{ textAlign: "center" }}>
            <PageHeader>404 - Page Not Found</PageHeader>
            <AppLink href="/"><Button>Go back home</Button></AppLink>
        </Container>
    </BaseLayout>
);

export default FourOhFour;
