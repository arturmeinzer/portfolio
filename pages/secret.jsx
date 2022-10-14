import React from "react";
import withAuth from "../hoc/withAuth";
import withApollo from "../hoc/withApollo";
import BaseLayout from "../layouts/BaseLayout";

const Secret = withAuth(() => (
    <BaseLayout>
        <h1>Secret page</h1>
    </BaseLayout>
), { ssr: true });

export default withApollo(Secret);
