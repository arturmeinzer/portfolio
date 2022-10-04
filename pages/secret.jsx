import React from "react";

import withAuth from "../hoc/withAuth";
import withApollo from "../hoc/withApollo";
import BaseLayout from "../layouts/BaseLayout";
import { ROLE_ADMIN } from "../constants/roles";

const Secret = withAuth(() => (
    <BaseLayout>
        <h1>Secret page</h1>
    </BaseLayout>
), ROLE_ADMIN, { ssr: true });

export default withApollo(Secret);
