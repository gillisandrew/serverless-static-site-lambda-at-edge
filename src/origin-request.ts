import { CloudFrontRequestHandler } from 'aws-lambda';

export const handler: CloudFrontRequestHandler = (event, _context, callback) => {
    const request = event.Records[0].cf.request;
    if (request.uri.endsWith('/index.html')) {
        const redirect = {
            status: '301',
            statusDescription: 'Moved Permanently',
            headers: {
                location: [
                    {
                        key: 'Location',
                        value: request.uri.slice(0, -10),
                    },
                ],
                'cache-control': [
                    {
                        key: 'Cache-Control',
                        value: 'max-age=3600',
                    },
                ],
            },
        };
        callback(null, redirect);
    } else {
        callback(null, request);
    }
};
