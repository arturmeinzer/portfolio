import React from "react";
import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

const port = parseInt(process.env.NEXT_PUBLIC_PORT, 10);

export default withApollo(
    ({ initialState }) => new ApolloClient({
        uri: `http://localhost:${port}/graphql`,
        cache: new InMemoryCache().restore(initialState || {}),
    }),
    {
        render: ({ Page, props }) => (
            <ApolloProvider client={props.apollo}>
                <Page {...props} />
            </ApolloProvider>
        ),
    },
);
