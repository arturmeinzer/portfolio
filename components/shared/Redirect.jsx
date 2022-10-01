import { useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Redirect = ({ to }) => {
    const router = useRouter();

    useEffect(() => {
        router.push({ pathname: to });
    }, [router, to]);

    return null;
};

Redirect.propTypes = {
    to: PropTypes.string.isRequired,
};

export default Redirect;
