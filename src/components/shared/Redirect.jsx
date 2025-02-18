import { useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Redirect = ({ to, message }) => {
    const router = useRouter();

    useEffect(() => {
        if (message) {
            router.push({ pathname: to, query: { message } });
        } else {
            router.push({ pathname: to });
        }
    }, [router, to, message]);

    return null;
};

Redirect.propTypes = {
    to: PropTypes.string.isRequired,
    message: PropTypes.string,
};

Redirect.defaultProps = {
    message: null,
};

export default Redirect;
