/* tslint:disable */
/* eslint-disable */
/**
 * chomestatus API
 * The API for chromestatus.com. chromestatus.com is the official tool used for tracking feature launches in Blink (the browser engine that powers Chrome and many other web browsers). This tool guides feature owners through our launch process and serves as a primary source for developer information that then ripples throughout the web developer ecosystem. More details at: https://github.com/GoogleChrome/chromium-dashboard
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FeatureLink } from './FeatureLink';
import {
    FeatureLinkFromJSON,
    FeatureLinkFromJSONTyped,
    FeatureLinkToJSON,
} from './FeatureLink';

/**
 * 
 * @export
 * @interface SpecMentor
 */
export interface SpecMentor {
    /**
     * 
     * @type {string}
     * @memberof SpecMentor
     */
    email: string;
    /**
     * 
     * @type {Array<FeatureLink>}
     * @memberof SpecMentor
     */
    mentored_features: Array<FeatureLink>;
}

/**
 * Check if a given object implements the SpecMentor interface.
 */
export function instanceOfSpecMentor(value: object): value is SpecMentor {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('mentored_features' in value) || value['mentored_features'] === undefined) return false;
    return true;
}

export function SpecMentorFromJSON(json: any): SpecMentor {
    return SpecMentorFromJSONTyped(json, false);
}

export function SpecMentorFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpecMentor {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'mentored_features': ((json['mentored_features'] as Array<any>).map(FeatureLinkFromJSON)),
    };
}

export function SpecMentorToJSON(value?: SpecMentor | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'mentored_features': ((value['mentored_features'] as Array<any>).map(FeatureLinkToJSON)),
    };
}

