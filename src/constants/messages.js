export const NOT_AUTHORIZED = "NOT_AUTHORIZED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const REGISTERED = "REGISTERED";

export const MESSAGES = {
    [NOT_AUTHORIZED]: { value: "You are not authorized to visit this page!", severity: "error" },
    [NOT_AUTHENTICATED]: { value: "You need to log in to get access!", severity: "error" },
    [REGISTERED]: { value: "You have been successfully registered, you can log in now!", severity: "success" },
};
