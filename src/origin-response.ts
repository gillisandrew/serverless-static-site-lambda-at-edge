import { CloudFrontResponseHandler } from 'aws-lambda';

export const handler: CloudFrontResponseHandler = (event, _context, callback) => {
    const response = event.Records[0].cf.response;

    response.headers['Strict-Transport-Security'] = [
        {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
        },
    ];
    response.headers['X-XSS-Protection'] = [
        {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
        },
    ];
    response.headers['X-Content-Type-Options'] = [
        {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
        },
    ];
    response.headers['X-Frame-Options'] = [
        {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
        },
    ];
    response.headers['Referrer-Policy'] = [
        {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
        },
    ];
    response.headers['Content-Security-Policy'] = [
        {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests;',
        },
    ];
    callback(null, response);
};
