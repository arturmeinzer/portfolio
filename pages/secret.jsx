import React from "react";
import withAuth from "../src/hoc/withAuth";
import withApollo from "../src/hoc/withApollo";
import BaseLayout from "../src/layouts/BaseLayout";

const Secret = withAuth(() => (
    <BaseLayout>
        <h1>Secret page</h1>
    </BaseLayout>
), { ssr: true });

export default withApollo(Secret);
