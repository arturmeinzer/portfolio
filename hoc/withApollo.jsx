import React from "react";
import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

export default withApollo(
    ({ initialState }) => new ApolloClient({
        uri: `${process.env.BASE_URL}/graphql`,
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
