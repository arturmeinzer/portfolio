import { useLazyQuery, useMutation, useQuery } from "@apollo/react-hooks";
import {
    CREATE_PROJECT,
    DELETE_PROJECT,
    GET_PROJECTS,
    GET_PROJECT,
    UPDATE_PROJECT,
    LOGIN,
    LOGOUT,
    GET_USER,
    CREATE_JOB,
    GET_JOBS, UPDATE_JOB, DELETE_JOB, GET_JOB, REGISTER,
} from "../queries";

export const useGetProject = (options) => useQuery(GET_PROJECT, options);
export const useGetProjects = () => useQuery(GET_PROJECTS);
export const useUpdateProject = () => useMutation(UPDATE_PROJECT);
export const useCreateProject = () => useMutation(CREATE_PROJECT, {
    refetchQueries: [
        { query: GET_PROJECTS },
    ],
});

export const useDeleteProject = () => useMutation(DELETE_PROJECT, {
    refetchQueries: [
        { query: GET_PROJECTS },
    ],
});

export const useGetJob = (options) => useQuery(GET_JOB, options);
export const useGetJobs = () => useQuery(GET_JOBS);
export const useUpdateJob = () => useMutation(UPDATE_JOB);
export const useCreateJob = () => useMutation(CREATE_JOB, {
    refetchQueries: [
        { query: GET_JOBS },
    ],
});

export const useDeleteJob = () => useMutation(DELETE_JOB, {
    refetchQueries: [
        { query: GET_JOBS },
    ],
});

// Auth actions ----------------------
export const useLogin = () => useMutation(LOGIN, {
    update(cache, { data: { login } }) {
        cache.writeQuery({
            query: GET_USER,
            data: { user: login },
        });
    },
});
export const useLogout = () => useMutation(LOGOUT);
export const useRegister = () => useMutation(REGISTER);
export const useLazyGetUser = () => useLazyQuery(GET_USER);
export const useGetUser = () => useQuery(GET_USER);
