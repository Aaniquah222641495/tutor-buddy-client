/* tslint:disable */
/* eslint-disable */
/**
 * Student Tutor Booking Management System
 * This is a system allowing students and tutors to book in-person sessions at designated venues on campus.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 222641495@mycput.ac.za
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { LocationDTO } from '../models';
/**
 * LocationApi - axios parameter creator
 * @export
 */
export const LocationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This can only be done by the admin.
         * @summary Add a new venue
         * @param {LocationDTO} body Location object that needs to be added to the system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addLocation: async (body: LocationDTO, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addLocation.');
            }
            const localVarPath = `/location`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This can only be done by the admin.
         * @summary Delete location
         * @param {number} locationId ID of Location that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLocation: async (locationId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationId' is not null or undefined
            if (locationId === null || locationId === undefined) {
                throw new RequiredError('locationId','Required parameter locationId was null or undefined when calling deleteLocation.');
            }
            const localVarPath = `/location/{locationId}`
                .replace(`{${"locationId"}}`, encodeURIComponent(String(locationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This retrieves a location by its id
         * @summary Get a venue by id
         * @param {number} locationId Id of location to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocation: async (locationId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationId' is not null or undefined
            if (locationId === null || locationId === undefined) {
                throw new RequiredError('locationId','Required parameter locationId was null or undefined when calling getLocation.');
            }
            const localVarPath = `/location/{locationId}`
                .replace(`{${"locationId"}}`, encodeURIComponent(String(locationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This can only be done by the admin.
         * @summary Update an existing location
         * @param {LocationDTO} body Updated location object
         * @param {number} locationId ID of location that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLocation: async (body: LocationDTO, locationId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateLocation.');
            }
            // verify required parameter 'locationId' is not null or undefined
            if (locationId === null || locationId === undefined) {
                throw new RequiredError('locationId','Required parameter locationId was null or undefined when calling updateLocation.');
            }
            const localVarPath = `/location/{locationId}`
                .replace(`{${"locationId"}}`, encodeURIComponent(String(locationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LocationApi - functional programming interface
 * @export
 */
export const LocationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * This can only be done by the admin.
         * @summary Add a new venue
         * @param {LocationDTO} body Location object that needs to be added to the system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addLocation(body: LocationDTO, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LocationDTO>>> {
            const localVarAxiosArgs = await LocationApiAxiosParamCreator(configuration).addLocation(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This can only be done by the admin.
         * @summary Delete location
         * @param {number} locationId ID of Location that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLocation(locationId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await LocationApiAxiosParamCreator(configuration).deleteLocation(locationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This retrieves a location by its id
         * @summary Get a venue by id
         * @param {number} locationId Id of location to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocation(locationId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LocationDTO>>> {
            const localVarAxiosArgs = await LocationApiAxiosParamCreator(configuration).getLocation(locationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This can only be done by the admin.
         * @summary Update an existing location
         * @param {LocationDTO} body Updated location object
         * @param {number} locationId ID of location that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLocation(body: LocationDTO, locationId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LocationDTO>>> {
            const localVarAxiosArgs = await LocationApiAxiosParamCreator(configuration).updateLocation(body, locationId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LocationApi - factory interface
 * @export
 */
export const LocationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * This can only be done by the admin.
         * @summary Add a new venue
         * @param {LocationDTO} body Location object that needs to be added to the system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addLocation(body: LocationDTO, options?: AxiosRequestConfig): Promise<AxiosResponse<LocationDTO>> {
            return LocationApiFp(configuration).addLocation(body, options).then((request) => request(axios, basePath));
        },
        /**
         * This can only be done by the admin.
         * @summary Delete location
         * @param {number} locationId ID of Location that needs to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLocation(locationId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return LocationApiFp(configuration).deleteLocation(locationId, options).then((request) => request(axios, basePath));
        },
        /**
         * This retrieves a location by its id
         * @summary Get a venue by id
         * @param {number} locationId Id of location to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocation(locationId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<LocationDTO>> {
            return LocationApiFp(configuration).getLocation(locationId, options).then((request) => request(axios, basePath));
        },
        /**
         * This can only be done by the admin.
         * @summary Update an existing location
         * @param {LocationDTO} body Updated location object
         * @param {number} locationId ID of location that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLocation(body: LocationDTO, locationId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<LocationDTO>> {
            return LocationApiFp(configuration).updateLocation(body, locationId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LocationApi - object-oriented interface
 * @export
 * @class LocationApi
 * @extends {BaseAPI}
 */
export class LocationApi extends BaseAPI {
    /**
     * This can only be done by the admin.
     * @summary Add a new venue
     * @param {LocationDTO} body Location object that needs to be added to the system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public async addLocation(body: LocationDTO, options?: AxiosRequestConfig) : Promise<AxiosResponse<LocationDTO>> {
        return LocationApiFp(this.configuration).addLocation(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This can only be done by the admin.
     * @summary Delete location
     * @param {number} locationId ID of Location that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public async deleteLocation(locationId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return LocationApiFp(this.configuration).deleteLocation(locationId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This retrieves a location by its id
     * @summary Get a venue by id
     * @param {number} locationId Id of location to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public async getLocation(locationId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<LocationDTO>> {
        return LocationApiFp(this.configuration).getLocation(locationId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This can only be done by the admin.
     * @summary Update an existing location
     * @param {LocationDTO} body Updated location object
     * @param {number} locationId ID of location that needs to be updated
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public async updateLocation(body: LocationDTO, locationId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<LocationDTO>> {
        return LocationApiFp(this.configuration).updateLocation(body, locationId, options).then((request) => request(this.axios, this.basePath));
    }
}
