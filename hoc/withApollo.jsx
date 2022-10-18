import React from "react";
import withApollo from "next-with-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { monthDiff } from "../utils/dateHelper";
import moment from "moment/moment.js";

export default withApollo(
    ({ initialState }) => new ApolloClient({
        uri: `${process.env.BASE_URL}/api/graphql`,
        cache: new InMemoryCache().restore(initialState || {}),
        resolvers: {
            Job: {
                months({ startDate, endDate }) {
                    return monthDiff(startDate, endDate);
                },
                endDate({ endDate }) {
                    if (endDate === null) {
                        return (moment().unix() * 1000);
                    }
                    return endDate;
                },
            },
        },
    }),
    {
        render: ({ Page, props }) => (
            <ApolloProvider client={props.apollo}>
                <Page {...props} />
            </ApolloProvider>
        ),
    },
);
