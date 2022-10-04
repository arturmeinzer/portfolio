import React from "react";
/*
import {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
} from "@react-18-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});
*/

import BaseLayout from "../layouts/BaseLayout";
import PageHeader from "../components/shared/PageHeader";

const CV = () => (
    <BaseLayout>
        <PageHeader>
            Work in Progress
        </PageHeader>
        {/*
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
            </Page>
        </Document>
         */}
    </BaseLayout>
);

export default CV;
